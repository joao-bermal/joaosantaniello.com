import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';

export function cx(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

const variants = {
  gold: 'bg-gold text-white hover:bg-gold-deep',
  ink: 'bg-ink text-paper hover:bg-ink-2',
  line: 'border border-line text-ink hover:bg-paper-2',
  lineNight: 'border border-night-line text-on-night hover:bg-night-2',
} as const;

type ButtonProps = { variant?: keyof typeof variants; children: ReactNode; className?: string } & Omit<
  ComponentProps<typeof Link>,
  'className'
>;

/** Link styled as a pill button. External links open in a new tab. */
export function ButtonLink({ variant = 'gold', className, children, href, ...rest }: ButtonProps) {
  const external = typeof href === 'string' && /^(https?:|mailto:)/.test(href);
  return (
    <Link
      href={href}
      className={cx('btn', variants[variant], className)}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {children}
    </Link>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cx('eyebrow', className)}>{children}</span>;
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  className,
  invert = false,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  className?: string;
  invert?: boolean;
}) {
  return (
    <div className={cx('mb-12 max-w-2xl md:mb-16', className)}>
      <Eyebrow className={invert ? 'text-gold-soft' : undefined}>{eyebrow}</Eyebrow>
      <h2 className={cx('display mt-4 text-4xl leading-[1.08] md:text-5xl', invert ? 'text-on-night' : 'text-ink')}>{title}</h2>
      {lead && <p className={cx('mt-5 text-[17px]', invert ? 'text-on-night-muted' : 'text-muted')}>{lead}</p>}
    </div>
  );
}

export function ArrowUpRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
