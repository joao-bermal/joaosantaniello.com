import Link from 'next/link';

import { contact } from '@/content/site';
import { support } from '@/content/support';

import { ArrowRight, ButtonLink, Eyebrow, cx } from './ui';

export function SupportPage() {
  const t = support;
  return (
    <main>
      <section className="pb-12 pt-16 md:pt-24">
        <div className="wrap max-w-4xl">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h1 className="display mt-6 text-[40px] leading-[1.06] md:text-[56px]">{t.title}</h1>
          <p className="mt-6 max-w-2xl text-[18px] text-muted">{t.lead}</p>
          <div className="mt-9">
            <ButtonLink href={contact.whatsapp} variant="gold">
              WhatsApp {contact.whatsappLabel}
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="wrap flex max-w-4xl flex-col gap-6">
          {t.groups.map((g) => (
            <div key={g.title} className="rounded-3xl border border-line bg-surface p-7 md:p-9">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="display text-[24px]">{g.title}</h2>
                <span className="text-[13px] text-muted">{g.subtitle}</span>
              </div>
              <table className="mt-4 w-full border-collapse">
                <tbody>
                  {g.rows.map((r) => (
                    <tr key={r.item} className="border-b border-line last:border-0">
                      <td className="py-4 pr-4 align-top">
                        <span className="block text-[15px] font-medium">{r.item}</span>
                        <span className="mt-0.5 block text-[13px] text-muted">{r.note}</span>
                      </td>
                      <td className={cx('display whitespace-nowrap py-4 text-right align-top text-[16px]', r.highlight && 'text-gold-deep')}>{r.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-24">
        <div className="wrap max-w-4xl">
          <div className="rounded-[28px] bg-night px-8 py-12 md:px-12">
            <h2 className="display text-3xl text-on-night md:text-4xl">{t.cta.title}</h2>
            <p className="mt-3 text-[16px] text-on-night-muted">{t.cta.text}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href={contact.whatsapp} variant="gold">
                WhatsApp {contact.whatsappLabel}
              </ButtonLink>
              <ButtonLink href={`mailto:${contact.email}`} variant="lineNight">
                {contact.email}
              </ButtonLink>
            </div>
          </div>
          <p className="mt-8 text-[15px] text-muted">
            {t.premium.text}{' '}
            <Link href="/" className="inline-flex items-center gap-1 font-semibold text-gold-deep">
              {t.premium.link} <ArrowRight />
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
