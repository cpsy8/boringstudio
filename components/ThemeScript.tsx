// Pre-paint theme application. Rendered as the first child of <body> so the
// saved theme is set before first paint (no flash of incorrect theme).
export default function ThemeScript() {
  const js = `(function(){try{if(localStorage.getItem('bs-site-dark')==='1'){document.body.classList.add('dark');}}catch(e){}})();`;
  return <script dangerouslySetInnerHTML={{ __html: js }} />;
}
