import { NextResponse } from 'next/server';
import { getAuthUser } from '@/app/lib/server/auth';

export async function GET() {
  const user = await getAuthUser();
  if (!user) return NextResponse.json({ authenticated: false }, { status: 401 });
  return NextResponse.json({ authenticated: true, user });
}
