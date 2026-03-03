import { GmpChart } from '@/app/components/gmp-chart';
import { ipos } from '@/app/lib/data';

export default function GmpPage() {
  return (
    <div className="space-y-6">
      <h1 className="section-title">GMP Live Center</h1>
      <div className="card overflow-x-auto">
        <input className="mb-3 w-full rounded-lg border border-slate-300 p-2 dark:border-slate-700 dark:bg-slate-900" placeholder="Search IPO" />
        <table className="w-full text-sm">
          <thead><tr className="text-left text-slate-500"><th>IPO</th><th>Status</th><th>GMP</th><th>Estimated Listing</th></tr></thead>
          <tbody>
            {ipos.map((ipo) => {
              const estimate = ipo.priceBandMax + ipo.gmp;
              return <tr key={ipo.id} className="border-t border-slate-200 dark:border-slate-800"><td>{ipo.companyName}</td><td>{ipo.status}</td><td>₹{ipo.gmp}</td><td>₹{estimate}</td></tr>;
            })}
          </tbody>
        </table>
      </div>
      <div className="card"><h2 className="mb-3 font-semibold">Trend Chart</h2><GmpChart data={ipos.map((i) => ({ name: i.companyName, gmp: i.gmp }))} /></div>
      <div className="card"><h2 className="font-semibold">Estimated Listing Calculator</h2><p className="mt-2 text-sm">Listing Price = Upper Price Band + GMP</p></div>
    </div>
  );
}
