import Image from 'next/image';
import Link from 'next/link';

import { miauAssets } from '@/content/miau-atelier';
import { contact, home, localePath, work, type Locale } from '@/content/site';

import { ContactCta } from './ContactCta';
import { ArrowRight, ArrowUpRight, ButtonLink, Eyebrow, SectionHead, cx } from './ui';

export function HomePage({ locale }: { locale: Locale }) {
  const t = home[locale];
  const caseHref = localePath(locale, '/cases/miau-atelier/');

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="wrap grid items-center gap-14 pb-20 pt-16 md:grid-cols-[1.05fr_1fr] md:pb-28 md:pt-24">
          <div>
            <Eyebrow>{t.hero.eyebrow}</Eyebrow>
            <h1 className="display mt-6 text-[44px] leading-[1.04] md:text-[68px]">{t.hero.title}</h1>
            <p className="mt-7 max-w-xl text-[18px] text-muted">{t.hero.lead}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href={caseHref} variant="ink">
                {t.hero.primary} <ArrowRight />
              </ButtonLink>
              <ButtonLink href={contact.whatsapp} variant="line">
                {t.hero.secondary}
              </ButtonLink>
            </div>
          </div>

          <div className="relative grid grid-cols-5 grid-rows-6 gap-3 md:gap-4" style={{ aspectRatio: '1 / 1.05' }}>
            <div className="relative col-span-3 row-span-4 overflow-hidden rounded-2xl">
              <Image src="/assets/miau-atelier/editorial-hero-living-room-scratcher.webp" alt="Miau Atelier" fill sizes="(min-width: 768px) 30vw, 60vw" className="object-cover" loading="eager" fetchPriority="high" />
            </div>
            <div className="relative col-span-2 row-span-3 overflow-hidden rounded-2xl bg-night">
              <Image src="/assets/obsidian-branding.jpg" alt="OBSIDIAN, The Origin" fill sizes="(min-width: 768px) 20vw, 40vw" className="object-cover" />
            </div>
            <div className="relative col-span-2 row-span-3 overflow-hidden rounded-2xl border border-ma-sand bg-ma-ivory">
              <Image src={miauAssets.brandBoard} alt="Miau Atelier brand board" fill sizes="(min-width: 768px) 20vw, 40vw" className="object-cover object-top" />
            </div>
            <div className="relative col-span-3 row-span-2 overflow-hidden rounded-2xl">
              <Image src="/assets/miau-atelier/products/woven-cattail-cat-tree.webp" alt="Woven Cattail Cat Tree" fill sizes="(min-width: 768px) 30vw, 60vw" className="object-cover object-[50%_35%]" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured case */}
      <section id="work" className="bg-ma-ivory py-20 text-ma-chocolate md:py-28">
        <div className="wrap">
          <Link href={caseHref} className="group grid items-center gap-12 md:grid-cols-[1.2fr_1fr]">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {miauAssets.pairs.slice(0, 2).map((p) => (
                <div key={p.key} className="relative aspect-[4/5] overflow-hidden">
                  <Image src={p.after} alt={p.name} fill sizes="(min-width: 768px) 28vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                </div>
              ))}
            </div>
            <div>
              <span className="font-ma-sans text-[11.5px] font-medium uppercase tracking-[0.24em] text-ma-sage">{t.featured.eyebrow}</span>
              <h2 className="mt-4 font-ma-serif text-5xl md:text-6xl">{t.featured.title}</h2>
              <p className="mt-6 text-[17px] leading-relaxed text-ma-muted">{t.featured.text}</p>
              <dl className="mt-9 grid grid-cols-3 gap-4 border-t border-ma-sand pt-7">
                {t.featured.stats.map((s) => (
                  <div key={s.label}>
                    <dt className="font-ma-serif text-3xl">{s.value}</dt>
                    <dd className="mt-1 text-[13px] leading-snug text-ma-muted">{s.label}</dd>
                  </div>
                ))}
              </dl>
              <span className="mt-9 inline-flex items-center gap-2 font-semibold text-gold-deep">
                {t.featured.link} <ArrowRight />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 md:py-28">
        <div className="wrap">
          <SectionHead eyebrow={t.services.eyebrow} title={t.services.title} lead={t.services.lead} />
          <div className="grid gap-5 md:grid-cols-3">
            {t.services.items.map((s, i) => (
              <article key={s.title} className="flex flex-col rounded-3xl border border-line bg-surface p-8 md:p-9">
                <span className="display text-[15px] text-gold">0{i + 1}</span>
                <h3 className="display mt-4 text-[26px] leading-tight">{s.title}</h3>
                <p className="mt-4 text-[15.5px] text-muted">{s.text}</p>
                <ul className="mt-6 flex flex-col gap-2.5 border-t border-line pt-6 text-[14.5px] text-ink-2">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex gap-3">
                      <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {d}
                    </li>
                  ))}
                </ul>
                <p className="display mt-auto pt-8 text-[19px]">{s.price}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-[13.5px] text-muted">{t.services.note}</p>
        </div>
      </section>

      {/* Selected work */}
      <section className="bg-night py-20 md:py-28">
        <div className="wrap">
          <SectionHead eyebrow={t.work.eyebrow} title={t.work.title} invert />
          <div className="grid gap-5 md:grid-cols-2">
            {work.map((w) => {
              const body = (
                <>
                  {w.image && (
                    <div className="relative mb-7 aspect-[16/10] overflow-hidden rounded-2xl bg-night">
                      <Image src={w.image} alt={w.title} fill sizes="(min-width: 768px) 45vw, 90vw" className="object-cover object-[50%_40%]" />
                    </div>
                  )}
                  <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-gold-soft">{w.tag[locale]}</span>
                  <h3 className="display mt-3 text-[26px] text-on-night">{w.title}</h3>
                  <p className="mt-3 text-[15px] text-on-night-muted">{w.text[locale]}</p>
                  {w.linkLabel && (
                    <span className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-gold-soft">
                      {w.linkLabel[locale]} <ArrowUpRight />
                    </span>
                  )}
                </>
              );
              const cls = cx('block rounded-3xl border border-night-line bg-night-2 p-8', w.image && 'md:row-span-2', w.wide && 'md:col-span-2', w.href && 'transition-colors hover:border-gold/60');
              return w.href ? (
                <a key={w.key} href={w.href} target="_blank" rel="noopener noreferrer" className={cls}>
                  {body}
                </a>
              ) : (
                <div key={w.key} className={cls}>
                  {body}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 md:py-28">
        <div className="wrap">
          <SectionHead eyebrow={t.process.eyebrow} title={t.process.title} />
          <ol className="grid gap-5 md:grid-cols-4">
            {t.process.steps.map((s, i) => (
              <li key={s.title} className="border-t-2 border-ink pt-6">
                <span className="display text-[15px] text-gold">0{i + 1}</span>
                <h3 className="display mt-2 text-[22px]">{s.title}</h3>
                <p className="mt-3 text-[15px] text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-paper-2 py-20 md:py-28">
        <div className="wrap grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <div>
            <Eyebrow>{t.about.eyebrow}</Eyebrow>
            <h2 className="display mt-4 text-4xl leading-[1.08] md:text-5xl">{t.about.title}</h2>
            <ul className="mt-8 flex flex-wrap gap-2">
              {t.about.credentials.map((c) => (
                <li key={c} className="rounded-full border border-line bg-surface px-4 py-1.5 text-[13px] text-ink-2">
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-5 text-[17px] leading-relaxed text-ink-2">
            {t.about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <ContactCta title={t.contact.title} text={t.contact.text} />
    </main>
  );
}
