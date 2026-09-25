import { resume, resumeContact } from '@/content/resume';
import type { Locale } from '@/content/site';

import { cx } from './ui';

export type ResumeVariant = 'full' | 'onePage';

/**
 * The CV itself: one column of real text, standard section names and no tables, so ATS
 * parsers read it cleanly. It is printed to PDF from /cv/pdf/; the /cv/ page is the extended version (ResumePage).
 * Styles live in globals.css under `.cv`.
 */
export function ResumeDocument({ locale, variant = 'full' }: { locale: Locale; variant?: ResumeVariant }) {
  const r = resume[locale];
  const one = variant === 'onePage';
  const skills = one ? r.skills.filter((s) => s.onePage) : r.skills;

  return (
    <article className={cx('cv', one && 'cv-one')}>
      <header className="cv-head">
        <h1 className="cv-name">{r.name}</h1>
        <p className="cv-headline">{r.headline}</p>
        <p className="cv-site">
          {r.labels.portfolio}: <a href={`https://${resumeContact.site}`}>{resumeContact.site}</a>
        </p>
        <p className="cv-contact">
          <span>{r.location}</span>
          <a href={`mailto:${resumeContact.email}`}>{resumeContact.email}</a>
          <span>{resumeContact.phone}</span>
          <a href={`https://${resumeContact.linkedin}`}>{resumeContact.linkedin}</a>
          <a href={`https://${resumeContact.github}`}>{resumeContact.github}</a>
        </p>
      </header>

      <Section title={r.labels.summary}>
        <p>{one ? r.summaryShort : r.summary}</p>
      </Section>

      <Section title={r.labels.experience}>
        {r.experience.map((job) => {
          if (one && !job.onePage) return null;
          return (
            <div key={job.role + job.period} className="cv-item">
              <div className="cv-row">
                <h3>
                  {job.role}, <span className="cv-org">{job.org}</span> <span className="cv-place">· {job.place}</span>
                </h3>
                <span className="cv-date">{job.period}</span>
              </div>
              {one ? (
                <Bullets items={job.onePage!} />
              ) : (
                job.groups.map((g, i) => (
                  <div key={g.title ?? i}>
                    {g.title && <h4 className="cv-group">{g.title}</h4>}
                    <Bullets items={g.bullets} />
                  </div>
                ))
              )}
            </div>
          );
        })}
      </Section>

      {!one && (
        <Section title={r.labels.projects}>
          {r.projects
            .filter((p) => !p.webOnly)
            .map((p) => (
            <div key={p.name} className="cv-item cv-project">
              <div className="cv-row">
                <h3>
                  {p.name}, <span className="cv-org">{p.role}</span>
                </h3>
                {p.links?.[0] && (
                  <a className="cv-date" href={p.links[0].href}>
                    {p.links[0].label}
                  </a>
                )}
              </div>
              <p>{p.text}</p>
            </div>
            ))}
        </Section>
      )}

      <Section title={r.labels.education}>
        {r.education.map((e) => (
          <div key={e.degree} className="cv-item">
            <div className="cv-row">
              <h3>
                {e.degree}, <span className="cv-org">{e.school}</span>
              </h3>
              <span className="cv-date">{e.period}</span>
            </div>
            {one ? e.onePage && <p>{e.onePage}</p> : <Bullets items={e.details} />}
          </div>
        ))}
      </Section>

      <Section title={r.labels.skills}>
        <ul className="cv-skills">
          {skills.map((s) => (
            <li key={s.label}>
              <strong>{s.label}:</strong> {s.items}
            </li>
          ))}
        </ul>
      </Section>

      <Section title={one ? r.labels.languages : `${r.labels.languages} · ${r.labels.courses}`}>
        <p>{r.languages}</p>
        {!one && <p className="cv-courses">{r.courses.join(' · ')}</p>}
      </Section>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="cv-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="cv-bullets">
      {items.map((b) => (
        <li key={b.slice(0, 40)}>{b}</li>
      ))}
    </ul>
  );
}
