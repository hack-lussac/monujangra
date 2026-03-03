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
    <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0B1C2D]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-bold text-white">IPO Vision 3D</Link>
        <nav className="flex items-center gap-4">
          {links.map(([href, label]) => (
            <Link key={href} href={href} className="text-sm text-slate-200 transition hover:text-[#00C853]">
              {label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
