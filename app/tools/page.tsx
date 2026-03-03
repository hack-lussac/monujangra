'use client';

import { useMemo, useState } from 'react';

export default function ToolsPage() {
  const [lots, setLots] = useState(2);
  const [lotSize, setLotSize] = useState(44);
  const [upperPrice, setUpperPrice] = useState(340);
  const [gmp, setGmp] = useState(85);
  const [baseSub, setBaseSub] = useState(4.7);

  const investment = lots * lotSize * upperPrice;
  const gain = lots * lotSize * gmp;
  const multiplier = useMemo(() => (baseSub * 1.25).toFixed(2), [baseSub]);

  return (
    <div className="space-y-6">
      <h1 className="section-title">Automation-ready Investor Tools</h1>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="glass-card p-4"><h2 className="font-semibold">IPO Profit Calculator</h2><input type="number" value={lots} onChange={(e) => setLots(Number(e.target.value))} className="mt-3 w-full rounded-xl border border-white/20 bg-[#081320] p-2" /><p className="mt-3 text-[#00C853]">Projected Gain: ₹{gain.toLocaleString()}</p></div>
        <div className="glass-card p-4"><h2 className="font-semibold">Lot Size Calculator</h2><input type="number" value={lotSize} onChange={(e) => setLotSize(Number(e.target.value))} className="mt-3 w-full rounded-xl border border-white/20 bg-[#081320] p-2" /><p className="mt-3">Minimum Investment: ₹{investment.toLocaleString()}</p></div>
        <div className="glass-card p-4"><h2 className="font-semibold">Subscription Multiplier</h2><input type="number" step="0.1" value={baseSub} onChange={(e) => setBaseSub(Number(e.target.value))} className="mt-3 w-full rounded-xl border border-white/20 bg-[#081320] p-2" /><p className="mt-3">Momentum Multiplier: {multiplier}x</p></div>
        <div className="glass-card p-4"><h2 className="font-semibold">Listing Gain Simulator</h2><input type="number" value={gmp} onChange={(e) => setGmp(Number(e.target.value))} className="mt-3 w-full rounded-xl border border-white/20 bg-[#081320] p-2" /><p className="mt-3 text-[#00C853]">Expected Listing: ₹{upperPrice + gmp}</p></div>
      </div>
    </div>
  );
}
