import { blogs } from '@/app/lib/data';

export default function ReportsPage() {
  return (
    <div className="space-y-4">
      <h1 className="section-title">IPO Reports</h1>
      <div className="grid gap-4 md:grid-cols-2">{blogs.map((blog)=><article key={blog.id} className="glass-card p-5"><p className="text-xs text-slate-400">{blog.category}</p><h2 className="mt-1 text-xl font-semibold text-white">{blog.title}</h2><p className="mt-2 text-sm text-slate-300">{blog.excerpt}</p><p className="mt-3 text-xs text-slate-400">Meta: {blog.metaTitle}</p></article>)}</div>
    </div>
  );
}
