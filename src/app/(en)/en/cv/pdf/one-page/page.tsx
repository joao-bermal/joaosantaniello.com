import type { Metadata } from 'next';

import { ResumeDocument } from '@/components/ResumeDocument';

// Print source for scripts/build-cv.py. Not linked anywhere and kept out of search.
export const metadata: Metadata = { title: 'CV', robots: { index: false, follow: false } };

export default function Page() {
  return (
    <main className="cv-print">
      <ResumeDocument locale="en" variant="onePage" />
    </main>
  );
}
