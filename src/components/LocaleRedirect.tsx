import { LOCALE_COOKIE } from '@/content/site';

/**
 * Local and preview fallback for the vercel.json language rule: sends visitors with no
 * Portuguese at all in their browser languages to /en/. On the production hosts the
 * edge rule already decided (it also knows the visitor's country), so this does nothing
 * there. Skipped when the visitor already chose a language and for crawlers.
 */
const script = `(function(){try{
if(document.cookie.split('; ').some(function(c){return c.indexOf('${LOCALE_COOKIE}=')===0}))return;
if(/bot|crawl|spider|slurp|preview|facebookexternalhit|whatsapp|linkedin|telegram|discord|embedly|lighthouse/i.test(navigator.userAgent))return;
if(/(^|\\.)joaosantaniello\\.com$|\\.vercel\\.app$/.test(location.hostname))return;
var ls=(navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||'']).map(function(x){return String(x).toLowerCase()});
if(ls[0]&&!ls.some(function(x){return x.indexOf('pt')===0}))location.replace('/en/'+location.hash);
}catch(e){}})();`;

export function LocaleRedirect() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
