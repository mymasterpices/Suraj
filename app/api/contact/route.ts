import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit, sendInquiryEmail } from '@/lib/mailer';

// Basic email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    // 1. IP extraction & Rate limiting
    const forwardedFor = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : (realIp || '127.0.0.1');

    const rateCheck = checkRateLimit(ip);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        {
          success: false,
          error: `Too many submissions from this IP. Please wait ${rateCheck.retryAfterSeconds} seconds before sending another message.`,
        },
        { status: 429 }
      );
    }

    // 2. Parse request body
    const body = await request.json().catch(() => null);
    if (!body || typeof body !== 'object') {
      return NextResponse.json(
        { success: false, error: 'Invalid request payload. Expected JSON body.' },
        { status: 400 }
      );
    }

    const {
      name,
      email,
      phone,
      service,
      budget,
      message,
      _hp_gotcha, // Honeypot field
      website,    // Honeypot field
    } = body;

    // 3. Honeypot check: silently accept bots without processing
    if (_hp_gotcha || website) {
      console.warn(`[Spam Guard] Bot caught by honeypot from IP: ${ip}`);
      // Return 200 OK so spam bots think it succeeded
      return NextResponse.json({
        success: true,
        message: 'Your inquiry has been successfully received.',
      });
    }

    // 4. Server-side validation
    const errors: Record<string, string> = {};

    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      errors.name = 'Full name is required (at least 2 characters).';
    } else if (name.trim().length > 100) {
      errors.name = 'Full name must not exceed 100 characters.';
    }

    if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email.trim())) {
      errors.email = 'A valid email address is required.';
    }

    if (phone && typeof phone === 'string' && phone.trim().length > 30) {
      errors.phone = 'Phone number is too long (maximum 30 characters).';
    }

    if (!service || typeof service !== 'string' || service.trim().length === 0) {
      errors.service = 'Please select a service you are interested in.';
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      errors.message = 'Message is required and must be at least 10 characters.';
    } else if (message.trim().length > 5000) {
      errors.message = 'Message must not exceed 5000 characters.';
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed. Please review your input.',
          details: errors,
        },
        { status: 400 }
      );
    }

    // 5. Send Email & Record Backup
    const emailResult = await sendInquiryEmail({
      name: name.trim(),
      email: email.trim(),
      phone: phone ? phone.trim() : undefined,
      service: service.trim(),
      budget: budget ? budget.trim() : undefined,
      message: message.trim(),
      ip,
    });

    const isLiveSmtp = emailResult.sent;

    return NextResponse.json(
      {
        success: true,
        message: isLiveSmtp
          ? 'Thank you! Your inquiry has been sent to Suraj Sharma. You will hear back shortly.'
          : 'Thank you! Your inquiry has been safely logged in our system. Suraj Sharma will contact you soon.',
        details: {
          savedToBackup: true,
          emailDispatched: isLiveSmtp,
          autoReplySent: emailResult.autoReplySent,
        },
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('[API /api/contact Error]', error);
    return NextResponse.json(
      {
        success: false,
        error: 'An internal server error occurred while processing your request. Please try again later or email directly.',
      },
      { status: 500 }
    );
  }
}
