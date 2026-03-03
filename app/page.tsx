import Link from 'next/link';
import { ipos } from './lib/data';

const sections = [
  { key: 'Open', title: 'Active IPOs', empty: 'No active IPOs right now.' },
  { key: 'Closed', title: 'Closed IPOs', empty: 'No closed IPOs available.' },
  { key: 'Upcoming', title: 'Upcoming IPOs', empty: 'No upcoming IPOs announced yet.' }
] as const;

const stats = [
  { label: 'Active IPO Trackers', value: '180+' },
  { label: 'Daily GMP Updates', value: '24/7' },
  { label: 'Investor Community', value: '2.1L+' },
  { label: 'Tools & Calculators', value: '15+' }
];

const quickTools = [
  {
    title: 'IPO Subscription Live',
    description: 'Real-time QIB/NII/Retail bids with phase-wise momentum and oversubscription heatmap.',
    href: '/gmp'
  },
  {
    title: 'Listing Gain Calculator',
    description: 'Estimate listing day outcomes by combining lot size, price band and live GMP snapshots.',
    href: '/tools'
  },
  {
    title: 'Allotment Probability',
    description: 'Understand retail allotment chances based on lot count and final subscription multiples.',
    href: '/tools'
  }
];

const coverage = [
  'Mainboard IPOs with full timeline',
  'SME IPO live trackers and risk tags',
  'Grey market sentiment dashboard',
  'DRHP/RHP summaries in simple language',
  'Registrar, allotment and listing schedule'
];

export default function HomePage() {
  const topGainers = [...ipos].sort((a, b) => b.gmp - a.gmp).slice(0, 3);

  return (
    <div className="space-y-8 md:space-y-10">
      <section className="glass-card relative overflow-hidden p-6 md:p-10">
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#00C853]/20 blur-3xl" />
        <div className="absolute -bottom-20 left-12 h-56 w-56 rounded-full bg-[#2979FF]/20 blur-3xl" />
        <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#77ffb4]">Inspired by top Indian IPO portals</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">ChittorIQ: A modern IPO & GMP website built for serious investors</h1>
            <p className="mt-4 max-w-2xl text-slate-300 md:text-lg">
              Track upcoming, open, and listed IPOs with live GMP insights, subscription trends, listing estimates,
              news, and practical calculators in one clean experience.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/gmp" className="rounded-xl bg-[#00C853] px-5 py-2.5 font-semibold text-[#0B1C2D] transition hover:brightness-110">
                Explore Live GMP
              </Link>
              <Link href="/tools" className="rounded-xl border border-white/25 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10">
                Open Calculators
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {stats.map((item) => (
              <article key={item.label} className="rounded-2xl border border-white/15 bg-[#081320]/70 p-4">
                <p className="text-2xl font-bold text-[#77ffb4]">{item.value}</p>
                <p className="mt-1 text-sm text-slate-300">{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="glass-card p-4 md:p-6">
        <h2 className="text-2xl font-semibold text-white">IPO Tables</h2>
        <p className="mt-2 text-sm text-slate-300">Updated table format for quick comparison and faster decision-making.</p>

        <div className="mt-6 space-y-8">
          {sections.map((section) => {
            const filtered = ipos.filter((ipo) => ipo.status === section.key);

            return (
              <div key={section.key}>
                <h3 className="text-lg font-medium text-white">{section.title}</h3>
                <div className="mt-3 overflow-x-auto rounded-xl border border-white/10">
                  <table className="min-w-full text-left text-sm text-slate-200">
                    <thead className="bg-white/10 text-xs uppercase tracking-wide text-slate-300">
                      <tr>
                        <th className="px-4 py-3">Company</th>
                        <th className="px-4 py-3">Open</th>
                        <th className="px-4 py-3">Close</th>
                        <th className="px-4 py-3">Price Band</th>
                        <th className="px-4 py-3">GMP</th>
                        <th className="px-4 py-3">Issue Size</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filtered.length > 0 ? (
                        filtered.map((ipo) => (
                          <tr key={ipo.id} className="border-t border-white/10 hover:bg-white/5">
                            <td className="px-4 py-3 font-medium text-white">{ipo.companyName}</td>
                            <td className="px-4 py-3">{ipo.openDate}</td>
                            <td className="px-4 py-3">{ipo.closeDate}</td>
                            <td className="px-4 py-3">₹{ipo.priceBandMin} - ₹{ipo.priceBandMax}</td>
                            <td className="px-4 py-3">₹{ipo.gmp}</td>
                            <td className="px-4 py-3">{ipo.issueSize}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td className="px-4 py-4 text-slate-300" colSpan={6}>
                            {section.empty}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="section-title text-2xl">Top GMP Movers</h2>
          <Link href="/gmp" className="text-sm text-[#77ffb4] hover:text-[#00C853]">View full GMP board →</Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {topGainers.map((ipo) => (
            <article key={ipo.id} className="glass-card card-tilt p-5">
              <p className="text-xs uppercase tracking-wide text-slate-400">{ipo.status}</p>
              <h3 className="mt-1 text-xl font-semibold">{ipo.companyName}</h3>
              <p className="mt-2 text-sm text-slate-300">{ipo.overview}</p>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span>Price band: ₹{ipo.priceBandMin} - ₹{ipo.priceBandMax}</span>
                <span className="font-semibold text-[#00C853]">GMP ₹{ipo.gmp}</span>
              </div>
              <p className="mt-2 text-sm text-slate-400">Est. Listing: ₹{ipo.priceBandMax + ipo.gmp}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        {quickTools.map((tool) => (
          <article key={tool.title} className="glass-card p-5">
            <h3 className="text-xl font-semibold">{tool.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{tool.description}</p>
            <Link href={tool.href} className="mt-4 inline-block text-sm font-semibold text-[#77ffb4] hover:text-[#00C853]">
              Open tool →
            </Link>
          </article>
        ))}
      </section>

      <section className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="glass-card p-6">
          <h2 className="text-2xl font-semibold">What you get in this modern IPO platform</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {coverage.map((item) => (
              <p key={item} className="rounded-xl border border-white/10 bg-[#0b1d31]/50 px-3 py-2 text-sm text-slate-200">
                ✓ {item}
              </p>
            ))}
          </div>
        </div>
        <div className="glass-card p-6">
          <h2 className="text-xl font-semibold">Why this design feels modern</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>• Fast, responsive layout optimized for mobile-first users.</li>
            <li>• High-contrast visual hierarchy for data-heavy IPO tables.</li>
            <li>• Card-based UX for tools, blog insights, and live modules.</li>
            <li>• Ready for ad slots, premium memberships, and alerts.</li>
          </ul>
          <Link href="/blog" className="mt-4 inline-block rounded-lg bg-white/10 px-4 py-2 text-sm hover:bg-white/20">Read latest market insights</Link>
        </div>
      </section>

      <section className="glass-card p-6 text-center md:p-8">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Launch-ready website section</p>
        <h2 className="mt-2 text-3xl font-bold">Want to monetize this like Chittorgarh-style portals?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-300">
          This build supports affiliate modules, ad placements, notifications, blog SEO pages, and lead capture flows.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/tools" className="rounded-xl bg-[#00C853] px-5 py-2.5 font-semibold text-[#0B1C2D]">Try investor tools</Link>
          <Link href="/gmp" className="rounded-xl border border-white/25 px-5 py-2.5 font-semibold">Check GMP updates</Link>
        </div>
      </section>
    </div>
  );
}
