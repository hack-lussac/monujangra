export function normalizePath(path: string): string {
  if (!path) return '/';

  let normalized = path.trim();
  if (!normalized.startsWith('/')) {
    normalized = `/${normalized}`;
  }

  normalized = normalized.replace(/\/+/g, '/');

  if (normalized.length > 1 && normalized.endsWith('/')) {
    normalized = normalized.slice(0, -1);
  }

  return normalized || '/';
}

export function ipoPath(slug: string): string {
  return normalizePath(`/ipo/${slug}`);
}

export function blogPath(slug: string): string {
  return normalizePath(`/blog/${slug}`);
}
