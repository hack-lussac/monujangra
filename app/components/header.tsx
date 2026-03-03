import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

const links = [
  ['/', 'Home'],
  ['/gmp', 'GMP'],
  ['/tools', 'Tools'],
  ['/blog', 'Blog'],
  ['/admin', 'Admin']
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-bold text-primary dark:text-white">IPO Insider Pro</Link>
        <nav className="flex items-center gap-4">
          {links.map(([href, label]) => (
            <Link key={href} href={href} className="text-sm text-slate-700 hover:text-primary dark:text-slate-300">
              {label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
