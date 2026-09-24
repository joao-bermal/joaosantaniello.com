import type { Metadata } from 'next';

import { fontVariables } from '@/lib/fonts';
import { siteUrl } from '@/lib/site-url';

import '../../globals.css';

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: { default: 'João Bermal', template: '%s | João Bermal' },
  alternates: { languages: { 'pt-BR': '/', en: '/en/' } },
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVariables}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
