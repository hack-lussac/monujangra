import Link from 'next/link';
import { blogs } from '@/app/lib/data';

export default function BlogPage() {
  const categories = [...new Set(blogs.map((b) => b.category))];
  return (
    <div>
      <h1 className="section-title mb-4">IPO Pulse Pro Blog</h1>
      <div className="mb-4 flex gap-2">{categories.map((c) => <span key={c} className="rounded-full bg-slate-100 px-3 py-1 text-xs dark:bg-slate-800">{c}</span>)}</div>
      <div className="grid gap-4 md:grid-cols-2">
        {blogs.map((post) => (
          <article key={post.id} className="card">
            <p className="text-xs text-slate-500">{post.category}</p>
            <h2 className="mt-1 text-lg font-semibold">{post.title}</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{post.excerpt}</p>
            <p className="mt-3 text-xs">By {post.author}</p>
            <Link href={`/blog/${post.slug}`} className="mt-3 inline-block text-sm font-medium text-primary dark:text-slate-100">Read more →</Link>
          </article>
        ))}
      </div>
    </div>
  );
}
