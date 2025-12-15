import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rectifyinternational.com';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read Rectify\'s Privacy Policy to understand how we collect, use, and protect your personal information when you use our recruitment services.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Privacy Policy | Rectify',
    description: 'Read Rectify\'s Privacy Policy to understand how we collect, use, and protect your personal information.',
    url: `${baseUrl}/privacy`,
    type: 'website',
  },
  alternates: {
    canonical: `${baseUrl}/privacy`,
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


