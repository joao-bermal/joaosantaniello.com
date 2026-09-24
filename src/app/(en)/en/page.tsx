import type { Metadata } from 'next';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { HomePage } from '@/components/HomePage';
import { home } from '@/content/site';

export const metadata: Metadata = {
  title: { absolute: home.en.meta.title },
  description: home.en.meta.description,
  openGraph: { title: home.en.meta.title, description: home.en.meta.description, locale: 'en_US', type: 'website' },
};

export default function Page() {
  return (
    <>
      <Header locale="en" />
      <HomePage locale="en" />
      <Footer locale="en" />
    </>
  );
}
