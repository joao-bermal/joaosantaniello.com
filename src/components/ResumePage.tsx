import Link from 'next/link';

import { resume, resumeContact, type ResumeGroup } from '@/content/resume';
import { contact, type Locale } from '@/content/site';

import { ArrowUpRight, Eyebrow, cx } from './ui';

/**
 * Extended CV for the site: everything in the PDFs plus context, extra bullets, stack
 * and web-only projects. The PDFs (full and one page) are offered as downloads.
 */
export function ResumePage({ locale }: { locale: Locale }) {
  const r = resume[locale];
  const sections = [
    { id: 'summary', label: r.labels.summary },
    { id: 'experience', label: r.labels.experience },
    { id: 'projects', label: r.labels.projects },
    { id: 'education', label: r.labels.education },
    { id: 'skills', label: r.labels.skills },
  ];
  const contacts = [
    { label: resumeContact.email, href: `mailto:${resumeContact.email}` },
    { label: resumeContact.phone, href: contact.whatsapp },
    { label: 'LinkedIn', href: `https://${resumeContact.linkedin}` },
    { label: 'GitHub', href: `https://${resumeContact.github}` },
  ];

  return (
    <main>
      {/* Hero */}
      <section>
        <div className="wrap grid gap-12 pt-14 md:grid-cols-[1fr_320px] md:items-end md:pt-20">
          <div>
            <Eyebrow>{r.labels.eyebrow}</Eyebrow>
            <h1 className="display mt-5 text-[40px] leading-[1.05] md:text-[60px]">{r.name}</h1>
            <p className="mt-4 text-[17px] font-medium text-gold-deep">{r.headline}</p>
            <p className="mt-5 max-w-2xl text-[17px] text-muted">{r.labels.intro}</p>
            <ul className="mt-7 flex flex-wrap gap-2">
              <li className="rounded-full border border-line px-4 py-1.5 text-[13.5px] text-ink-2">{r.location}</li>
              {contacts.map((c) => (
                <li key={c.href}>
                  <a href={c.href} className="block rounded-full border border-line px-4 py-1.5 text-[13.5px] text-ink-2 transition-colors hover:border-gold hover:text-ink">
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <Downloads locale={locale} />
        </div>

        {/* Highlights: part of the hero, so the page reads as one piece */}
        <div className="wrap pb-12 pt-12 md:pb-16 md:pt-14">
          <dl className="grid grid-cols-2 border-t border-line md:grid-cols-4">
            {r.highlights.map((h, i) => (
              <div key={h.value} className={cx('pr-5 pt-6', i % 2 === 1 && 'pl-5 md:pl-0', i > 0 && 'md:border-l md:border-line md:pl-6', i > 1 && 'mt-2 md:mt-0')}>
                <dt className="display text-[28px] leading-none text-gold-deep md:text-[34px]">{h.value}</dt>
                <dd className="mt-2.5 text-[14px] leading-snug text-muted">{h.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Section index, sticky under the header */}
      <nav aria-label={r.labels.eyebrow} className="sticky top-[72px] z-20 border-y border-line bg-paper/90 backdrop-blur-md">
        <ul className="wrap flex gap-6 overflow-x-auto py-3.5 text-[14px] font-medium [scrollbar-width:none]">
          {sections.map((sec) => (
            <li key={sec.id} className="shrink-0">
              <a href={`#${sec.id}`} className="text-muted transition-colors hover:text-ink">
                {sec.label}
              </a>
            </li>
          ))}
          <li className="ml-auto hidden shrink-0 sm:block">
            <a href={r.files.full} download className="font-semibold text-gold-deep hover:text-ink">
              {r.labels.full} ↓
            </a>
          </li>
        </ul>
      </nav>

      {/* Summary */}
      <Block id="summary" title={r.labels.summary}>
        <p className="max-w-3xl text-[18px] leading-relaxed text-ink-2">{r.summary}</p>
      </Block>

      {/* Experience */}
      <Block id="experience" title={r.labels.experience} tinted>
        <ol className="flex flex-col gap-14">
          {r.experience.map((job) => (
            <li key={job.role + job.period} className="grid gap-6 md:grid-cols-[220px_1fr] md:gap-10">
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-gold-deep">{job.period}</p>
                <p className="mt-2 text-[15px] font-medium">{job.org}</p>
                <p className="text-[14px] text-muted">{job.place}</p>
              </div>
              <div className="min-w-0">
                <h3 className="display text-[26px] leading-tight">{job.role}</h3>
                <div className="mt-5 flex flex-col gap-5">
                  {job.groups.map((g, i) => (
                    <Group key={g.title ?? i} group={g} stackLabel={r.labels.stack} boxed={job.groups.length > 1} />
                  ))}
                </div>
                {job.stack && <Stack items={job.stack} label={r.labels.stack} />}
              </div>
            </li>
          ))}
        </ol>
      </Block>

      {/* Projects */}
      <Block id="projects" title={r.labels.projects}>
        <div className="grid gap-5 md:grid-cols-2">
          {r.projects.map((p, i) => (
            <article key={p.name} className={cx('flex flex-col rounded-3xl border border-line bg-surface p-7 md:p-8', i === 0 && 'md:col-span-2')}>
              <p className="text-[12.5px] font-semibold uppercase tracking-[0.12em] text-gold-deep">{p.role}</p>
              <h3 className="display mt-2 text-[26px]">{p.name}</h3>
              <p className="mt-3 text-[15.5px] text-ink-2">{p.text}</p>
              {p.details && <Bullets items={p.details} className={cx(i === 0 && 'md:grid md:grid-cols-2 md:gap-x-10')} />}
              {p.stack && <Stack items={p.stack} label={r.labels.stack} />}
              {p.links && (
                <div className="mt-auto flex flex-wrap gap-x-6 gap-y-2 pt-6">
                  {p.links.map((l) =>
                    l.href.startsWith('/') ? (
                      <Link key={l.href} href={l.href} className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-gold-deep hover:text-ink">
                        {l.label} <ArrowUpRight />
                      </Link>
                    ) : (
                      <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-gold-deep hover:text-ink">
                        {l.label} <ArrowUpRight />
                      </a>
                    ),
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </Block>

      {/* Education */}
      <Block id="education" title={r.labels.education} tinted>
        <div className="flex flex-col gap-8">
          {r.education.map((e) => (
            <div key={e.degree} className="grid gap-3 md:grid-cols-[220px_1fr] md:gap-10">
              <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-gold-deep">{e.period}</p>
              <div>
                <h3 className="display text-[22px] leading-tight">{e.degree}</h3>
                <p className="mt-1 text-[14.5px] text-muted">
                  {e.school} · {e.place}
                </p>
                <Bullets items={e.details} />
              </div>
            </div>
          ))}
        </div>
      </Block>

      {/* Skills, languages, courses */}
      <Block id="skills" title={r.labels.skills}>
        <dl className="grid gap-x-10 gap-y-6 md:grid-cols-2">
          {r.skills.map((s) => (
            <div key={s.label} className="border-t border-line pt-4">
              <dt className="text-[13px] font-semibold uppercase tracking-[0.12em] text-ink">{s.label}</dt>
              <dd className="mt-2 text-[15px] text-ink-2">{s.items}</dd>
            </div>
          ))}
          <div className="border-t border-line pt-4">
            <dt className="text-[13px] font-semibold uppercase tracking-[0.12em] text-ink">{r.labels.languages}</dt>
            <dd className="mt-2 text-[15px] text-ink-2">{r.languages}</dd>
          </div>
          <div className="border-t border-line pt-4">
            <dt className="text-[13px] font-semibold uppercase tracking-[0.12em] text-ink">{r.labels.courses}</dt>
            <dd className="mt-2 text-[15px] text-ink-2">
              {r.courses.map((c) => (
                <span key={c} className="block">
                  {c}
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </Block>

      {/* Downloads again */}
      <section className="bg-paper-2 py-16 md:py-20">
        <div className="wrap grid gap-8 md:grid-cols-[1fr_320px] md:items-center">
          <p className="max-w-xl text-[17px] text-ink-2">{r.labels.extendedNote}</p>
          <Downloads locale={locale} />
        </div>
      </section>
    </main>
  );
}

function Downloads({ locale }: { locale: Locale }) {
  const r = resume[locale];
  const items = [
    { href: r.files.full, label: r.labels.full, note: r.labels.fullNote },
    { href: r.files.onePage, label: r.labels.onePage, note: r.labels.onePageNote },
  ];
  return (
    <div className="flex flex-col gap-3">
      <p className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-muted">{r.labels.downloads}</p>
      {items.map((d) => (
        <a
          key={d.href}
          href={d.href}
          download
          className="group flex items-center justify-between gap-6 rounded-2xl border border-line bg-surface px-5 py-4 transition-colors hover:border-gold"
        >
          <span>
            <span className="block text-[15px] font-semibold">{d.label}</span>
            <span className="block text-[13px] text-muted">{d.note}</span>
          </span>
          <span className="text-[18px] text-gold transition-transform group-hover:translate-y-0.5" aria-hidden="true">
            ↓
          </span>
        </a>
      ))}
    </div>
  );
}

function Block({ id, title, tinted, children }: { id: string; title: string; tinted?: boolean; children: React.ReactNode }) {
  return (
    <section id={id} className={cx('scroll-mt-[122px] py-16 md:py-20', tinted && 'bg-paper-2')}>
      <div className="wrap">
        <h2 className="eyebrow mb-9">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function Group({ group, stackLabel, boxed }: { group: ResumeGroup; stackLabel: string; boxed: boolean }) {
  return (
    <div className={cx(boxed && 'rounded-2xl border border-line bg-surface p-6 md:p-7')}>
      {group.title && <h4 className="text-[16px] font-semibold">{group.title}</h4>}
      {group.context && <p className="mt-2 text-[15px] text-muted">{group.context}</p>}
      <Bullets items={[...group.bullets, ...(group.extra ?? [])]} />
      {group.stack && <Stack items={group.stack} label={stackLabel} />}
    </div>
  );
}

function Bullets({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cx('mt-4 flex flex-col gap-2.5 text-[15px] text-ink-2', className)}>
      {items.map((b) => (
        <li key={b.slice(0, 40)} className="flex gap-3">
          <span aria-hidden="true" className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

function Stack({ items, label }: { items: string[]; label: string }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-1.5" aria-label={label}>
      {items.map((t) => (
        <li key={t} className="rounded-full border border-line bg-surface px-3 py-1 text-[12.5px] text-ink-2">
          {t}
        </li>
      ))}
    </ul>
  );
}
