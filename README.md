# MotorGarage JCP — v1.9

Web React + Vite para lubricentro y mecánica ligera en José C. Paz, Buenos Aires.

## Ejecutar

```powershell
npm.cmd install
npm.cmd run dev
```

## Compilar

```powershell
npm.cmd run build
```

## SEO local

- Título SEO y descripción enfocados en taller mecánico, lubricentro y José C. Paz.
- H1 visible con MotorGarage JCP y la actividad.
- Open Graph, favicon, datos estructurados AutoRepair sin dirección particular.
- `robots.txt` incluido.
- El `sitemap.xml`, la etiqueta canonical y la URL Open Graph se generan **solo cuando se configure SITE_URL** con la dirección pública definitiva.

Ejemplo en PowerShell, después de publicar y conocer el dominio:

```powershell
$env:SITE_URL = "https://TU-SUBDOMINIO.pages.dev"
npm.cmd run build
```

En Cloudflare Pages, configurar la variable de entorno `SITE_URL` con la URL definitiva y usar `npm run build`, directorio `dist`. No publicar una URL inventada o temporal como canonical. Si cambiás el dominio, actualizar la variable y volver a desplegar.

## Contacto

El WhatsApp Business se configura en `src/data/site.js`. Facebook permanece pendiente. No se publica la dirección particular.

## Publicación

Cloudflare Pages: comando de compilación `npm run build`, directorio de salida `dist`. Conectar GitHub para despliegues automáticos. Después de publicar, registrar la URL en Google Search Console y enviar `/sitemap.xml` (si se configuró SITE_URL).

El SEO técnico no garantiza posiciones ni indexación inmediata. Las imágenes ilustrativas remotas pueden requerir revisión de licencias antes de publicar comercialmente.
