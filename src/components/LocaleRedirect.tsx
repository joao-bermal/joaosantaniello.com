import { LOCALE_COOKIE } from '@/content/site';

/**
 * Sends first-time visitors whose browser is not in Portuguese to /en/.
 * Runs inline, before the page paints. Mirrors the vercel.json rule so it also works
 * locally and on any static host. Skipped when the visitor already chose a language
 * (cookie set by LanguageSwitch) and for crawlers and link-preview bots.
 */
const script = `(function(){try{
if(document.cookie.split('; ').some(function(c){return c.indexOf('${LOCALE_COOKIE}=')===0}))return;
if(/bot|crawl|spider|slurp|preview|facebookexternalhit|whatsapp|linkedin|telegram|discord|embedly|lighthouse/i.test(navigator.userAgent))return;
var l=((navigator.languages&&navigator.languages[0])||navigator.language||'').toLowerCase();
if(l&&l.indexOf('pt')!==0)location.replace('/en/'+location.hash);
}catch(e){}})();`;

export function LocaleRedirect() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
