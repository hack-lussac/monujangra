const rightsRows = [
  ['Hilton Metal Forging', '24 Feb', '13 - 23 Mar'],
  ['Nexome Capital Markets', '05 Mar', 'Pending'],
  ['Enbee Trade & Finance', '04 Mar', '12 - 20 Mar']
];

export default function RightsPage() {
  return (
    <div className="space-y-4">
      <h1 className="section-title">Rights Issues</h1>
      <div className="grid gap-4 md:grid-cols-3">{rightsRows.map((item)=><article key={item[0]} className="glass-card p-4"><h2 className="text-lg font-semibold text-white">{item[0]}</h2><p className="mt-2 text-sm text-slate-300">Record Date: {item[1]}</p><p className="text-sm text-slate-300">Issue Date: {item[2]}</p></article>)}</div>
    </div>
  );
}
