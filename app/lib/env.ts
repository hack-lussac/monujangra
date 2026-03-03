function required(value: string | undefined, fallback?: string) {
  const resolved = value ?? fallback;
  if (!resolved) throw new Error('Missing required environment variable');
  return resolved;
}

export const env = {
  NODE_ENV: (process.env.NODE_ENV as 'development' | 'test' | 'production' | undefined) ?? 'development',
  NEXT_PUBLIC_APP_URL: required(process.env.NEXT_PUBLIC_APP_URL, 'http://localhost:3000'),
  JWT_SECRET: required(process.env.JWT_SECRET, 'dev-secret-change-me-dev-secret-123'),
  DATABASE_URL: process.env.DATABASE_URL,
  REDIS_URL: process.env.REDIS_URL
};
