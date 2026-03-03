import { NextRequest, NextResponse } from 'next/server';
import { rateLimit } from './app/lib/server/rate-limit';

const scriptSrc = ["'self'", "'unsafe-inline'", process.env.NODE_ENV === 'development' ? "'unsafe-eval'" : ''].filter(Boolean).join(' ');

const securityHeaders = {
  'Content-Security-Policy': `default-src 'self'; img-src 'self' data: https:; script-src ${scriptSrc}; style-src 'self' 'unsafe-inline'; connect-src 'self'; frame-ancestors 'none';`,
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
};

export function middleware(req: NextRequest) {
  const ip = req.ip ?? req.headers.get('x-forwarded-for') ?? 'anonymous';
  const key = `${ip}:${req.nextUrl.pathname}`;
  const limited = rateLimit(key, req.nextUrl.pathname.startsWith('/api') ? 100 : 300);

  if (!limited.ok) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429, headers: { 'Retry-After': `${limited.retryAfter ?? 60}` } });
  }

  const response = NextResponse.next();
  Object.entries(securityHeaders).forEach(([k, v]) => response.headers.set(k, v));
  response.headers.set('x-powered-by', '');

  if (!req.cookies.get('csrf_token')) {
    response.cookies.set('csrf_token', crypto.randomUUID(), {
      httpOnly: false,
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
      path: '/'
    });
  }

  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)']
};
