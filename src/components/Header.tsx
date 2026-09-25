import Link from 'next/link';

import { contact, localePath, ui, type Locale } from '@/content/site';

import { LanguageSwitch } from './LanguageSwitch';
import { ThemeToggle } from './ThemeToggle';
import { ButtonLink, cx } from './ui';

export function Header({ locale, currentPath = '/' }: { locale: Locale; currentPath?: string }) {
  const t = ui[locale];
  const home = localePath(locale);
  // The two standalone pages (Miau Atelier case and CV) sit next to the home sections,
  // so they are one click away from anywhere. The current page is highlighted.
  const links = [
    { href: `${home}#work`, label: t.nav.work },
    { href: localePath(locale, '/cases/miau-atelier/'), label: t.nav.miau, page: '/cases/miau-atelier/' },
    { href: `${home}#services`, label: t.nav.services },
    { href: `${home}#about`, label: t.nav.about },
    { href: localePath(locale, '/cv/'), label: t.nav.cv, page: '/cv/' },
  ];
  // The language switch keeps the visitor on the equivalent page when it exists.
  const switchHref = locale === 'pt' ? `/en${currentPath === '/' ? '/' : currentPath}` : currentPath;

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="wrap flex h-[72px] items-center justify-between gap-6">
        <Link href={home} className="group flex items-center gap-3" aria-label="João Santaniello">
          <span aria-hidden="true" className="display flex h-9 w-9 items-center justify-center rounded-[10px] bg-night text-[15px] tracking-tight text-gold-soft ring-1 ring-night-line transition-transform group-hover:-rotate-3">
            JS
          </span>
          <span className="display hidden text-[20px] tracking-tight sm:inline md:hidden lg:inline">João Santaniello</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
          {links.map((l) => {
            const active = l.page === currentPath;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? 'page' : undefined}
                className={cx(
                  'relative text-[14px] font-medium transition-colors hover:text-ink',
                  active ? 'text-ink after:absolute after:-bottom-[25px] after:left-0 after:h-0.5 after:w-full after:bg-gold' : 'text-muted',
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle label={t.theme} />
          <LanguageSwitch target={locale === 'pt' ? 'en' : 'pt'} href={switchHref} label={t.langSwitch.label} aria={t.langSwitch.aria} />
          <ButtonLink href={contact.whatsapp} variant="ink" className="hidden !px-5 !py-2.5 !text-[14px] sm:inline-flex">
            {t.cta}
          </ButtonLink>
          <details className="relative md:hidden">
            <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-line" aria-label="Menu">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </summary>
            <div className="absolute right-0 mt-3 flex w-56 flex-col gap-1 rounded-2xl border border-line bg-surface p-3 shadow-xl">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={l.page === currentPath ? 'page' : undefined}
                  className={cx('rounded-lg px-3 py-2 text-[15px] hover:bg-paper-2', l.page === currentPath && 'bg-paper-2 font-semibold')}
                >
                  {l.label}
                </Link>
              ))}
              <Link href={contact.whatsapp} className="mt-1 rounded-lg bg-ink px-3 py-2 text-center text-[15px] font-semibold text-paper">
                {t.cta}
              </Link>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
