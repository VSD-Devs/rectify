import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import CookieBanner from '@/components/CookieBanner';

const inter = Inter({ subsets: ['latin'] });

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rectifyinternational.com';
const siteName = 'Rectify';
const defaultTitle = 'Rectify - Energy Recruitment & Consultancy';
const defaultDescription = 'Specialists in renewable energy recruitment and talent acquisition. Helping energy companies find business-critical talent to build a sustainable future across the USA, UK, and Europe.';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
    'renewable energy recruitment',
    'energy recruitment consultancy',
    'solar PV recruitment',
    'wind energy recruitment',
    'battery storage recruitment',
    'ESG recruitment',
    'engineering recruitment',
    'technology recruitment',
    'energy talent acquisition',
    'recruitment USA',
    'recruitment UK',
    'recruitment Europe',
    'executive search',
    'permanent placement',
    'contract recruitment',
    'talent consulting',
  ],
  authors: [{ name: 'Rectify' }],
  creator: 'Rectify',
  publisher: 'Rectify',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/rectify-logo.png',
    shortcut: '/rectify-logo.png',
    apple: '/rectify-logo.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: baseUrl,
    siteName: siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: `${baseUrl}/rectify-logo.png`,
        width: 1200,
        height: 630,
        alt: 'Rectify - Energy Recruitment & Consultancy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: [`${baseUrl}/rectify-logo.png`],
    creator: '@rectify',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  category: 'Recruitment & Consultancy',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster position="top-right" richColors />
        <CookieBanner />
      </body>
    </html>
  );
}
