import Link from 'next/link';
import { blogs } from '@/app/lib/data';

export default function BlogPage() {
  return (
    <div>
      <h1 className="section-title mb-4">IPO & Market Blog</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {blogs.map((post) => (
          <article key={post.id} className="card">
            <p className="text-xs text-slate-500">{post.category}</p>
            <h2 className="mt-1 text-lg font-semibold">{post.title}</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{post.excerpt}</p>
            <p className="mt-3 text-xs">Author: {post.author}</p>
            <Link href={`/blog/${post.slug}`} className="mt-3 inline-block text-sm font-medium text-primary dark:text-slate-100">Read more →</Link>
          </article>
        ))}
      </div>
    </div>
  );
}
