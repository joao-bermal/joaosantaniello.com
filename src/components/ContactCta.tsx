import { contact } from '@/content/site';

import { ButtonLink } from './ui';

export function ContactCta({
  title,
  text,
  extra,
}: {
  title: string;
  text: string;
  extra?: { href: string; label: string }[];
}) {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="wrap">
        <div className="relative overflow-hidden rounded-[28px] bg-night px-8 py-14 md:px-16 md:py-20">
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
          <h2 className="display relative max-w-2xl text-4xl leading-[1.08] text-on-night md:text-5xl">{title}</h2>
          <p className="relative mt-5 max-w-xl text-[17px] text-on-night-muted">{text}</p>
          <div className="relative mt-9 flex flex-wrap gap-3">
            <ButtonLink href={contact.whatsapp} variant="gold">
              WhatsApp {contact.whatsappLabel}
            </ButtonLink>
            <ButtonLink href={`mailto:${contact.email}`} variant="lineNight">
              {contact.email}
            </ButtonLink>
            {extra?.map((e) => (
              <ButtonLink key={e.href} href={e.href} variant="lineNight">
                {e.label}
              </ButtonLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
