import { NextRequest, NextResponse } from 'next/server';
import { ipos } from '@/app/lib/data';
import { sanitizeText } from '@/app/lib/security/sanitize';
import { logRequest, logError } from '@/app/lib/server/logger';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    const status = req.nextUrl.searchParams.get('status') as 'Open' | 'Upcoming' | 'Closed' | 'Listed' | null;
    const page = Number(req.nextUrl.searchParams.get('page') ?? 1);
    const limit = Math.min(Number(req.nextUrl.searchParams.get('limit') ?? 10), 50);
    if (Number.isNaN(page) || Number.isNaN(limit) || page < 1 || limit < 1) {
      return NextResponse.json({ error: 'Invalid query' }, { status: 400 });
    }

    let data = [...ipos].map((ipo) => {
      const delta = Math.floor(Math.random() * 5) - 2;
      return {
        ...ipo,
        gmp: Math.max(0, ipo.gmp + delta),
        gmpDelta: delta,
        updatedAt: new Date().toISOString()
      };
    });

    if (status) data = data.filter((ipo) => ipo.status === status);
    const start = (page - 1) * limit;
    const paginated = data.slice(start, start + limit);
    logRequest('IPO list fetched', { page, limit });
    return NextResponse.json({ data: paginated, total: data.length, page });
  } catch (error) {
    logError('Failed IPO list', { error });
    return NextResponse.json({ error: sanitizeText('Invalid request') }, { status: 400 });
  }
}
