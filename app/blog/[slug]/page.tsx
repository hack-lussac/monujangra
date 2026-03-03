import { notFound } from 'next/navigation';
import { blogs } from '@/app/lib/data';
import { BlogDetailClient } from '@/app/components/blog-detail-client';

export function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export default function BlogDetail({ params }: { params: { slug: string } }) {
  const post = blogs.find((item) => item.slug === params.slug);
  if (!post) return notFound();
  const related = blogs.filter((b) => b.slug !== post.slug).slice(0, 3);

  return <BlogDetailClient post={post} related={related} />;
}
