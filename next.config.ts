import type { NextConfig } from 'next';

// Static export: every page is rendered to HTML at build time and served by Vercel as files.
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
