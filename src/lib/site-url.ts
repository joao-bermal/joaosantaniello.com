/** Absolute site URL for metadata (Open Graph images). Vercel sets VERCEL_PROJECT_PRODUCTION_URL at build time. */
export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000'),
);
