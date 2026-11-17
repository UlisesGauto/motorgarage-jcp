import { readFileSync, writeFileSync, existsSync } from 'node:fs';
const raw = process.env.SITE_URL?.trim();
if (!raw) {
  console.log('SITE_URL sin configurar: se omiten canonical y sitemap hasta tener URL pública.');
  process.exit(0);
}
let url;
try {
  url = new URL(raw);
  if (url.protocol !== 'https:' || url.pathname !== '/' || url.search || url.hash) throw new Error('Se requiere URL HTTPS de origen sin ruta');
} catch {
  console.error('SITE_URL inválida. Ejemplo: https://motorgarage-jcp.pages.dev');
  process.exit(1);
}
const origin = url.origin;
const file = 'dist/index.html';
if (!existsSync(file)) throw new Error('Ejecutá vite build antes de postbuild');
let html = readFileSync(file, 'utf8');
const escaped = origin.replaceAll('&','&amp;').replaceAll('"','&quot;');
html = html.replace('</head>', `  <link rel="canonical" href="${escaped}/" />
  <meta property="og:url" content="${escaped}/" />
  <meta property="og:image" content="${escaped}/images/logo-mg.webp" />
</head>`);
// Evitar dos etiquetas og:image en la versión final
html = html.replace('<meta property="og:image" content="/images/logo-mg.webp" />', '');
writeFileSync(file, html);
writeFileSync('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${origin}/</loc></url></urlset>
`);
writeFileSync('dist/robots.txt', `User-agent: *
Allow: /
Sitemap: ${origin}/sitemap.xml
`);
console.log('SEO publicado para', origin);
