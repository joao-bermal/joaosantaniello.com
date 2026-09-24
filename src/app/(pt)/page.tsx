import type { Metadata } from 'next';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { HomePage } from '@/components/HomePage';
import { home } from '@/content/site';

export const metadata: Metadata = {
  title: { absolute: home.pt.meta.title },
  description: home.pt.meta.description,
  openGraph: { title: home.pt.meta.title, description: home.pt.meta.description, locale: 'pt_BR', type: 'website' },
};

export default function Page() {
  return (
    <>
      <Header locale="pt" />
      <HomePage locale="pt" />
      <Footer locale="pt" />
    </>
  );
}
