import Link from 'next/link';

import { contact, ui, type Locale } from '@/content/site';

export function Footer({ locale }: { locale: Locale }) {
  const t = ui[locale];
  return (
    <footer className="border-t border-line">
      <div className="wrap flex flex-col gap-4 py-8 text-[13px] text-muted md:flex-row md:items-center md:justify-between">
        <span>{t.footerLine}</span>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {t.footerSupport && (
            <Link href="/suporte/" className="transition-colors hover:text-ink">
              {t.footerSupport}
            </Link>
          )}
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">
            LinkedIn
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
