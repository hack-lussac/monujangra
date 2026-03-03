import { NextRequest, NextResponse } from 'next/server';
import { getAuthUser, forbidden, requireCsrf, unauthorized, hasRole } from '@/app/lib/server/auth';
import { logAudit } from '@/app/lib/server/logger';
import { sanitizeObject } from '@/app/lib/security/sanitize';

export async function POST(req: NextRequest) {
  const user = await getAuthUser();
  if (!user) return unauthorized();
  if (!hasRole(user, ['ADMIN', 'EDITOR'])) return forbidden();
  if (!requireCsrf()) return NextResponse.json({ error: 'Invalid CSRF token' }, { status: 403 });

  const body = sanitizeObject(await req.json() as Record<string, unknown>);
  if (!body.title || !body.slug || !body.content || !body.category) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }

  logAudit('UPSERT_BLOG', user.email, { slug: body.slug, title: body.title });
  return NextResponse.json({ message: 'Blog saved', payload: body });
}
