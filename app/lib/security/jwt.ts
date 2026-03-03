import { createHmac, timingSafeEqual } from 'crypto';
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
  const tokenParts = token.split('.');
  if (tokenParts.length !== 3 || tokenParts.some((part) => !part)) {
    throw new Error('Invalid token');
  }

  const [header, body, signature] = tokenParts;
  const expected = createHmac('sha256', env.JWT_SECRET).update(`${header}.${body}`).digest('base64url');

  const signatureBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expected);
  if (
    signatureBuffer.length !== expectedBuffer.length ||
    !timingSafeEqual(signatureBuffer, expectedBuffer)
  ) {
    throw new Error('Invalid token');
  }

  const payload = JSON.parse(Buffer.from(body, 'base64url').toString()) as Partial<JwtPayload>;
  if (!payload.sub || !payload.email || !payload.role) {
    throw new Error('Invalid token payload');
  }
  if (!payload.exp || payload.exp < Math.floor(Date.now() / 1000)) throw new Error('Expired token');
  return payload as JwtPayload;
}
