'use client';

import Link from 'next/link';

import { LOCALE_COOKIE, type Locale } from '@/content/site';

/**
 * Language link that remembers the visitor's explicit choice for a year.
 * vercel.json skips the automatic Accept-Language redirect when this cookie exists.
 */
export function LanguageSwitch({ target, href, label, aria }: { target: Locale; href: string; label: string; aria: string }) {
  return (
    <Link
      href={href}
      hrefLang={target === 'en' ? 'en' : 'pt-BR'}
      aria-label={aria}
      onClick={() => {
        document.cookie = `${LOCALE_COOKIE}=${target}; path=/; max-age=31536000; samesite=lax`;
      }}
      className="rounded-full border border-line px-3 py-1.5 text-[12px] font-semibold tracking-wider text-ink-2 transition-colors hover:bg-paper-2"
    >
      {label}
    </Link>
  );
}
