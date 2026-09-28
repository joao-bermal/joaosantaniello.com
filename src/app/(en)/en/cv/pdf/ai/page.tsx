import type { Metadata } from 'next';

import { ResumeDocument } from '@/components/ResumeDocument';
import { resumeAI } from '@/content/resume-ai';

// Tailored print source (AI Product Engineer roles) for scripts/build-cv.py. Not linked and kept out of search.
export const metadata: Metadata = { title: 'CV', robots: { index: false, follow: false } };

export default function Page() {
  return (
    <main className="cv-print theme-light">
      <ResumeDocument locale="en" variant="full" data={resumeAI} />
    </main>
  );
}
