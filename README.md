# 🚀 Suraj Sharma – Personal Portfolio & Inquiries Web App

A modern, fast, fully responsive personal portfolio website engineered for **Suraj Sharma** (Full Stack / MEAN Stack Developer with 8.5+ years of experience), built on **Next.js (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**, featuring a functional inquiry/contact form that dispatches submissions via SMTP to the owner's inbox.

---

## 🌟 Key Highlights

- **Modern Tech Stack**: Next.js 16 App Router, React 19, TypeScript, Tailwind CSS with custom electric-blue & violet glassmorphism.
- **Dynamic Typing Hero**: Animated typewriter roles, status pill ("Available for Projects"), download resume button, and quick socials.
- **27+ Filterable Projects**: Instant tab filtering across _MEAN / CRM Apps_, _E-Commerce_, _Business Websites_, and _Personal / Blog_, plus live text search, domain initials gradient placeholders, and external link buttons (`rel="noopener noreferrer"`).
- **Interactive Experience Timeline**: Vertical milestone timeline with 5 distinct career stages, current role indicator, and key accomplishments.
- **Grouped Skills & AI Spotlight**: Categorized proficiencies with an active focus badge for emerging AI agent development.
- **Working Inquiry Form**:
  - Full Name, Email, Phone, Service Interested In, Budget Range, and Project Scope.
  - Client-side validation + server-side validation & HTML sanitization.
  - Hidden honeypot anti-spam field (`_hp_gotcha`).
  - IP-based sliding window rate limiting (5 requests per 15 minutes).
  - Nodemailer SMTP email delivery with `Reply-To` set to the visitor for instant replies.
  - Optional visitor auto-reply confirmation email (`AUTO_REPLY=true`).
  - Automatic JSON backup log to `data/inquiries.json` so no lead is ever lost even without SMTP credentials.
- **SEO & Accessibility**: Complete Open Graph, Twitter cards, JSON-LD `Person` schema, semantic HTML, `sitemap.ts`, `robots.ts`, SVG favicon, and WCAG AA contrast.
- **Dark/Light Theme**: Sleek dark-mode-first aesthetic with light/dark toggle persisted in `localStorage`.

---

## 📁 Project Architecture

```
portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts         # POST /api/contact handler with Nodemailer & rate limiting
│   ├── globals.css              # Tailwind base, dark mode variables, glassmorphism
│   ├── layout.tsx               # Root layout, Open Graph meta & JSON-LD Person schema
│   ├── page.tsx                 # Single-page assembly
│   ├── robots.ts                # Dynamic robots.txt
│   └── sitemap.ts               # Dynamic sitemap.xml
├── components/
│   ├── About.tsx                # Bio summary, avatar, and 4 animated stat counters
│   ├── BackgroundEffects.tsx    # Ambient gradient glow orbs & subtle dot grid
│   ├── Contact.tsx              # Inquiry form, client validation & direct contact channels
│   ├── Education.tsx            # Academic qualifications & Matrix Web Studio awards
│   ├── Experience.tsx           # Vertical milestone timeline (5 career roles)
│   ├── Footer.tsx               # Quick links, back-to-top button & copyright
│   ├── Hero.tsx                 # Typing role animation, CTAs & code terminal card
│   ├── Navbar.tsx               # Sticky blur header & mobile drawer
│   ├── Projects.tsx             # Filterable tabs, live search & domain initial badges
│   ├── Services.tsx             # 6 core services with feature checklists
│   ├── Skills.tsx               # Grouped skill badges & AI Agent spotlight
│   └── ThemeToggle.tsx          # Dark / Light theme switcher
├── data/
│   ├── education.ts             # Degrees & peer awards data
│   ├── experience.ts            # Career history & bullet points
│   ├── inquiries.json           # Local backup log of all form submissions
│   ├── personal.ts              # Bio, contacts, stats & social links
│   ├── projects.ts              # 27+ real project items with categories
│   ├── services.ts              # 6 service offerings
│   └── skills.ts                # Technical skill groupings
├── lib/
│   └── mailer.ts                # Nodemailer transport, rate limit cache & HTML templates
├── public/
│   ├── favicon.svg              # Modern code bracket gradient logo
│   └── resume.pdf               # Downloadable resume placeholder
├── env.example.txt              # Documented environment variables template
├── next.config.mjs
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

---

## 🛠️ Quick Start (Local Setup)

### 1. Prerequisites

- Node.js 18+ or 20+ (Node.js 24 recommended)
- npm 10+

### 2. Installation

Open a terminal in the `portfolio` directory and run:

```bash
cd portfolio
npm install
```

### 3. Configure Environment Variables

Copy `env.example.txt` to `.env.local`:

```bash
cp env.example.txt .env.local
```

_(On Windows PowerShell, run: `Copy-Item env.example.txt .env.local`)_

Edit `.env.local` with your configuration:

```env
OWNER_EMAIL=
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=
SMTP_PASS=your-16-character-gmail-app-password
AUTO_REPLY=true
```

> **Note:** If `SMTP_PASS` is left unconfigured, the app will still function seamlessly in local development! It safely writes every submission to `data/inquiries.json` with a console notice.

### 4. Run Development Server

```bash
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 🔑 How to Generate a Gmail App Password

For live email delivery via Gmail SMTP:

1. Go to your [Google Account](https://myaccount.google.com/).
2. Select **Security** from the left navigation.
3. Under _"How you sign in to Google"_, verify that **2-Step Verification** is turned **ON**.
4. Search for **App Passwords** in the search bar at the top (or visit `https://myaccount.google.com/apppasswords`).
5. Enter an app name (e.g. `Portfolio Contact Form`).
6. Click **Create**.
7. Google will display a **16-character password** (e.g., `abcd efgh ijkl mnop`).
8. Copy this 16-character code (without spaces) and paste it into `.env.local` as `SMTP_PASS`:
   ```env
   SMTP_USER=
   SMTP_PASS=abcdefghijklmnop
   ```
9. Restart your dev server (`npm run dev`). Any submission via the website will now be delivered straight to your Gmail!

---

## ✏️ How to Edit Content & Add Projects

All portfolio data is separated into clean, modular TypeScript files inside the `data/` directory:

| Content Area                   | File Location        | How to Update                                                                                    |
| :----------------------------- | :------------------- | :----------------------------------------------------------------------------------------------- |
| **Personal Info, Bio & Stats** | `data/personal.ts`   | Edit name, headline, phone, email, and stat numbers.                                             |
| **Projects (Add/Edit)**        | `data/projects.ts`   | Add a new object to the `projects` array with `title`, `url`, `category`, `description`, `tags`. |
| **Skills & Proficiencies**     | `data/skills.ts`     | Add or update skill clusters, proficiency levels, and category descriptions.                     |
| **Experience Timeline**        | `data/experience.ts` | Add new roles, adjust date periods, and customize bullet point achievements.                     |
| **Services Offered**           | `data/services.ts`   | Update the 6 services, descriptions, and feature bullet lists.                                   |
| **Education & Awards**         | `data/education.ts`  | Update degrees, institutions, or add new recognitions.                                           |

---

## 🧪 Testing the Inquiry Form

You can test the form directly in the browser or via curl:

### Test via Browser

1. Scroll down to the **Contact** section.
2. Try submitting with empty fields: inline validation errors will appear under required fields.
3. Fill in:
   - **Name**: `Jane Smith`
   - **Email**: `jane.smith@example.com`
   - **Service**: `Custom Web App`
   - **Message**: `Hi Suraj, we love your portfolio and would like to build an enterprise CRM platform.`
4. Click **Submit Inquiry Now**.
5. You will see a success confirmation banner.
6. Check `data/inquiries.json` to verify that the submission was recorded with a unique ID and ISO timestamp!

### Test Rate Limiting

If a client submits more than 5 requests within 15 minutes from the same IP address, the server responds with:
`HTTP 429 Too Many Requests: Too many submissions from this IP. Please wait...`

---

## 🚢 Deployment Guide

### Option 1: Vercel (Recommended for Next.js)

1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com) and click **Add New Project**.
3. Import the repository and set the Root Directory to `portfolio`.
4. Under **Environment Variables**, add:
   - `OWNER_EMAIL`: ``
   - `SMTP_USER`: ``
   - `SMTP_PASS`: `your-16-char-app-password`
   - `AUTO_REPLY`: `true`
5. Click **Deploy**. Your site is live on a global edge CDN with serverless route handlers!

### Option 2: VPS with PM2 + Nginx

1. SSH into your VPS:
   ```bash
   ssh user@your-server-ip
   ```
2. Clone repo and install:
   ```bash
   cd /var/www/portfolio
   npm install
   npm run build
   ```
3. Start with PM2:
   ```bash
   pm2 start npm --name "suraj-portfolio" -- start
   pm2 save
   ```
4. Point Nginx reverse proxy to `http://127.0.0.1:3005`.

---

## 📄 License

MIT © Suraj Sharma. Crafted with care.
