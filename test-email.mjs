// Quick utility to verify Gmail SMTP credentials independently
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

// Read .env.local if present
const envPath = path.join(process.cwd(), '.env.local');
let envConfig = {};
if (fs.existsSync(envPath)) {
  const lines = fs.readFileSync(envPath, 'utf-8').split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#') && trimmed.includes('=')) {
      const [key, ...vals] = trimmed.split('=');
      envConfig[key.trim()] = vals.join('=').trim();
    }
  }
}

const smtpUser = process.env.SMTP_USER || envConfig.SMTP_USER || 'sooraj.sharma222@gmail.com';
const smtpPass = process.env.SMTP_PASS || envConfig.SMTP_PASS;
const ownerEmail = process.env.OWNER_EMAIL || envConfig.OWNER_EMAIL || 'sooraj.sharma222@gmail.com';

console.log('--- SMTP Diagnostic Test ---');
console.log('SMTP Host: smtp.gmail.com:465');
console.log('Sending Account (SMTP_USER):', smtpUser);
console.log('Recipient (OWNER_EMAIL):', ownerEmail);

if (!smtpPass || smtpPass === 'your-16-character-gmail-app-password') {
  console.log('\n❌ Live delivery is not active yet because SMTP_PASS is missing.');
  console.log('👉 To enable live sending to your inbox:');
  console.log('   1. Visit: https://myaccount.google.com/apppasswords');
  console.log('   2. Create an App Password for "Portfolio"');
  console.log('   3. Put the 16-character code into portfolio/.env.local:');
  console.log('      SMTP_USER=sooraj.sharma222@gmail.com');
  console.log('      SMTP_PASS=abcdefghijklmnop\n');
  process.exit(0);
}

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
});

console.log('\nVerifying SMTP connection with Google servers...');
try {
  await transporter.verify();
  console.log('✅ SMTP connection successful!');
  
  console.log(`Sending a test email to ${ownerEmail}...`);
  const info = await transporter.sendMail({
    from: `"Portfolio Test" <${smtpUser}>`,
    to: ownerEmail,
    subject: '🧪 Test Inquiry from Portfolio Setup',
    text: 'Congratulations! Your portfolio contact form SMTP is configured correctly and delivering to sooraj.sharma222@gmail.com.',
  });
  console.log('🎉 Email sent successfully! Message ID:', info.messageId);
  console.log(`Check your inbox at ${ownerEmail}`);
} catch (err) {
  console.error('❌ SMTP Error:', err.message);
}
