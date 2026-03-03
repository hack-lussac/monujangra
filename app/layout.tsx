import type { Metadata } from 'next';
import './globals.css';
import { Header } from './components/header';
import { Footer } from './components/footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://ipovision3d.com'),
  title: {
    default: 'IPO Vision 3D | Next-Gen IPO & GMP Intelligence',
    template: '%s | IPO Vision 3D'
  },
  description: 'Futuristic, secure and automated IPO intelligence platform with premium investor-grade analytics.',
  openGraph: {
    title: 'IPO Vision 3D',
    description: 'Real-time IPO/GMP dashboard with automation, tools and enterprise security.',
    type: 'website',
    url: 'https://ipovision3d.com'
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
