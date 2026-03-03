const ncdRows = [
  ['Edelweiss Financial Services', '8.64 - 10.10%', '02 - 16 Mar'],
  ['Chemmanur Credits & Investments', '9.25 - 12.68%', '02 - 16 Mar'],
  ['Prachay Capital', '13.24 - 13.80%', '26 Feb - 12 Mar']
];

export default function NcdPage() {
  return (
    <div className="space-y-4">
      <h1 className="section-title">NCD Issues</h1>
      <div className="glass-card overflow-x-auto p-0">
        <table className="w-full text-sm"><thead className="bg-white/5"><tr><th className="px-4 py-2">Issuer</th><th className="px-4 py-2">Yield</th><th className="px-4 py-2">Issue Window</th></tr></thead><tbody>{ncdRows.map((r)=><tr key={r[0]} className="border-t border-white/10"><td className="px-4 py-2">{r[0]}</td><td className="px-4 py-2">{r[1]}</td><td className="px-4 py-2">{r[2]}</td></tr>)}</tbody></table>
      </div>
    </div>
  );
}
