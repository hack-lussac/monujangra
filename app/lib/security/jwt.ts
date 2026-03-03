import { createHmac } from 'crypto';
import { env } from '../env';

export type JwtPayload = {
  sub: string;
  role: 'ADMIN' | 'EDITOR' | 'VIEWER';
  email: string;
  exp?: number;
};

const b64 = (v: string) => Buffer.from(v).toString('base64url');

export async function signAuthToken(payload: JwtPayload) {
  const header = b64(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const body = b64(JSON.stringify({ ...payload, exp: Math.floor(Date.now() / 1000) + 60 * 60 * 8 }));
  const signature = createHmac('sha256', env.JWT_SECRET).update(`${header}.${body}`).digest('base64url');
  return `${header}.${body}.${signature}`;
}

export async function verifyAuthToken(token: string) {
  const [header, body, signature] = token.split('.');
  const expected = createHmac('sha256', env.JWT_SECRET).update(`${header}.${body}`).digest('base64url');
  if (signature !== expected) throw new Error('Invalid token');
  const payload = JSON.parse(Buffer.from(body, 'base64url').toString()) as JwtPayload;
  if (!payload.exp || payload.exp < Math.floor(Date.now() / 1000)) throw new Error('Expired token');
  return payload;
}
