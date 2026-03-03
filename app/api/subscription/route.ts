import { NextResponse } from 'next/server';
import { ipos } from '@/app/lib/data';

export async function GET() {
  return NextResponse.json(
    ipos.map((ipo) => ({
      companyName: ipo.companyName,
      subscription: ipo.subscription,
      status: ipo.status
    }))
  );
}
