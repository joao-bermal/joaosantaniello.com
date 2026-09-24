import Image from 'next/image';

import { miauAssets, miauCopy } from '@/content/miau-atelier';
import { localePath, type Locale } from '@/content/site';

import { BeforeAfter } from './BeforeAfter';
import { BrowserFrame } from './BrowserFrame';
import { ContactCta } from './ContactCta';
import { ArrowUpRight, ButtonLink, Eyebrow, SectionHead } from './ui';

const STORE = 'https://miauatelier.com';

/** Small caps label in the Miau Atelier brand style. */
function MaLabel({ children }: { children: string }) {
  return <span className="font-ma-sans text-[11.5px] font-medium uppercase tracking-[0.24em] text-ma-muted">{children}</span>;
}

export function MiauCase({ locale }: { locale: Locale }) {
  const t = miauCopy[locale];
  const a = miauAssets;

  return (
    <main>
      {/* Hero */}
      <section className="pb-12 pt-16 md:pt-24">
        <div className="wrap">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h1 className="display mt-6 max-w-4xl text-[40px] leading-[1.06] md:text-[60px]">{t.title}</h1>
          <p className="mt-7 max-w-3xl text-[18px] text-muted">{t.lead}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href={STORE} variant="ink">
              {t.ctaStore} <ArrowUpRight />
            </ButtonLink>
            <ButtonLink href="#before-after" variant="line">
              {t.ctaCompare}
            </ButtonLink>
          </div>
          <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-line pt-8 md:grid-cols-4">
            {t.facts.map((f) => (
              <div key={f.label}>
                <dt className="text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">{f.label}</dt>
                <dd className="display mt-2 text-[19px] leading-snug">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="pb-20">
        <div className="wrap">
          <BrowserFrame url="miauatelier.com" scroll="660px">
            <Image src={a.siteHome} alt="Miau Atelier homepage" width={1100} height={3301} sizes="(min-width: 1200px) 1120px, 100vw" className="w-full" />
          </BrowserFrame>
          <p className="mt-3 text-[13px] text-muted">{t.homeCaption}</p>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-20 md:py-24">
        <div className="wrap grid gap-14 md:grid-cols-2">
          <div>
            <Eyebrow>{t.challenge.eyebrow}</Eyebrow>
            <h2 className="display mt-4 text-3xl leading-[1.12] md:text-[40px]">{t.challenge.title}</h2>
            {t.challenge.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="mt-5 text-[16px] text-muted">
                {p}
              </p>
            ))}
          </div>
          <ol className="flex flex-col gap-7 border-l-2 border-line pl-7">
            {t.challenge.timeline.map((s) => (
              <li key={s.title} className="relative">
                <span aria-hidden="true" className="absolute -left-[35px] top-1.5 h-3 w-3 rounded-full bg-gold" />
                <strong className="block text-[16px]">{s.title}</strong>
                <p className="mt-1 text-[15px] text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Brand reference, in the Miau Atelier identity */}
      <section id="brand" className="bg-ma-ivory py-20 text-ma-chocolate md:py-28">
        <div className="wrap">
          <div className="max-w-2xl">
            <MaLabel>{t.brand.eyebrow}</MaLabel>
            <h2 className="mt-4 font-ma-serif text-4xl md:text-5xl">{t.brand.title}</h2>
            <p className="mt-5 text-[16px] leading-relaxed text-ma-muted">{t.brand.lead}</p>
          </div>

          <div className="mt-14 grid items-start gap-10 md:grid-cols-[1.05fr_1fr]">
            <Image src={a.brandBoard} alt="Miau Atelier brand board" width={1200} height={1500} sizes="(min-width: 768px) 560px, 100vw" className="w-full border border-ma-sand" />

            <div className="flex flex-col gap-10">
              <div>
                <h3 className="font-ma-serif text-2xl">{t.brand.logos}</h3>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {a.logos.map((l) => (
                    <div key={l.src} className={`relative flex aspect-[3/2] items-center justify-center border p-6 ${l.dark ? 'border-ma-chocolate bg-ma-chocolate' : 'border-ma-sand bg-ma-ivory'}`}>
                      <div className="relative h-full w-full">
                        <Image src={l.src} alt={l.alt} fill sizes="240px" className="object-contain" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-ma-serif text-2xl">{t.brand.palette}</h3>
                <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-6">
                  {a.palette.map((c) => (
                    <div key={c.hex}>
                      <div className="aspect-[1/1.1] border border-ma-chocolate/10" style={{ background: c.hex }} />
                      <b className="mt-2 block font-ma-sans text-[11px] font-medium uppercase tracking-[0.1em]">{c.name}</b>
                      <small className="font-ma-sans text-[11px] text-ma-muted">{c.hex}</small>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-ma-serif text-2xl">{t.brand.typography}</h3>
                <div className="mt-4 grid gap-6 border-t border-ma-sand pt-5 sm:grid-cols-2">
                  <div>
                    <p className="font-ma-serif text-[40px] leading-[1.05]">Designed to belong.</p>
                    <small className="mt-2 block font-ma-sans text-[11px] tracking-[0.06em] text-ma-muted">{t.brand.serifNote}</small>
                  </div>
                  <div>
                    <p className="font-ma-sans text-[14px] uppercase leading-loose tracking-[0.24em]">
                      Objects for cats
                      <br />
                      Designed for living
                    </p>
                    <small className="mt-2 block font-ma-sans text-[11px] tracking-[0.06em] text-ma-muted">{t.brand.sansNote}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-16 max-w-4xl font-ma-serif text-2xl italic leading-snug md:text-[30px]">{t.brand.principle}</p>

          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {t.brand.rules.map((r) => (
              <div key={r.title} className="border border-ma-sand p-5 font-ma-sans text-[13px] leading-relaxed text-ma-muted">
                <b className="mb-2 block text-[11px] font-medium uppercase tracking-[0.16em] text-ma-chocolate">{r.title}</b>
                {r.text}
              </div>
            ))}
          </div>

          <Image src={a.mood} alt="Miau Atelier moodboard" width={1275} height={215} sizes="100vw" className="mt-12 w-full border border-ma-sand" />
          <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-3">
            {a.editorial.map((src, i) => (
              <div key={src} className={`relative aspect-square overflow-hidden ${i === 2 ? 'hidden md:block' : ''}`}>
                <Image src={src} alt="Miau Atelier editorial" fill sizes="(min-width: 768px) 33vw, 50vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / after */}
      <section id="before-after" className="py-20 md:py-28">
        <div className="wrap">
          <SectionHead eyebrow={t.art.eyebrow} title={t.art.title} lead={t.art.lead} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {a.pairs.map((p) => (
              <BeforeAfter key={p.key} before={p.before} after={p.after} name={p.name} beforeLabel={t.art.before} afterLabel={t.art.after} aria={t.art.compareAria} />
            ))}
          </div>
          <ol className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.art.steps.map((s, i) => (
              <li key={s.title} className="rounded-3xl border border-line bg-surface p-7">
                <span className="display text-[15px] text-gold">0{i + 1}</span>
                <h3 className="display mt-2 text-[20px]">{s.title}</h3>
                <p className="mt-2 text-[15px] text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Catalog */}
      <section className="bg-ma-ivory py-20 md:py-28">
        <div className="wrap">
          <div className="mb-12 max-w-2xl">
            <MaLabel>{t.catalog.eyebrow}</MaLabel>
            <h2 className="mt-4 font-ma-serif text-4xl text-ma-chocolate md:text-5xl">{t.catalog.title}</h2>
            <p className="mt-4 text-[16px] text-ma-muted">{t.catalog.lead}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {a.products.map((p) => (
              <figure key={p.key} className="m-0">
                <div className="relative aspect-square overflow-hidden">
                  <Image src={p.src} alt={p.name} fill sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw" className="object-cover" />
                </div>
                <figcaption className="mt-2 font-ma-serif text-[14px] text-ma-chocolate">{p.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Store screens */}
      <section className="py-20 md:py-28">
        <div className="wrap">
          <SectionHead eyebrow={t.store.eyebrow} title={t.store.title} lead={t.store.lead} />
          <div className="grid items-start gap-6 md:grid-cols-[2fr_1fr]">
            <div className="flex min-w-0 flex-col gap-6">
              <BrowserFrame url="miauatelier.com/products/woven-cattail-cat-tree">
                <Image src={a.siteProduct} alt={t.store.product} width={1200} height={750} sizes="(min-width: 768px) 740px, 100vw" className="w-full" />
              </BrowserFrame>
              <BrowserFrame url="miauatelier.com/collections/all">
                <Image src={a.siteCollection} alt={t.store.collection} width={1200} height={750} sizes="(min-width: 768px) 740px, 100vw" className="w-full" />
              </BrowserFrame>
            </div>
            <div className="mx-auto w-full max-w-[300px] overflow-hidden rounded-[34px] border-[10px] border-ink">
              <div className="max-h-[600px] overflow-y-auto">
                <Image src={a.siteMobile} alt={t.store.mobile} width={390} height={900} sizes="300px" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What was built */}
      <section className="bg-paper-2 py-20 md:py-28">
        <div className="wrap">
          <SectionHead eyebrow={t.built.eyebrow} title={t.built.title} />
          <div className="grid gap-5 md:grid-cols-3">
            {t.built.groups.map((g) => (
              <div key={g.title} className="rounded-3xl border border-line bg-surface p-8">
                <h3 className="display text-[21px]">{g.title}</h3>
                <ul className="mt-5 flex flex-col gap-2.5 text-[14.5px] text-ink-2">
                  {g.items.map((it) => (
                    <li key={it} className="flex gap-3">
                      <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCta
        title={t.cta.title}
        text={t.cta.text}
        extra={[
          { href: STORE, label: t.cta.store },
          { href: localePath(locale), label: t.cta.back },
        ]}
      />
    </main>
  );
}
