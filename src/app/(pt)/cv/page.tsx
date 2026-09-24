import type { Metadata } from 'next';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { ResumePage } from '@/components/ResumePage';
import { resume } from '@/content/resume';

const t = resume.pt.meta;

export const metadata: Metadata = {
  title: t.title,
  description: t.description,
  alternates: { languages: { 'pt-BR': '/cv/', en: '/en/cv/' } },
};

export default function Page() {
  return (
    <>
      <Header locale="pt" currentPath="/cv/" />
      <ResumePage locale="pt" />
      <Footer locale="pt" />
    </>
  );
}
