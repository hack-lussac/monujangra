import type { Metadata } from 'next';
import './globals.css';
import { Header } from './components/header';
import { Footer } from './components/footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://chittoriq.com'),
  title: {
    default: 'ChittorIQ | Modern IPO, GMP & Listing Gain Platform',
    template: '%s | ChittorIQ'
  },
  description: 'Modern IPO and grey market premium intelligence portal with live trackers, calculators, and investor insights.',
  openGraph: {
    title: 'ChittorIQ',
    description: 'Track IPO GMP, subscription data, listing estimates, and market insights in real-time.',
    type: 'website',
    url: 'https://chittoriq.com'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Header />
        <main className="mx-auto max-w-7xl px-4 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
