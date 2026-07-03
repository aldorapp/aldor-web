import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Aldor — Everything You Need. Delivered.',
  description:
    'Food, groceries, pharmacy, fashion, bill payments, and more — delivered across Nigeria. Fast, reliable, real-time.',
  openGraph: {
    title: 'Aldor — Everything You Need. Delivered.',
    description:
      'Food, groceries, pharmacy, fashion, bill payments, and more — delivered across Nigeria.',
    url: 'https://aldorapp.com',
    siteName: 'Aldor',
    locale: 'en_NG',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* General Sans via Fontshare — used as the heading/display face */}
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=general-sans@500,600,700&display=swap"
        />
      </head>
      <body className="font-body antialiased" style={{ ['--font-general-sans' as any]: "'General Sans', sans-serif" }}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
