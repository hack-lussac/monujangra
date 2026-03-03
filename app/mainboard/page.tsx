import { ipos } from '@/app/lib/data';

export default function MainboardPage() {
  return (
    <div className="space-y-4">
      <h1 className="section-title">Mainboard IPOs</h1>
      <p className="text-slate-300">Dedicated mainboard board with timeline, price band and registrar data.</p>
      <div className="glass-card overflow-x-auto p-0">
        <table className="w-full text-sm"><thead className="bg-white/5"><tr><th className="px-4 py-2">Company</th><th className="px-4 py-2">Issue Dates</th><th className="px-4 py-2">Price Band</th><th className="px-4 py-2">Registrar</th></tr></thead><tbody>{ipos.map((ipo)=><tr key={ipo.id} className="border-t border-white/10"><td className="px-4 py-2">{ipo.companyName}</td><td className="px-4 py-2">{ipo.openDate} - {ipo.closeDate}</td><td className="px-4 py-2">₹{ipo.priceBandMin} - ₹{ipo.priceBandMax}</td><td className="px-4 py-2">{ipo.registrar}</td></tr>)}</tbody></table>
      </div>
    </div>
  );
}
