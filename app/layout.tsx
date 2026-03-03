import type { Metadata } from 'next';
import './globals.css';
import { Header } from './components/header';
import { Footer } from './components/footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://chittoriq.com'),
  title: {
    default: 'Monu Jangra IPO | Full-Screen IPO & GMP Dashboard',
    template: '%s | Monu Jangra IPO'
  },
  description: 'Full-screen IPO and GMP intelligence portal with dedicated dashboards for mainboard, SME, NCD, rights and OFS.',
  openGraph: {
    title: 'Monu Jangra IPO',
    description: 'Track IPO GMP, subscription data, listing estimates, and market insights in real-time dashboards.',
    type: 'website',
    url: 'https://chittoriq.com'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Header />
        <main className="w-full px-4 py-6 md:px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
