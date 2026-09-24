import type { Metadata } from 'next';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { MiauCase } from '@/components/MiauCase';
import { miauCopy } from '@/content/miau-atelier';

export const metadata: Metadata = {
  title: miauCopy.en.meta.title,
  description: miauCopy.en.meta.description,
  openGraph: { title: miauCopy.en.meta.title, description: miauCopy.en.meta.description, images: ['/assets/miau-atelier/site-product.webp'] },
  alternates: { languages: { 'pt-BR': '/cases/miau-atelier/', en: '/en/cases/miau-atelier/' } },
};

export default function Page() {
  return (
    <>
      <Header locale="en" currentPath="/cases/miau-atelier/" />
      <MiauCase locale="en" />
      <Footer locale="en" />
    </>
  );
}
