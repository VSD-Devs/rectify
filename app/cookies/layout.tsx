import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rectifyinternational.com';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Learn about how Rectify uses cookies and similar technologies on our website, and how you can manage your cookie preferences.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Cookie Policy | Rectify',
    description: 'Learn about how Rectify uses cookies and similar technologies on our website.',
    url: `${baseUrl}/cookies`,
    type: 'website',
  },
  alternates: {
    canonical: `${baseUrl}/cookies`,
  },
};

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


