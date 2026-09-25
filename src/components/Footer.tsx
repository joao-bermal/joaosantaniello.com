import Link from 'next/link';

import { contact, localePath, ui, type Locale } from '@/content/site';

import { ArrowUpRight } from './ui';

export function Footer({ locale }: { locale: Locale }) {
  const t = ui[locale];
  const f = t.footer;
  const home = localePath(locale);
  const pages = [
    { href: home, label: t.nav.home },
    { href: `${home}#work`, label: t.nav.work },
    { href: localePath(locale, '/cases/miau-atelier/'), label: t.nav.miau },
    { href: `${home}#services`, label: t.nav.services },
    { href: `${home}#process`, label: t.nav.process },
    { href: `${home}#about`, label: t.nav.about },
    { href: localePath(locale, '/cv/'), label: t.nav.cv },
  ];
  const contacts = [
    { href: contact.whatsapp, label: `WhatsApp ${contact.whatsappLabel}` },
    { href: `mailto:${contact.email}`, label: contact.email },
    { href: contact.linkedin, label: 'LinkedIn' },
    { href: contact.github, label: 'GitHub' },
  ];

  return (
    <footer className="border-t border-line bg-paper-2">
      <div className="wrap grid gap-12 py-14 md:grid-cols-[1.4fr_1fr_1.2fr] md:py-16">
        <div>
          <Link href={home} className="flex items-center gap-3">
            <span aria-hidden="true" className="display flex h-10 w-10 items-center justify-center rounded-[11px] bg-night text-[16px] tracking-tight text-gold-soft ring-1 ring-night-line">
              JS
            </span>
            <span className="display text-[22px] tracking-tight">João Santaniello</span>
          </Link>
          <p className="mt-5 max-w-sm text-[15px] text-muted">{f.tagline}</p>
          {t.footerSupport && f.local && (
            <p className="mt-6 text-[14px]">
              <span className="block text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">{f.local}</span>
              <Link href="/suporte/" className="mt-1 inline-flex items-center gap-1.5 font-medium text-ink-2 hover:text-gold-deep">
                {t.footerSupport} <ArrowUpRight />
              </Link>
            </p>
          )}
        </div>

        <nav aria-label={f.pages}>
          <h2 className="text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">{f.pages}</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 text-[15px] md:grid-cols-1">
            {pages.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="text-ink-2 transition-colors hover:text-gold-deep">
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">{f.contact}</h2>
          <ul className="mt-4 flex flex-col gap-2.5 text-[15px]">
            {contacts.map((c) => (
              <li key={c.href}>
                <a href={c.href} target={c.href.startsWith('mailto:') ? undefined : '_blank'} rel="noopener noreferrer" className="break-all text-ink-2 transition-colors hover:text-gold-deep">
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[14px] text-muted">{f.reply}</p>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="wrap flex flex-col gap-3 py-6 text-[13px] text-muted md:flex-row md:items-center md:justify-between">
          <span>
            © {new Date().getFullYear()} {t.footerLine}. {f.rights}
          </span>
          <a href="#" className="transition-colors hover:text-ink">
            {f.top} ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
