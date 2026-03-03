const ofsRows = [
  ['Indian Railway Finance Corporation', '25 Feb', '26 Feb'],
  ['Bharat Heavy Electricals', '11 Feb', '12 Feb'],
  ['Indigrid Infrastructure Trust', '05 Feb', '06 Feb']
];

export default function OfsPage() {
  return (
    <div className="space-y-4">
      <h1 className="section-title">Offer For Sale Dashboard</h1>
      <div className="glass-card overflow-x-auto p-0"><table className="w-full text-sm"><thead className="bg-white/5"><tr><th className="px-4 py-2">Company</th><th className="px-4 py-2">Non Retail</th><th className="px-4 py-2">Retail</th></tr></thead><tbody>{ofsRows.map((row)=><tr key={row[0]} className="border-t border-white/10"><td className="px-4 py-2">{row[0]}</td><td className="px-4 py-2">{row[1]}</td><td className="px-4 py-2">{row[2]}</td></tr>)}</tbody></table></div>
    </div>
  );
}
