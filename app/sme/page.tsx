import { ipos } from '@/app/lib/data';

export default function SmePage() {
  const smeRows = [...ipos].reverse();
  return (
    <div className="space-y-4">
      <h1 className="section-title">SME IPOs</h1>
      <p className="text-slate-300">SME panel with issue size and lot size for focused retail planning.</p>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {smeRows.map((ipo) => (
          <article key={ipo.id} className="glass-card p-4">
            <h2 className="text-lg font-semibold text-white">{ipo.companyName}</h2>
            <p className="text-sm text-slate-300">Issue Size: {ipo.issueSize}</p>
            <p className="text-sm text-slate-300">Lot Size: {ipo.lotSize}</p>
            <p className="mt-2 text-sm text-[#00C853]">Current GMP: ₹{ipo.gmp}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
