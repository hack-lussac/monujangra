'use client';

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export function GmpChart({ data }: { data: { name: string; gmp: number }[] }) {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis dataKey="name" hide />
          <YAxis />
          <Tooltip />
          <Line dataKey="gmp" stroke="#0B1C2D" strokeWidth={2} dot={{ fill: '#00C853' }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
