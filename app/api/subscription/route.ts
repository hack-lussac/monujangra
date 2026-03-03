import { NextResponse } from 'next/server';
import { ipos } from '@/app/lib/data';

export async function GET() {
  const payload = ipos.map((ipo) => ({
    companyName: ipo.companyName,
    subscription: {
      qib: Number((ipo.subscription.qib + Math.random()).toFixed(2)),
      nii: Number((ipo.subscription.nii + Math.random()).toFixed(2)),
      retail: Number((ipo.subscription.retail + Math.random()).toFixed(2))
    },
    status: ipo.status,
    updatedAt: new Date().toISOString()
  }));

  return NextResponse.json(payload);
}
