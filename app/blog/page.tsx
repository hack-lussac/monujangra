import Link from 'next/link';
import { blogs } from '@/app/lib/data';

export default function BlogPage() {
  return (
    <div className="space-y-6">
      <section className="glass-card overflow-hidden p-0">
        <div className="h-56 bg-[linear-gradient(120deg,#00C85333,#2979FF55),url('https://images.unsplash.com/photo-1551281044-8c5bd7f4d0d6?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="p-6">
          <p className="text-sm text-slate-300">Market Insights</p>
          <h1 className="text-3xl font-bold">IPO Vision 3D Blog</h1>
          <p className="mt-2 text-slate-300">Deep dives, GMP signals and listing strategy notes for informed investors.</p>
        </div>
      </section>
      <div className="grid gap-4 md:grid-cols-2">
        {blogs.map((post) => (
          <article key={post.id} className="glass-card p-5">
            <p className="text-xs text-slate-400">{post.category}</p>
            <h2 className="mt-1 text-xl font-semibold">{post.title}</h2>
            <p className="mt-2 text-sm text-slate-300">{post.excerpt}</p>
            <p className="mt-3 text-xs">By {post.author}</p>
            <Link href={`/blog/${post.slug}`} className="mt-3 inline-block text-sm font-medium text-[#00C853]">Read article →</Link>
          </article>
        ))}
      </div>
    </div>
  );
}
