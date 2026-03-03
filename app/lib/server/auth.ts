import { cookies, headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { verifyAuthToken, type JwtPayload } from '../security/jwt';

export async function getAuthUser(): Promise<JwtPayload | null> {
  const cookieStore = cookies();
  const token = cookieStore.get('auth_token')?.value;
  if (!token) return null;

  try {
    return await verifyAuthToken(token);
  } catch {
    return null;
  }
}

export function requireCsrf() {
  const reqHeaders = headers();
  const csrfHeader = reqHeaders.get('x-csrf-token');
  const csrfCookie = cookies().get('csrf_token')?.value;
  return Boolean(csrfHeader && csrfCookie && csrfHeader === csrfCookie);
}

export function unauthorized(message = 'Unauthorized') {
  return NextResponse.json({ error: message }, { status: 401 });
}

export function forbidden(message = 'Forbidden') {
  return NextResponse.json({ error: message }, { status: 403 });
}

export function hasRole(user: JwtPayload | null, roles: JwtPayload['role'][]) {
  return Boolean(user && roles.includes(user.role));
}
