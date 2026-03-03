const brokers = [
  { name: 'Zerodha', brokerage: '₹20/order', accountOpen: 'Paperless', rating: '4.8/5' },
  { name: 'Upstox', brokerage: '₹20/order', accountOpen: 'Paperless', rating: '4.6/5' },
  { name: 'Paytm Money', brokerage: '₹15/order', accountOpen: 'Digital KYC', rating: '4.3/5' }
];

export default function BrokersPage() {
  return (
    <div className="space-y-4">
      <h1 className="section-title">Stock Broker Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-3">{brokers.map((broker)=><article key={broker.name} className="glass-card p-4"><h2 className="text-lg font-semibold text-white">{broker.name}</h2><p className="mt-2 text-sm text-slate-300">Brokerage: {broker.brokerage}</p><p className="text-sm text-slate-300">Account Opening: {broker.accountOpen}</p><p className="mt-2 text-sm text-[#00C853]">Rating: {broker.rating}</p></article>)}</div>
    </div>
  );
}
