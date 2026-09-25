import type { Metadata } from 'next';

import { ThemeScript } from '@/components/ThemeScript';
import { fontVariables } from '@/lib/fonts';
import { siteUrl } from '@/lib/site-url';

import '../globals.css';

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: { default: 'João Santaniello', template: '%s | João Santaniello' },
  alternates: { languages: { 'pt-BR': '/', en: '/en/' } },
};

export default function PortugueseLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={fontVariables} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
