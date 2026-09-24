'use client';

import Image from 'next/image';
import { useState } from 'react';

/** Drag (or use the arrow keys) to reveal the supplier photo over the art-directed one. */
export function BeforeAfter({
  before,
  after,
  name,
  beforeLabel,
  afterLabel,
  aria,
}: {
  before: string;
  after: string;
  name: string;
  beforeLabel: string;
  afterLabel: string;
  aria: string;
}) {
  const [pos, setPos] = useState(50);

  return (
    <figure className="m-0">
      <div className="relative aspect-square select-none overflow-hidden rounded-2xl border border-line bg-paper-2">
        <Image src={after} alt={`${afterLabel}: ${name}`} fill sizes="(min-width: 768px) 30vw, 90vw" className="object-cover" />
        <div className="absolute inset-0 bg-white" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <Image src={before} alt={`${beforeLabel}: ${name}`} fill sizes="(min-width: 768px) 30vw, 90vw" className="object-contain" />
        </div>
        <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.08)]" style={{ left: `${pos}%` }}>
          <span className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-lg">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M9 6 3 12l6 6M15 6l6 6-6 6" />
            </svg>
          </span>
        </div>
        <span className="pointer-events-none absolute bottom-3 left-3 rounded-md bg-ink/75 px-2 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">{beforeLabel}</span>
        <span className="pointer-events-none absolute bottom-3 right-3 rounded-md bg-ink/75 px-2 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">{afterLabel}</span>
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={`${aria}: ${name}`}
          className="absolute inset-0 m-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <figcaption className="mt-3 text-[14px] font-medium">{name}</figcaption>
    </figure>
  );
}
