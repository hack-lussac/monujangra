import Link from 'next/link';
import { ipos } from './lib/data';

const sections = [
  { key: 'Open', title: 'Active IPOs', empty: 'No active IPOs right now.' },
  { key: 'Closed', title: 'Closed IPOs', empty: 'No closed IPOs available.' },
  { key: 'Upcoming', title: 'Upcoming IPOs', empty: 'No upcoming IPOs announced yet.' }
] as const;

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="glass-card relative overflow-hidden p-8 md:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,200,83,.15),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(41,121,255,.2),transparent_50%)]" />
        <div className="relative">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-300">Modern IPO Dashboard</p>
          <h1 className="mt-3 text-3xl font-semibold text-white md:text-5xl">Track IPOs in a Simple, Modern Way</h1>
          <p className="mt-4 max-w-2xl text-slate-200">
            One clean table view for active, closed, and upcoming IPOs with key details like date, GMP, and price band.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/gmp" className="rounded-xl bg-[#00C853] px-5 py-2 font-semibold text-slate-900">
              View GMP Center
            </Link>
            <Link href="/tools" className="rounded-xl border border-white/30 px-5 py-2 text-white">
              IPO Tools
            </Link>
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
    </div>
  );
}
