import { resume } from '@/content/resume';
import { contact, type Locale } from '@/content/site';

import { ResumeDocument } from './ResumeDocument';
import { ArrowRight, ButtonLink, Eyebrow } from './ui';

export function ResumePage({ locale }: { locale: Locale }) {
  const r = resume[locale];
  const downloads = [
    { href: r.files.full, label: r.labels.full, note: r.labels.fullNote },
    { href: r.files.onePage, label: r.labels.onePage, note: r.labels.onePageNote },
  ];

  return (
    <main className="bg-paper-2 pb-20 md:pb-28">
      <section className="wrap grid gap-10 pb-12 pt-14 md:grid-cols-[1fr_auto] md:items-end md:pt-20">
        <div>
          <Eyebrow>{r.name}</Eyebrow>
          <h1 className="display mt-5 text-[40px] leading-[1.05] md:text-[56px]">{r.labels.eyebrow}</h1>
          <p className="mt-5 max-w-2xl text-[17px] text-muted">{r.labels.intro}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
          {downloads.map((d) => (
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
              <span className="text-gold transition-transform group-hover:translate-y-0.5" aria-hidden="true">
                ↓
              </span>
            </a>
          ))}
        </div>
      </section>

      <div className="wrap">
        <div className="mx-auto max-w-[900px] rounded-3xl border border-line bg-surface px-6 py-9 shadow-[0_20px_60px_-40px_rgba(20,22,26,0.35)] md:px-16 md:py-14">
          <ResumeDocument locale={locale} embedded />
        </div>
        <div className="mt-10 flex justify-center">
          <ButtonLink href={`mailto:${contact.email}`} variant="ink">
            {contact.email} <ArrowRight />
          </ButtonLink>
        </div>
      </div>
    </main>
  );
}
