export default function ToolsPage() {
  return (
    <div className="space-y-6">
      <h1 className="section-title">IPO Tools</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="card"><h2 className="font-semibold">IPO Profit Calculator</h2><p className="mt-2 text-sm">Estimate listing gains based on lot and GMP assumptions.</p></div>
        <div className="card"><h2 className="font-semibold">Lot Size Calculator</h2><p className="mt-2 text-sm">Compute investment requirement from lot size and price band.</p></div>
        <div className="card"><h2 className="font-semibold">Subscription Tracker</h2><p className="mt-2 text-sm">Monitor live category-wise demand in one view.</p></div>
      </div>
    </div>
  );
}
