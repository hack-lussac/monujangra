'use client';

import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

type GmpChartPoint = {
  label: string;
  gmp: number;
};

export function GmpChart({ data }: { data: GmpChartPoint[] }) {
  if (data.length === 0) {
    return <p className="text-sm text-slate-500">No trend data available right now.</p>;
  }

  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#cbd5e1" />
          <XAxis dataKey="label" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Line dataKey="gmp" stroke="#0B1C2D" strokeWidth={2} dot={{ fill: '#00C853' }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
