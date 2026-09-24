import type { Metadata } from 'next';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { SupportPage } from '@/components/SupportPage';
import { support } from '@/content/support';

export const metadata: Metadata = {
  title: { absolute: support.meta.title },
  description: support.meta.description,
};

export default function Page() {
  // Portuguese only: the language switch goes to the English home.
  return (
    <>
      <Header locale="pt" currentPath="/" />
      <SupportPage />
      <Footer locale="pt" />
    </>
  );
}
