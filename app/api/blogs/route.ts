import { NextResponse } from 'next/server';
import { blogs } from '@/app/lib/data';

export async function GET() {
  return NextResponse.json(blogs);
}
