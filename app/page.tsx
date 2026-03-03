import Link from 'next/link';
import { blogs, ipos } from './lib/data';

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="card bg-primary text-white dark:bg-slate-900">
        <h1 className="text-3xl font-bold">Live IPO, GMP & Subscription Intelligence</h1>
        <p className="mt-2 max-w-2xl text-slate-200">Track open IPOs, grey market premium trends, and expert analysis in one premium dashboard.</p>
        <div className="mt-4 flex gap-3">
          <Link href="/gmp" className="rounded-lg bg-gain px-4 py-2 font-medium text-primary">Check GMP Live</Link>
          <Link href="/tools" className="rounded-lg border border-white px-4 py-2">Use IPO Tools</Link>
        </div>
      </section>

      <section>
        <h2 className="section-title mb-4">Live IPO List</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {ipos.map((ipo) => (
            <Link key={ipo.id} href={`/ipo/${ipo.slug}`} className="card block">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{ipo.name}</h3>
                <span className="rounded-full bg-slate-100 px-2 py-1 text-xs dark:bg-slate-800">{ipo.status}</span>
              </div>
              <p className="mt-2 text-sm text-slate-500">{ipo.priceBand} • Lot {ipo.lotSize}</p>
              <p className={`mt-2 font-semibold ${ipo.gmp >= 0 ? 'text-gain' : 'text-loss'}`}>GMP: ₹{ipo.gmp}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="card overflow-x-auto">
          <h2 className="mb-3 text-lg font-semibold">GMP Snapshot</h2>
          <table className="w-full text-sm">
            <thead><tr className="text-left text-slate-500"><th>IPO</th><th>Est. Listing</th><th>Gain %</th></tr></thead>
            <tbody>
              {ipos.map((ipo) => {
                const base = Number(ipo.priceBand.split('₹')[1].split('-₹')[1]);
                const gain = (((ipo.listingPriceEstimate - base) / base) * 100).toFixed(2);
                return <tr key={ipo.id} className="border-t border-slate-200 dark:border-slate-800"><td>{ipo.name}</td><td>₹{ipo.listingPriceEstimate}</td><td className={Number(gain) >= 0 ? 'text-gain' : 'text-loss'}>{gain}%</td></tr>;
              })}
            </tbody>
          </table>
        </div>

        <div className="card">
          <h2 className="mb-3 text-lg font-semibold">IPO Subscription Heatmap</h2>
          {ipos.map((ipo) => (
            <div key={ipo.id} className="mb-3 rounded-lg bg-slate-50 p-3 dark:bg-slate-800">
              <p className="font-medium">{ipo.name}</p>
              <p className="text-sm text-slate-500">QIB {ipo.subscription.qib}x • NII {ipo.subscription.nii}x • Retail {ipo.subscription.retail}x</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <div className="card lg:col-span-2">
          <h2 className="mb-3 text-lg font-semibold">Latest IPO News</h2>
          {blogs.map((blog) => (
            <Link key={blog.id} href={`/blog/${blog.slug}`} className="mb-3 block rounded-lg border border-slate-200 p-3 hover:border-primary dark:border-slate-800">
              <p className="text-xs text-slate-500">{blog.category}</p>
              <p className="font-medium">{blog.title}</p>
              <p className="text-sm text-slate-500">{blog.excerpt}</p>
            </Link>
          ))}
        </div>
        <div className="card">
          <h2 className="mb-3 text-lg font-semibold">Newsletter</h2>
          <input placeholder="Email address" className="mb-2 w-full rounded-lg border border-slate-300 p-2 dark:border-slate-700 dark:bg-slate-900" />
          <button className="w-full rounded-lg bg-primary px-3 py-2 text-white">Subscribe</button>
          <p className="mt-3 text-xs text-slate-500">Affiliate recommendation blocks and ads can be injected here.</p>
        </div>
      </section>
    </div>
  );
}
