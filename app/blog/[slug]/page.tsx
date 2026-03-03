import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogs } from '@/app/lib/data';

export function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export default function BlogDetail({ params }: { params: { slug: string } }) {
  const post = blogs.find((item) => item.slug === params.slug);
  if (!post) return notFound();

  return (
    <article className="space-y-4">
      <header className="card">
        <p className="text-xs text-slate-500">{post.category}</p>
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p className="text-sm">By {post.author}</p>
      </header>
      <section className="card">
        <p>{post.content}</p>
        <p className="mt-4 text-sm text-slate-500">Internal links: <Link href="/gmp" className="text-primary">GMP trends</Link> | <Link href="/tools" className="text-primary">IPO tools</Link></p>
      </section>
      <section className="card">
        <h2 className="font-semibold">Comments</h2>
        <textarea className="mt-2 w-full rounded-lg border border-slate-300 p-2 dark:border-slate-700 dark:bg-slate-900" placeholder="Share your view..." />
        <button className="mt-2 rounded-lg bg-primary px-4 py-2 text-white">Post Comment</button>
      </section>
    </article>
  );
}
