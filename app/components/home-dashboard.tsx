'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import type { Ipo } from '@/app/lib/data';

export function HomeDashboard({ ipos }: { ipos: Ipo[] }) {
  const [tick, setTick] = useState(0);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [gmpData, setGmpData] = useState(ipos.map((ipo) => ({ ...ipo, liveGmp: ipo.gmp, direction: 0 })));

  useEffect(() => {
    const timer = setInterval(() => {
      setTick((value) => value + 1);
      setLastUpdate(new Date());
      setGmpData((current) =>
        current.map((ipo) => {
          const move = Math.floor(Math.random() * 5) - 2;
          const next = Math.max(0, ipo.liveGmp + move);
          return { ...ipo, liveGmp: next, direction: move };
        })
      );
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const trend = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => ({
        hour: `${9 + i}:00`,
        value: Math.round(gmpData.reduce((sum, item) => sum + item.liveGmp, 0) / gmpData.length) + i
      })),
    [gmpData]
  );

  const subscriptionBars = gmpData.map((ipo) => ({
    name: ipo.companyName,
    Retail: ipo.subscription.retail,
    NII: ipo.subscription.nii,
    QIB: ipo.subscription.qib
  }));

  const donut = [
    { name: 'QIB', value: gmpData[0]?.subscription.qib ?? 0, color: '#00C853' },
    { name: 'NII', value: gmpData[0]?.subscription.nii ?? 0, color: '#2979FF' },
    { name: 'Retail', value: gmpData[0]?.subscription.retail ?? 0, color: '#FF9100' }
  ];

  return (
    <div className="space-y-8">
      <section className="glass-card relative overflow-hidden p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,200,83,.2),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(41,121,255,.25),transparent_42%)]" />
        <p className="ticker mb-6 text-xs text-slate-200">{gmpData.map((ipo) => `${ipo.companyName}: ₹${ipo.liveGmp}`).join('  •  ')}</p>
        <div className="relative grid items-center gap-6 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-300">IPO Vision 3D</p>
            <h1 className="mt-2 text-4xl font-semibold text-white">Track IPOs Like a Pro</h1>
            <p className="mt-3 text-slate-200">Next-gen IPO & GMP intelligence with animated analytics, automated updates, and investor-grade clarity.</p>
            <div className="mt-5 flex gap-3">
              <Link href="/gmp" className="rounded-xl bg-[#00C853] px-5 py-2 font-semibold text-slate-900">Explore Live IPOs</Link>
              <Link href="/tools" className="rounded-xl border border-white/30 px-5 py-2 text-white">Open Tools</Link>
            </div>
          </div>
          <div className="h-64 rounded-2xl border border-white/10 bg-slate-900/50 p-4 backdrop-blur">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trend}>
                <defs>
                  <linearGradient id="heroGain" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00C853" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#00C853" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="hour" stroke="#8aa2c1" />
                <YAxis stroke="#8aa2c1" />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#00C853" fill="url(#heroGain)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {gmpData.map((ipo) => {
          const gain = ((ipo.liveGmp / ipo.priceBandMax) * 100).toFixed(0);
          const estimate = ipo.priceBandMax + ipo.liveGmp;
          return (
            <article key={ipo.id} className="glass-card card-tilt p-5">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-white">{ipo.companyName}</h3>
                <span className="rounded-full border border-white/30 px-2 py-1 text-xs text-slate-100">{ipo.status}</span>
              </div>
              <p className="mt-3 text-sm text-slate-200">Price Band ₹{ipo.priceBandMin} - ₹{ipo.priceBandMax}</p>
              <p className={`mt-1 text-2xl font-bold ${ipo.direction < 0 ? 'text-[#FF1744]' : 'text-[#00C853]'}`}>
                GMP ₹{ipo.liveGmp}
              </p>
              <p className="text-sm text-slate-300">Estimated Listing ₹{estimate} • Gain {gain}%</p>
            </article>
          );
        })}
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="glass-card p-5">
          <h2 className="text-xl text-white">Subscription Dashboard</h2>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={subscriptionBars}>
                <XAxis dataKey="name" stroke="#9db4cf" />
                <YAxis stroke="#9db4cf" />
                <Tooltip />
                <Bar dataKey="Retail" fill="#00C853" />
                <Bar dataKey="NII" fill="#2979FF" />
                <Bar dataKey="QIB" fill="#7C4DFF" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="glass-card p-5">
          <h2 className="text-xl text-white">3D Subscription Mix (Simulated)</h2>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={donut} dataKey="value" innerRadius={60} outerRadius={95} paddingAngle={5}>
                  {donut.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-slate-300">Mock real-time sync #{tick} • Updated {lastUpdate.toLocaleTimeString()}</p>
        </div>
      </section>

      <section className="glass-card p-5 text-slate-100">
        <h2 className="text-xl">Automation Center</h2>
        <div className="mt-3 grid gap-2 text-sm md:grid-cols-2">
          <p>• GMP auto-update cron simulation with delta highlight</p>
          <p>• Subscription data mock real-time refresh</p>
          <p>• Auto blog slug + SEO meta title generator</p>
          <p>• Sitemap + admin timestamp logging automation</p>
          <p>• Newsletter auto-confirmation trigger (placeholder)</p>
          <p>• Redis-ready caching + API route architecture</p>
        </div>
      </section>
    </div>
  );
}
