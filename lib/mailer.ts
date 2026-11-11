import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

// HTML escaping helper
export function escapeHtml(str: string): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// In-memory rate limiting map: ip -> { count, resetTime }
interface RateLimitRecord {
  count: number;
  resetTime: number;
}
const rateLimitMap = new Map<string, RateLimitRecord>();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

export function checkRateLimit(ip: string): { allowed: boolean; retryAfterSeconds?: number } {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true };
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    const retryAfter = Math.ceil((record.resetTime - now) / 1000);
    return { allowed: false, retryAfterSeconds: retryAfter };
  }

  record.count += 1;
  return { allowed: true };
}

// Save inquiry to local JSON backup
export function saveInquiryBackup(inquiry: Record<string, any>) {
  try {
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    const filePath = path.join(dataDir, 'inquiries.json');
    let existing: any[] = [];
    if (fs.existsSync(filePath)) {
      try {
        const content = fs.readFileSync(filePath, 'utf-8');
        existing = JSON.parse(content || '[]');
      } catch {
        existing = [];
      }
    }
    existing.unshift({
      id: `inq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      timestamp: new Date().toISOString(),
      ...inquiry,
    });
    fs.writeFileSync(filePath, JSON.stringify(existing, null, 2), 'utf-8');
    console.log(`[Inquiry Backup] Successfully saved inquiry from ${inquiry.email} to inquiries.json`);
  } catch (err) {
    console.error('[Inquiry Backup Error] Failed to write backup:', err);
  }
}

// Email template for Owner
export function generateOwnerEmailHtml(data: {
  name: string;
  email: string;
  phone?: string;
  service: string;
  budget?: string;
  message: string;
  ip?: string;
}): string {
  const safeName = escapeHtml(data.name);
  const safeEmail = escapeHtml(data.email);
  const safePhone = escapeHtml(data.phone || 'Not provided');
  const safeService = escapeHtml(data.service);
  const safeBudget = escapeHtml(data.budget || 'Not specified');
  const safeMessage = escapeHtml(data.message).replace(/\n/g, '<br/>');
  const dateStr = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b0f19; color: #e2e8f0; margin: 0; padding: 30px 15px; }
    .container { max-width: 600px; margin: 0 auto; background: #131e33; border: 1px solid #1e293b; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.5); }
    .header { background: linear-gradient(135deg, #2563eb, #7c3aed); padding: 24px; text-align: center; }
    .header h1 { margin: 0; font-size: 20px; color: #ffffff; letter-spacing: -0.5px; }
    .header p { margin: 4px 0 0; font-size: 13px; color: #cbd5e1; }
    .body { padding: 24px; }
    .field { margin-bottom: 16px; border-bottom: 1px solid #1e293b; padding-bottom: 12px; }
    .field:last-child { border-bottom: none; }
    .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #94a3b8; margin-bottom: 4px; }
    .value { font-size: 15px; color: #f8fafc; font-weight: 500; }
    .message-box { background: #0b1120; border: 1px solid #27354f; border-radius: 8px; padding: 16px; margin-top: 8px; line-height: 1.6; color: #e2e8f0; white-space: pre-wrap; font-size: 14px; }
    .badge { display: inline-block; background: rgba(37, 99, 235, 0.2); color: #60a5fa; border: 1px solid rgba(59, 130, 246, 0.4); padding: 3px 10px; border-radius: 9999px; font-size: 12px; font-weight: 600; }
    .footer { background: #0a0e17; padding: 16px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #1e293b; }
    .btn-reply { display: inline-block; background: #2563eb; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-size: 14px; font-weight: 600; margin-top: 16px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🚀 New Portfolio Inquiry Received</h1>
      <p>Submitted via surajsharma.dev on ${dateStr} IST</p>
    </div>
    <div class="body">
      <div class="field">
        <div class="label">Client Name</div>
        <div class="value">${safeName}</div>
      </div>
      <div class="field">
        <div class="label">Email Address</div>
        <div class="value"><a href="mailto:${safeEmail}" style="color: #38bdf8; text-decoration: none;">${safeEmail}</a></div>
      </div>
      <div class="field">
        <div class="label">Phone Number</div>
        <div class="value">${safePhone !== 'Not provided' ? `<a href="tel:${safePhone}" style="color: #38bdf8; text-decoration: none;">${safePhone}</a>` : safePhone}</div>
      </div>
      <div class="field">
        <div class="label">Service Required</div>
        <div class="value"><span class="badge">${safeService}</span></div>
      </div>
      <div class="field">
        <div class="label">Estimated Budget</div>
        <div class="value">${safeBudget}</div>
      </div>
      <div class="field">
        <div class="label">Client Message</div>
        <div class="message-box">${safeMessage}</div>
      </div>
      <div style="text-align: center; margin-top: 20px;">
        <a href="mailto:${safeEmail}?subject=Re: Your Inquiry on Suraj Sharma Portfolio (${safeService})" class="btn-reply">
          ✉️ Direct Reply to ${safeName}
        </a>
      </div>
    </div>
    <div class="footer">
      This inquiry was sent to your portfolio inbox. Visitor IP: ${data.ip || 'Unknown'}.
    </div>
  </div>
</body>
</html>
`;
}

// Auto-reply email to visitor
export function generateAutoReplyHtml(name: string, service: string): string {
  const safeName = escapeHtml(name);
  const safeService = escapeHtml(service);

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b0f19; color: #e2e8f0; margin: 0; padding: 30px 15px; }
    .container { max-width: 560px; margin: 0 auto; background: #131e33; border: 1px solid #1e293b; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.5); }
    .header { background: linear-gradient(135deg, #2563eb, #7c3aed); padding: 24px; text-align: center; color: #ffffff; }
    .header h1 { margin: 0; font-size: 20px; }
    .body { padding: 24px; line-height: 1.6; font-size: 15px; color: #cbd5e1; }
    .body p { margin-bottom: 16px; }
    .highlight { color: #60a5fa; font-weight: 600; }
    .card { background: #0f172a; border-left: 4px solid #2563eb; padding: 14px 18px; border-radius: 4px; margin: 18px 0; font-size: 14px; }
    .footer { background: #0a0e17; padding: 18px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #1e293b; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Hello ${safeName}, thanks for getting in touch!</h1>
    </div>
    <div class="body">
      <p>Thank you for reaching out regarding <span class="highlight">${safeService}</span>. I have received your message and am reviewing the project details.</p>
      
      <div class="card">
        <strong>What happens next?</strong><br/>
        I typically review new project briefs and respond within <strong>12 to 24 hours</strong> with initial thoughts or an invitation for a brief discovery call.
      </div>

      <p>If you have any urgent details or assets to share in the meantime, feel free to reply directly to this email or reach out on WhatsApp/Phone at <a href="tel:+919205532748" style="color:#38bdf8;">+91-9205532748</a>.</p>

      <p style="margin-top: 24px;">
        Warm regards,<br/>
        <strong>Suraj Sharma</strong><br/>
        <span style="font-size: 13px; color: #94a3b8;">Full Stack / MEAN Stack Developer</span><br/>
        <span style="font-size: 12px; color: #64748b;">New Delhi, India</span>
      </p>
    </div>
    <div class="footer">
      © ${new Date().getFullYear()} Suraj Sharma • <a href="https://crm.jools.in" style="color: #64748b;">Portfolio & Projects</a>
    </div>
  </div>
</body>
</html>
`;
}

// Mailer sending utility
export async function sendInquiryEmail(data: {
  name: string;
  email: string;
  phone?: string;
  service: string;
  budget?: string;
  message: string;
  ip?: string;
}): Promise<{ sent: boolean; autoReplySent: boolean; error?: string }> {
  // Always back up locally first
  saveInquiryBackup(data);

  const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
  const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10);
  const smtpSecure = process.env.SMTP_SECURE !== 'false';
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const ownerEmail = process.env.OWNER_EMAIL || 'sooraj.sharma222@gmail.com';
  const shouldAutoReply = process.env.AUTO_REPLY === 'true';

  if (!smtpUser || !smtpPass || smtpPass === 'your-16-character-gmail-app-password') {
    console.warn(
      '[SMTP Notice] SMTP_USER or SMTP_PASS is not configured with live credentials. The inquiry has been securely stored in data/inquiries.json. To enable live Gmail delivery, add your Gmail App Password to your environment variables.'
    );
    return { sent: false, autoReplySent: false, error: 'SMTP not configured' };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const ownerSubject = `New Portfolio Inquiry from ${data.name} – ${data.service}`;
    const ownerHtml = generateOwnerEmailHtml(data);

    await transporter.sendMail({
      from: `"${data.name} (via Portfolio)" <${smtpUser}>`,
      to: ownerEmail,
      replyTo: data.email,
      subject: ownerSubject,
      html: ownerHtml,
      text: `New Portfolio Inquiry\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || 'N/A'}\nService: ${data.service}\nBudget: ${data.budget || 'N/A'}\n\nMessage:\n${data.message}`,
    });

    console.log(`[SMTP] Successfully delivered inquiry email to ${ownerEmail}`);

    let autoReplySent = false;
    if (shouldAutoReply) {
      try {
        await transporter.sendMail({
          from: `"Suraj Sharma" <${smtpUser}>`,
          to: data.email,
          subject: `Thanks for contacting Suraj Sharma – ${data.service}`,
          html: generateAutoReplyHtml(data.name, data.service),
          text: `Hi ${data.name},\n\nThank you for reaching out regarding ${data.service}. I have received your message and will get back to you within 24 hours.\n\nBest regards,\nSuraj Sharma\nFull Stack Developer\n+91-9205532748`,
        });
        autoReplySent = true;
        console.log(`[SMTP] Auto-reply sent to visitor: ${data.email}`);
      } catch (autoErr) {
        console.error('[SMTP] Failed to send auto-reply to visitor:', autoErr);
      }
    }

    return { sent: true, autoReplySent };
  } catch (err: any) {
    console.error('[SMTP Error] Failed to send inquiry email:', err);
    return { sent: false, autoReplySent: false, error: err.message };
  }
}
