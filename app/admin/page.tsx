export default function AdminPage() {
  return (
    <div className="space-y-6">
      <h1 className="section-title">Admin Dashboard</h1>
      <div className="grid gap-4 lg:grid-cols-2">
        <section className="card">
          <h2 className="font-semibold">Add / Update IPO</h2>
          <form className="mt-3 space-y-2">
            <input className="w-full rounded-lg border border-slate-300 p-2 dark:border-slate-700 dark:bg-slate-900" placeholder="Company name" />
            <input className="w-full rounded-lg border border-slate-300 p-2 dark:border-slate-700 dark:bg-slate-900" placeholder="Price band" />
            <button className="rounded-lg bg-primary px-3 py-2 text-white">Save IPO</button>
          </form>
        </section>
        <section className="card">
          <h2 className="font-semibold">Publish Blog Post</h2>
          <form className="mt-3 space-y-2">
            <input className="w-full rounded-lg border border-slate-300 p-2 dark:border-slate-700 dark:bg-slate-900" placeholder="Blog title" />
            <textarea className="w-full rounded-lg border border-slate-300 p-2 dark:border-slate-700 dark:bg-slate-900" placeholder="Article content" />
            <button className="rounded-lg bg-primary px-3 py-2 text-white">Publish</button>
          </form>
        </section>
      </div>
    </div>
  );
}
