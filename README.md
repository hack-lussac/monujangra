# IPO Pulse Pro

Secure, scalable, production-ready IPO & GMP intelligence platform built with Next.js 14.

## Highlights
- **Premium investor UI:** homepage, GMP center, IPO detail pages, tools, blog, and admin dashboard.
- **Security hardening:** JWT auth, RBAC (Admin/Editor/Viewer), bcrypt hashing, HTTP-only cookies, CSRF check, input validation and sanitization, route-level rate limiting, strict security headers, safe errors.
- **Scalability baseline:** pagination-ready APIs, caching-friendly responses, middleware rate controls, edge/CDN compatible Next.js setup, optimized build config.
- **SEO stack:** dynamic metadata, OpenGraph, Twitter cards, canonical URLs, robots.txt, sitemap.xml, JSON-LD (FAQ).
- **Monetization support:** AdSense placeholder, affiliate placeholder, newsletter/push UI placements.

## Stack
- Next.js 14 App Router + TypeScript
- Tailwind CSS + Recharts
- Prisma schema for PostgreSQL
- Redis-ready env variable support

## Secure Environment Setup
1. Copy env template:
   ```bash
   cp .env.example .env
   ```
2. Provide strong values for:
   - `JWT_SECRET` (32+ chars)
   - `DATABASE_URL`
   - `REDIS_URL` (optional)

## Run
```bash
npm install
npm run dev
```

## Demo Auth (after dependency install)
- `admin@ipopulsepro.com` / `ChangeMe123!`
- `editor@ipopulsepro.com` / `ChangeMe123!`

## Production
```bash
npm run build
npm run start
```

## Docker
```bash
docker build -t ipo-pulse-pro .
docker run -p 3000:3000 --env-file .env ipo-pulse-pro
```
