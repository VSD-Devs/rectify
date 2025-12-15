import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rectifyinternational.com';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Read Rectify\'s Terms and Conditions governing the use of our website and recruitment services.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Terms & Conditions | Rectify',
    description: 'Read Rectify\'s Terms and Conditions governing the use of our website and recruitment services.',
    url: `${baseUrl}/terms`,
    type: 'website',
  },
  alternates: {
    canonical: `${baseUrl}/terms`,
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


