import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rectify - Energy Recruitment & Consultancy',
  description: 'Specialists in energy recruitment and talent acquisition. Helping energy companies find business-critical talent to build a sustainable future.',
  icons: {
    icon: '/rectify-logo.png',
    shortcut: '/rectify-logo.png',
    apple: '/rectify-logo.png',
  },
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
      </body>
    </html>
  );
}
