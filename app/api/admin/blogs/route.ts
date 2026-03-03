import { NextRequest, NextResponse } from 'next/server';
import { getAuthUser, forbidden, requireCsrf, unauthorized, hasRole } from '@/app/lib/server/auth';
import { logAudit } from '@/app/lib/server/logger';
import { sanitizeObject } from '@/app/lib/security/sanitize';

const makeSlug = (value: string) => value.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-');

export async function POST(req: NextRequest) {
  const user = await getAuthUser();
  if (!user) return unauthorized();
  if (!hasRole(user, ['ADMIN', 'EDITOR'])) return forbidden();
  if (!requireCsrf()) return NextResponse.json({ error: 'Invalid CSRF token' }, { status: 403 });

  const body = sanitizeObject(await req.json() as Record<string, unknown>);
  if (!body.title || !body.content || !body.category) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }

  const title = String(body.title);
  const slug = String(body.slug || makeSlug(title));
  const metaTitle = String(body.metaTitle || `${title} | IPO Vision 3D`);
  const metaDescription = String(body.metaDescription || String(body.content).slice(0, 150));

  const payload = { ...body, slug, metaTitle, metaDescription, updatedAt: new Date().toISOString() };
  logAudit('UPSERT_BLOG', user.email, { slug, title });
  return NextResponse.json({ message: 'Blog saved', payload });
}
