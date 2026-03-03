'use client';

import { useMemo, useState } from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { ipos } from '@/app/lib/data';

export default function GmpPage() {
  const [query, setQuery] = useState('');
  const [band, setBand] = useState(340);
  const [gmp, setGmp] = useState(85);

  const sorted = useMemo(
    () =>
      [...ipos]
        .filter((ipo) => ipo.companyName.toLowerCase().includes(query.toLowerCase()))
        .sort((a, b) => b.gmp - a.gmp),
    [query]
  );

  const trend = sorted[0]?.gmpHistory.map((value, i) => ({ day: `D${i + 1}`, gmp: value })) ?? [];

  return (
    <div className="space-y-6">
      <h1 className="section-title">GMP Intelligence Terminal</h1>
      <div className="glass-card p-4">
        <input value={query} onChange={(e) => setQuery(e.target.value)} className="w-full rounded-xl border border-white/20 bg-[#081320] p-2" placeholder="Search IPO" />
        <table className="mt-4 w-full text-sm">
          <thead><tr className="text-left text-slate-300"><th>IPO</th><th>Status</th><th>GMP</th><th>Estimated Listing</th></tr></thead>
          <tbody>
            {sorted.map((ipo) => (
              <tr key={ipo.id} className="border-t border-white/10">
                <td>{ipo.companyName}</td><td>{ipo.status}</td><td className="text-[#00C853]">₹{ipo.gmp}</td><td>₹{ipo.priceBandMax + ipo.gmp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="glass-card p-4">
        <h2 className="font-semibold">Animated GMP Trend Line</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={trend}>
              <XAxis dataKey="day" stroke="#9bb3ce" />
              <YAxis stroke="#9bb3ce" />
              <Tooltip />
              <Area type="monotone" dataKey="gmp" stroke="#00C853" fill="rgba(0,200,83,0.2)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="glass-card grid gap-3 p-4 md:grid-cols-3">
        <div><p className="text-sm">Upper Band</p><input type="number" value={band} onChange={(e) => setBand(Number(e.target.value))} className="mt-1 w-full rounded-xl border border-white/20 bg-[#081320] p-2" /></div>
        <div><p className="text-sm">GMP</p><input type="number" value={gmp} onChange={(e) => setGmp(Number(e.target.value))} className="mt-1 w-full rounded-xl border border-white/20 bg-[#081320] p-2" /></div>
        <div><p className="text-sm">Live Listing Estimate</p><p className="mt-1 text-3xl font-bold text-[#00C853]">₹{band + gmp}</p></div>
      </div>
    </div>
  );
}
