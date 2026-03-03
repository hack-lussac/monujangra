import { GmpChart } from '@/app/components/gmp-chart';
import { ipos } from '@/app/lib/data';

export default function GmpPage() {
  return (
    <div className="space-y-6">
      <h1 className="section-title">IPO GMP Dashboard</h1>
      <div className="card overflow-x-auto">
        <table className="w-full text-sm">
          <thead><tr className="text-left text-slate-500"><th>IPO</th><th>GMP</th><th>Estimated Listing</th><th>Gain%</th></tr></thead>
          <tbody>
            {ipos.map((ipo) => {
              const cap = Number(ipo.priceBand.split('-₹')[1]);
              const gain = (((ipo.listingPriceEstimate - cap) / cap) * 100).toFixed(2);
              return <tr key={ipo.id} className="border-t border-slate-200 dark:border-slate-800"><td>{ipo.name}</td><td className={ipo.gmp >= 0 ? 'text-gain' : 'text-loss'}>₹{ipo.gmp}</td><td>₹{ipo.listingPriceEstimate}</td><td>{gain}%</td></tr>;
            })}
          </tbody>
        </table>
      </div>
      <div className="card">
        <h2 className="mb-3 font-semibold">GMP Trend Chart</h2>
        <GmpChart data={ipos.map((i) => ({ name: i.name, gmp: i.gmp }))} />
      </div>
      <div className="card">
        <h2 className="mb-3 font-semibold">Estimated Listing Price Calculator</h2>
        <p className="text-sm text-slate-600 dark:text-slate-300">Formula: Upper Price Band + GMP = Estimated Listing Price.</p>
      </div>
    </div>
  );
}
