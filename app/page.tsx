import Link from 'next/link';
import type { ReactNode } from 'react';
import { ipos } from './lib/data';
import { normalizePath, ipoPath } from './lib/paths';

const dashboardTabs = [
  { label: 'Mainboard IPOs', href: '/mainboard', description: 'Live issue calendar and status' },
  { label: 'SME IPOs', href: '/sme', description: 'SME fundraising opportunities' },
  { label: 'NCD Issues', href: '/ncd', description: 'Debt market offerings' },
  { label: 'Rights Issues', href: '/rights', description: 'Corporate rights windows' },
  { label: 'Offer For Sale', href: '/ofs', description: 'Promoter OFS opportunities' },
  { label: 'IPO Reports', href: '/reports', description: 'Data-backed IPO snapshots' },
  { label: 'Stock Brokers', href: '/brokers', description: 'Broker comparison dashboard' }
];

export default function HomePage() {
  const openIpos = ipos.filter((ipo) => ipo.status === 'Open' || ipo.status === 'Upcoming');
  const listedIpos = ipos.filter((ipo) => ipo.status === 'Listed' || ipo.status === 'Closed');

  return (
    <div className="space-y-6">
      <section className="glass-card relative overflow-hidden p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(0,200,83,0.25),transparent_35%),radial-gradient(circle_at_85%_10%,rgba(41,121,255,0.32),transparent_38%)]" />
        <div className="relative flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-slate-300">Monu Jangra IPO</p>
            <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl">Full-Screen IPO Intelligence Dashboard</h1>
            <p className="mt-3 max-w-3xl text-slate-200">Track GMP, subscription depth, issue timelines, and listing expectations from one refined control center.</p>
          </div>
          <Link href="/dashboard" className="rounded-xl bg-[#00C853] px-5 py-2.5 font-semibold text-slate-900 hover:brightness-110">
            Open Dashboard
          </Link>
        </div>

        <div className="relative mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <MetricCard label="Active Issues" value={String(openIpos.length)} detail="Open + Upcoming" />
          <MetricCard label="Average GMP" value={`₹${Math.round(ipos.reduce((sum, ipo) => sum + ipo.gmp, 0) / ipos.length)}`} detail="Across tracked IPOs" />
          <MetricCard label="Top Retail Subscription" value={`${Math.max(...ipos.map((ipo) => ipo.subscription.retail)).toFixed(1)}x`} detail="Peak retail demand" />
          <MetricCard label="Tracked Companies" value={String(ipos.length)} detail="Continuously updated" />
        </div>
      </section>

      <section className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {dashboardTabs.map((tab) => (
          <Link
            key={tab.label}
            href={normalizePath(tab.href)}
            className="glass-card rounded-xl p-4 transition hover:-translate-y-0.5 hover:border-[#00C853]"
          >
            <p className="text-sm font-semibold text-white">{tab.label}</p>
            <p className="mt-1 text-xs text-slate-300">{tab.description}</p>
          </Link>
        ))}
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        <DataTable
          title="Active IPO Window"
          columns={['Company', 'Issue Dates', 'GMP', 'Action']}
          rows={openIpos.map((ipo) => [
            ipo.companyName,
            `${ipo.openDate} → ${ipo.closeDate}`,
            `₹${ipo.gmp}`,
            <Link key={ipo.id} href={ipoPath(ipo.slug)} className="text-[#7eb0ff] hover:underline">View</Link>
          ])}
        />
        <DataTable
          title="Closed / Listed Tracker"
          columns={['Company', 'Status', 'Issue Size', 'Risk']}
          rows={listedIpos.map((ipo) => [ipo.companyName, ipo.status, ipo.issueSize, ipo.riskMeter])}
        />
      </section>
    </div>
  );
}

function MetricCard({ label, value, detail }: { label: string; value: string; detail: string }) {
  return (
    <article className="rounded-xl border border-white/15 bg-[#081523]/75 p-4">
      <p className="text-xs uppercase tracking-wide text-slate-400">{label}</p>
      <p className="mt-2 text-3xl font-bold text-white">{value}</p>
      <p className="mt-1 text-xs text-slate-300">{detail}</p>
    </article>
  );
}

function DataTable({ title, columns, rows }: { title: string; columns: string[]; rows: ReactNode[][] }) {
  return (
    <article className="glass-card overflow-hidden p-0">
      <h2 className="border-b border-white/10 bg-[#0f2238] px-4 py-3 text-lg font-semibold text-white">{title}</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#132b45] text-slate-200">
            <tr>
              {columns.map((column) => (
                <th key={column} className="px-4 py-2.5 font-medium">{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={`${rowIndex}`} className="border-t border-white/10">
                {row.map((value, colIndex) => (
                  <td key={`${rowIndex}-${colIndex}`} className="px-4 py-2.5 text-slate-100">{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}
