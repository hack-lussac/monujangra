import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from './components/header';
import { Footer } from './components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'IPO Insider Pro - Live IPO GMP, Subscription & Analysis',
  description: 'Live IPO updates, GMP trends, subscription data, company financials, and expert investment guides.',
  openGraph: {
    title: 'IPO Insider Pro',
    description: 'Live IPO and GMP insights for smarter listing-day decisions.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
