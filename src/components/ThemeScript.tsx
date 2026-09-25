export const THEME_KEY = 'site-theme';

/**
 * Sets <html data-theme> before the page paints: the visitor's saved choice, otherwise
 * light (the default theme, regardless of the system setting). Rendered in <head> by both root layouts.
 */
export function ThemeScript() {
  const script = `(function(){try{var t=localStorage.getItem('${THEME_KEY}');if(t!=='dark')t='light';document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='light';}})();`;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
