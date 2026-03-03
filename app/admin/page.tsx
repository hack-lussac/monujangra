export default function AdminPage() {
  return (
    <div className="space-y-6">
      <h1 className="section-title">Secure Admin Dashboard</h1>
      <p className="text-sm text-slate-500">Role-based access: Admin / Editor / Viewer. Use /api/auth/login then send CSRF token via x-csrf-token for secure mutations.</p>
      <div className="grid gap-4 lg:grid-cols-2">
        <section className="card">
          <h2 className="font-semibold">Add / Edit IPO & Update GMP</h2>
          <form className="mt-3 space-y-2">
            <input className="w-full rounded-lg border border-slate-300 p-2 dark:border-slate-700 dark:bg-slate-900" placeholder="Company name" />
            <input className="w-full rounded-lg border border-slate-300 p-2 dark:border-slate-700 dark:bg-slate-900" placeholder="GMP" />
            <button className="rounded-lg bg-primary px-3 py-2 text-white">Save IPO</button>
          </form>
        </section>
        <section className="card">
          <h2 className="font-semibold">Manage Blog & SEO Fields</h2>
          <form className="mt-3 space-y-2">
            <input className="w-full rounded-lg border border-slate-300 p-2 dark:border-slate-700 dark:bg-slate-900" placeholder="Blog title" />
            <input className="w-full rounded-lg border border-slate-300 p-2 dark:border-slate-700 dark:bg-slate-900" placeholder="Meta title" />
            <textarea className="w-full rounded-lg border border-slate-300 p-2 dark:border-slate-700 dark:bg-slate-900" placeholder="Article content" />
            <button className="rounded-lg bg-primary px-3 py-2 text-white">Publish</button>
          </form>
        </section>
      </div>
      <section className="card"><h2 className="font-semibold">Analytics & Audit Trail</h2><p className="mt-2 text-sm">Track top IPO pages, conversion funnels, and admin actions.</p></section>
    </div>
  );
}
