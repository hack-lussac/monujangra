import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from './components/header';
import { Footer } from './components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://ipopulsepro.com'),
  title: {
    default: 'IPO Pulse Pro | Secure IPO & GMP Intelligence Platform',
    template: '%s | IPO Pulse Pro'
  },
  description: 'Enterprise-grade IPO, GMP, subscription, and listing analytics platform for serious investors.',
  openGraph: {
    title: 'IPO Pulse Pro',
    description: 'Real-time IPO intelligence with secure admin workflows and advanced investor tools.',
    type: 'website',
    url: 'https://ipopulsepro.com'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IPO Pulse Pro',
    description: 'Premium IPO and GMP analytics for smarter listing decisions.'
  },
  alternates: {
    canonical: '/'
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
