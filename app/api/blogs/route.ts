import { NextRequest, NextResponse } from 'next/server';
import { blogs } from '@/app/lib/data';

export async function GET(req: NextRequest) {
  const category = req.nextUrl.searchParams.get('category');
  const page = Number(req.nextUrl.searchParams.get('page') ?? 1);
  if (Number.isNaN(page) || page < 1) return NextResponse.json({ error: 'Invalid query' }, { status: 400 });

  const filtered = category ? blogs.filter((post) => post.category === category) : blogs;
  return NextResponse.json({ data: filtered, total: filtered.length, page });
}
