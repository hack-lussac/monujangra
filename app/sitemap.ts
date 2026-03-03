import type { MetadataRoute } from 'next';
import { blogs, ipos } from './lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://ipopulsepro.com';
  const staticPaths = ['', '/gmp', '/blog', '/tools'];
  return [
    ...staticPaths.map((path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: path === '' ? 1 : 0.8
    })),
    ...ipos.map((ipo) => ({
      url: `${base}/ipo/${ipo.slug}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.7
    })),
    ...blogs.map((blog) => ({
      url: `${base}/blog/${blog.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7
    }))
  ];
}
