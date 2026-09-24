import type { ReactNode } from 'react';

import { cx } from './ui';

export function BrowserFrame({ url, children, scroll, className }: { url: string; children: ReactNode; scroll?: string; className?: string }) {
  return (
    <div className={cx('overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_40px_80px_-50px_rgba(20,22,26,0.45)]', className)}>
      <div className="flex items-center gap-2 border-b border-line bg-paper-2 px-4 py-3">
        <i className="h-2.5 w-2.5 rounded-full bg-[#d9d6ce]" />
        <i className="h-2.5 w-2.5 rounded-full bg-[#d9d6ce]" />
        <i className="h-2.5 w-2.5 rounded-full bg-[#d9d6ce]" />
        <span className="ml-3 truncate text-[12.5px] text-muted">{url}</span>
      </div>
      <div className={cx(scroll && 'overflow-y-auto')} style={scroll ? { maxHeight: scroll } : undefined}>
        {children}
      </div>
    </div>
  );
}
