import { NextResponse } from 'next/server';
import { ipos } from '@/app/lib/data';

export async function GET() {
  return NextResponse.json(ipos.map((ipo) => ({ name: ipo.name, subscription: ipo.subscription })));
}
