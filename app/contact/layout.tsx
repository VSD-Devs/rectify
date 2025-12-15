import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rectifyinternational.com';

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch',
  description: 'Contact Rectify for renewable energy recruitment services. Get in touch with our consultants to discuss your talent needs across solar PV, wind, battery storage, and ESG sectors.',
  keywords: [
    'contact recruitment consultant',
    'energy recruitment contact',
    'get in touch',
    'recruitment enquiry',
  ],
  openGraph: {
    title: 'Contact Us - Get in Touch | Rectify',
    description: 'Contact Rectify for renewable energy recruitment services. Get in touch with our consultants to discuss your talent needs.',
    url: `${baseUrl}/contact`,
    type: 'website',
  },
  twitter: {
    title: 'Contact Us - Get in Touch | Rectify',
    description: 'Contact Rectify for renewable energy recruitment services.',
  },
  alternates: {
    canonical: `${baseUrl}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


