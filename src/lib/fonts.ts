import { Fraunces, IBM_Plex_Sans, Montserrat, Playfair_Display } from 'next/font/google';

export const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces', display: 'swap' });
export const plex = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-plex', display: 'swap' });

// Miau Atelier brand fonts, used inside the case study.
export const playfair = Playfair_Display({ subsets: ['latin'], style: ['normal', 'italic'], variable: '--font-playfair', display: 'swap' });
export const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-montserrat', display: 'swap' });

export const fontVariables = [fraunces.variable, plex.variable, playfair.variable, montserrat.variable].join(' ');
