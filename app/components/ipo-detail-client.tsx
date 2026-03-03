'use client';

import { Area, AreaChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import type { Ipo } from '@/app/lib/data';

export function IpoDetailClient({ ipo }: { ipo: Ipo }) {
  const growth = ipo.gmpHistory.map((value, i) => ({ quarter: `Q${i + 1}`, value }));
  const heatmap = [
    { name: 'QIB', value: ipo.subscription.qib, color: '#7C4DFF' },
    { name: 'NII', value: ipo.subscription.nii, color: '#2979FF' },
    { name: 'Retail', value: ipo.subscription.retail, color: '#00C853' }
  ];
  const riskValue = ipo.riskMeter === 'Low' ? 28 : ipo.riskMeter === 'Moderate' ? 55 : 82;

  return (
    <>
      <section className="glass-card p-6">
        <h2 className="font-semibold">Animated IPO Timeline</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-4">
          {['RHP Filed', 'Anchor Book', 'Issue Open', 'Listing Day'].map((step, idx) => (
            <div key={step} className="rounded-xl border border-white/20 bg-white/5 p-3 text-center">{idx + 1}. {step}</div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="glass-card p-5">
          <h2 className="font-semibold">3D Financial Growth Chart (Simulated)</h2>
          <div className="h-64"><ResponsiveContainer width="100%" height="100%"><AreaChart data={growth}><CartesianGrid strokeDasharray="3 3" stroke="#224" /><XAxis dataKey="quarter" stroke="#9db4cf" /><YAxis stroke="#9db4cf" /><Tooltip /><Area type="monotone" dataKey="value" stroke="#00C853" fill="rgba(0,200,83,0.25)" /></AreaChart></ResponsiveContainer></div>
        </div>
        <div className="glass-card p-5">
          <h2 className="font-semibold">Subscription Heatmap</h2>
          <div className="h-64"><ResponsiveContainer width="100%" height="100%"><PieChart><Pie data={heatmap} dataKey="value" outerRadius={92} innerRadius={52}>{heatmap.map((entry) => <Cell key={entry.name} fill={entry.color} />)}</Pie><Tooltip /></PieChart></ResponsiveContainer></div>
        </div>
      </section>

      <section className="glass-card p-5">
        <h2 className="font-semibold">Interactive Financial Table</h2>
        <table className="mt-3 w-full text-sm"><thead><tr className="text-left text-slate-300"><th>Period</th><th>Revenue</th><th>Profit</th><th>EPS</th></tr></thead><tbody>{ipo.financials.map((f, idx) => <tr key={idx} className="border-t border-white/10"><td>FY{24 + idx}</td><td>{f.revenue}</td><td>{f.profit}</td><td>{f.eps}</td></tr>)}</tbody></table>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="glass-card p-5">
          <h2 className="font-semibold">SWOT Analyzer</h2>
          {Object.entries(ipo.swot).map(([key, values]) => (
            <details key={key} className="mt-3 rounded-xl border border-white/20 bg-white/5 p-3"><summary className="cursor-pointer font-medium capitalize">{key}</summary><ul className="mt-2 list-disc pl-5 text-sm">{values.map((v) => <li key={v}>{v}</li>)}</ul></details>
          ))}
        </div>
        <div className="glass-card p-5">
          <h2 className="font-semibold">Risk Meter Gauge</h2>
          <div className="mt-4 h-4 rounded-full bg-white/10"><div className="h-4 rounded-full bg-gradient-to-r from-[#00C853] via-yellow-400 to-[#FF1744]" style={{ width: `${riskValue}%` }} /></div>
          <p className="mt-2 text-sm">Current risk: {ipo.riskMeter}</p>
          <h3 className="mt-6 font-semibold">FAQ</h3>
          {ipo.faqs.map((faq) => <details key={faq.q} className="mt-2 rounded-xl border border-white/20 bg-white/5 p-3"><summary className="cursor-pointer">{faq.q}</summary><p className="mt-2 text-sm text-slate-300">{faq.a}</p></details>)}
        </div>
      </section>
    </>
  );
}
