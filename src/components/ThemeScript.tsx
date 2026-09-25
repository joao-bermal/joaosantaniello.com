export const THEME_KEY = 'site-theme';

/**
 * Sets <html data-theme> before the page paints: the visitor's saved choice, otherwise
 * the system preference. Rendered in <head> by both root layouts.
 */
export function ThemeScript() {
  const script = `(function(){try{var t=localStorage.getItem('${THEME_KEY}');if(t!=='light'&&t!=='dark')t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='light';}})();`;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
