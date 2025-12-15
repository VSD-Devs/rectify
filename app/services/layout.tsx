import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rectifyinternational.com';

export const metadata: Metadata = {
  title: 'Our Services - Recruitment Solutions',
  description: 'Comprehensive recruitment solutions for renewable energy talent. Executive search, permanent placement, contract recruitment, and talent consulting services across the USA, UK, and Europe.',
  keywords: [
    'executive search',
    'permanent placement',
    'contract recruitment',
    'talent consulting',
    'renewable energy recruitment services',
    'energy recruitment solutions',
  ],
  openGraph: {
    title: 'Our Services - Recruitment Solutions | Rectify',
    description: 'Comprehensive recruitment solutions for renewable energy talent. Executive search, permanent placement, contract recruitment, and talent consulting services.',
    url: `${baseUrl}/services`,
    type: 'website',
  },
  twitter: {
    title: 'Our Services - Recruitment Solutions | Rectify',
    description: 'Comprehensive recruitment solutions for renewable energy talent.',
  },
  alternates: {
    canonical: `${baseUrl}/services`,
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


