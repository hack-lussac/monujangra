export default function ToolsPage() {
  return (
    <div className="space-y-6">
      <h1 className="section-title">Financial Tools</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="card"><h2 className="font-semibold">IPO Profit Calculator</h2><p className="mt-2 text-sm">Estimate gains from lot count and expected listing premium.</p><input className="mt-2 w-full rounded-lg border p-2 dark:bg-slate-900" placeholder="Lots"/></div>
        <div className="card"><h2 className="font-semibold">Lot Size Calculator</h2><p className="mt-2 text-sm">Calculate minimum investment required for an IPO lot.</p><input className="mt-2 w-full rounded-lg border p-2 dark:bg-slate-900" placeholder="Upper price"/></div>
        <div className="card"><h2 className="font-semibold">Subscription Tracker Tool</h2><p className="mt-2 text-sm">Category wise QIB/NII/Retail subscription pulse in one panel.</p><button className="mt-2 rounded-lg bg-primary px-3 py-2 text-white">Refresh</button></div>
      </div>
    </div>
  );
}
