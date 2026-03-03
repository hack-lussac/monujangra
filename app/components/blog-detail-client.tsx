'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

type Blog = {
  title: string;
  content: string;
  author: string;
  authorBio: string;
  category: string;
  slug: string;
};

export function BlogDetailClient({ post, related }: { post: Blog; related: Blog[] }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setProgress(Math.min(100, Math.max(0, scrolled)));
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const headings = useMemo(
    () =>
      post.content
        .split('\n')
        .filter((line) => line.startsWith('##'))
        .map((line) => line.replace('##', '').trim()),
    [post.content]
  );

  const blocks = post.content.split('\n').filter(Boolean);

  return (
    <article className="space-y-4">
      <div className="fixed left-0 top-[61px] z-30 h-1 bg-[#00C853]" style={{ width: `${progress}%` }} />
      <header className="glass-card p-6">
        <p className="text-xs text-slate-400">{post.category}</p>
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p className="mt-2 text-sm text-slate-300">By {post.author} • {post.authorBio}</p>
      </header>

      <section className="grid gap-4 lg:grid-cols-[1fr_280px]">
        <div className="glass-card p-6">
          {blocks.map((line, index) => line.startsWith('#') ? <h2 key={index} className="mt-4 text-xl font-semibold">{line.replace(/^#+\s*/, '')}</h2> : <p key={index} className="mt-3 leading-7 text-slate-200">{line}</p>)}
        </div>
        <aside className="glass-card h-fit p-4 lg:sticky lg:top-24">
          <h3 className="font-semibold">Table of Contents</h3>
          {headings.map((head) => <p key={head} className="mt-2 text-sm text-slate-300">• {head}</p>)}
        </aside>
      </section>

      <section className="glass-card p-5">
        <h2 className="font-semibold">Related posts</h2>
        <div className="mt-3 flex gap-3 overflow-x-auto">
          {related.map((r) => (
            <Link key={r.slug} href={`/blog/${r.slug}`} className="min-w-64 rounded-xl border border-white/15 bg-white/5 p-3">
              <p className="text-xs text-slate-400">{r.category}</p>
              <p className="font-medium">{r.title}</p>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
