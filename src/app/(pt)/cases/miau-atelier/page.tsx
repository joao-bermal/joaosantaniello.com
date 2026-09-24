import type { Metadata } from 'next';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { MiauCase } from '@/components/MiauCase';
import { miauCopy } from '@/content/miau-atelier';

export const metadata: Metadata = {
  title: miauCopy.pt.meta.title,
  description: miauCopy.pt.meta.description,
  openGraph: { title: miauCopy.pt.meta.title, description: miauCopy.pt.meta.description, images: ['/assets/miau-atelier/site-product.webp'] },
  alternates: { languages: { 'pt-BR': '/cases/miau-atelier/', en: '/en/cases/miau-atelier/' } },
};

export default function Page() {
  return (
    <>
      <Header locale="pt" currentPath="/cases/miau-atelier/" />
      <MiauCase locale="pt" />
      <Footer locale="pt" />
    </>
  );
}
