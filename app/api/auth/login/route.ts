import { NextRequest, NextResponse } from 'next/server';
import { adminUsers } from '@/app/lib/data';
import { verifyPassword } from '@/app/lib/security/password';
import { signAuthToken } from '@/app/lib/security/jwt';
import { sanitizeObject } from '@/app/lib/security/sanitize';
import { logAudit } from '@/app/lib/server/logger';

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.json();
    const body = sanitizeObject(rawBody as { email?: string; password?: string });
    if (!body.email || !body.password || body.password.length < 8) {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    }

    const user = adminUsers.find((item) => item.email === body.email);
    if (!user) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });

    const ok = await verifyPassword(body.password, user.passwordHash);
    if (!ok) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });

    const token = await signAuthToken({ sub: String(user.id), role: user.role, email: user.email });
    const response = NextResponse.json({ message: 'Login successful', role: user.role });

    response.cookies.set('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 8
    });

    logAudit('LOGIN', user.email);
    return response;
  } catch {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }
}
