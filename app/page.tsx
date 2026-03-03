import Link from 'next/link';
import { blogs, ipos } from './lib/data';

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="card bg-primary text-white dark:bg-slate-900">
        <p className="text-xs uppercase tracking-widest text-slate-200">Secure • Verified Data • Enterprise Grade</p>
        <h1 className="mt-2 text-3xl font-bold">IPO Pulse Pro: Live IPO & GMP Intelligence</h1>
        <p className="mt-2 max-w-2xl text-slate-200">Production-ready listing platform optimized for high traffic, advanced analytics, and investor trust.</p>
        <div className="mt-4 flex gap-3">
          <Link href="/gmp" className="rounded-lg bg-gain px-4 py-2 font-medium text-primary">Track GMP</Link>
          <Link href="/admin" className="rounded-lg border border-white px-4 py-2">Admin Dashboard</Link>
        </div>
      </section>

      <section className="card overflow-x-auto">
        <h2 className="section-title mb-4">Live IPO Table</h2>
        <table className="w-full text-sm">
          <thead><tr className="text-left text-slate-500"><th>Company</th><th>Price Band</th><th>GMP</th><th>Est. Gain</th><th>Status</th></tr></thead>
          <tbody>
            {ipos.map((ipo) => {
              const gain = ((ipo.gmp / ipo.priceBandMax) * 100).toFixed(0);
              return <tr key={ipo.id} className="border-t border-slate-200 dark:border-slate-800"><td><Link href={`/ipo/${ipo.slug}`} className="font-semibold">{ipo.companyName}</Link></td><td>₹{ipo.priceBandMin}-₹{ipo.priceBandMax}</td><td className="text-gain">₹{ipo.gmp}</td><td>{gain}%</td><td>{ipo.status}</td></tr>;
            })}
          </tbody>
        </table>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <div className="card"><h3 className="font-semibold">Subscription Tracker</h3>{ipos.map((i) => <p key={i.id} className="mt-2 text-sm">{i.companyName}: Retail {i.subscription.retail}x</p>)}</div>
        <div className="card"><h3 className="font-semibold">Latest IPO News</h3>{blogs.map((b) => <Link key={b.id} href={`/blog/${b.slug}`} className="mt-2 block text-sm">• {b.title}</Link>)}</div>
        <div className="card"><h3 className="font-semibold">Monetization</h3><p className="mt-2 text-sm">Google AdSense Placeholder</p><p className="text-sm">Affiliate CTA Placeholder</p><p className="text-sm">Push Notification Bell UI Placeholder</p><input placeholder="Newsletter email" className="mt-2 w-full rounded-lg border border-slate-300 p-2 dark:border-slate-700 dark:bg-slate-900"/></div>
      </section>
    </div>
  );
}
