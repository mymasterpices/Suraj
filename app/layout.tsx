import type { Metadata } from 'next';
import './globals.css';
import { personalInfo } from '@/data/personal';

export const metadata: Metadata = {
  title: `${personalInfo.name} | ${personalInfo.title} (8.5+ Yrs Exp)`,
  description:
    'Full Stack Web Developer with 8.5+ years of experience in Node.js, TypeScript, MEAN stack, Shopify (Remix), WordPress, and AI agent integration. Delivered 30+ production websites.',
  keywords: [
    'Suraj Sharma',
    'Full Stack Developer',
    'MEAN Stack Developer',
    'Node.js Developer',
    'Angular Developer',
    'Shopify Developer',
    'Remix Apps',
    'WordPress Developer',
    'AI Agent Developer',
    'Web Developer New Delhi',
    'E-commerce Developer India',
  ],
  authors: [{ name: personalInfo.name, url: 'https://surajsharma.dev' }],
  creator: personalInfo.name,
  metadataBase: new URL('https://surajsharma.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'profile',
    firstName: 'Suraj',
    lastName: 'Sharma',
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.headline,
    url: 'https://surajsharma.dev',
    siteName: 'Suraj Sharma Portfolio',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} - Full Stack Developer`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description: personalInfo.headline,
    creator: '@surajsharma',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Structured JSON-LD schema for Person & Developer
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    telephone: personalInfo.phone,
    email: personalInfo.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'New Delhi',
      addressCountry: 'IN',
    },
    description: personalInfo.summary,
    url: 'https://surajsharma.dev',
    sameAs: [
      personalInfo.linkedin,
      personalInfo.github,
      'https://crm.jools.in',
    ],
    knowsAbout: [
      'Full Stack Development',
      'MEAN Stack',
      'Node.js',
      'Express.js',
      'Angular',
      'MongoDB',
      'TypeScript',
      'Shopify Liquid & Remix',
      'WordPress & WooCommerce',
      'AI Agent Automation',
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const storedTheme = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-slate-50 text-slate-900 dark:bg-[#080c14] dark:text-slate-100 antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
