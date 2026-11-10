# Vännfäder — sitio estático

Seis páginas en HTML y CSS planos, responsive, sin librerías:
`index.html`, `okuma/`, `muyunafest/`, `challwua/`, `madremelipona/`, `nosotros/`.

## Probarlo
Abre `index.html` con doble clic (Chrome). Necesita internet porque las imágenes y dos fuentes aún se cargan desde el CDN de Readymag.

## Publicarlo gratis en GitHub Pages
1. Crea un repositorio nuevo en tu cuenta (por ejemplo `vannfader-web`).
2. Sube el contenido de esta carpeta, incluido `.nojekyll`.
3. En el repositorio: Settings → Pages → Branch `main` / carpeta raíz → Save.
4. Quedará en `https://vannfader.github.io/vannfader-web/` y los enlaces ya son relativos, así que funciona en esa ruta.
5. Para usar un subdominio (por ejemplo `lab.vannfader.com`): en Settings → Pages escribe el dominio y, en el DNS de vannfader.com, crea un registro CNAME de `lab` hacia `vannfader.github.io`.
   No cambies el registro del dominio principal mientras la web de Readymag siga publicada ahí.

## Fuentes
- **Rhymes Text** (textos de apertura y títulos): hoy se carga del CDN de Readymag. Para independizarte, descarga los dos .woff2 y guárdalos como `fonts/RhymesText-Regular.woff2` y `fonts/RhymesText-Italic.woff2`.
- **Shippori** (etiquetas): igual, `fonts/Shippori.woff`. Como respaldo carga Shippori Antique de Google Fonts.
- **Neue Haas Unica** (cuerpo): es de Adobe Fonts y no se puede alojar aquí. Crea un proyecto web en Adobe Fonts con tu dominio y pega el `<link>` que te da en el `<head>` de cada página. Sin eso, se ve con Helvetica/Arial.

## Pendiente (a propósito)
- Videos: las cajas vacías de la home, de las páginas de proyecto y el fondo de Nosotros son los lugares de los videos. En Readymag son streams HLS; hay que exportarlos como .mp4.
- Animaciones: texto que cambia en el inicio, revelados al hacer scroll, transiciones. No están.
- Logo: el de la barra es una aproximación (círculo y cuadrado) y el "vännfäder" del pie es texto, no el SVG original.
- Las imágenes se cargan del CDN de Readymag. Si borras el proyecto allá, se rompen: descárgalas a una carpeta `img/` antes.

## Cosas del texto original que conviene revisar
- Inicio, tarjeta de Muyuna Fest: "ll primer festival" (debería ser "el").
- Inicio: "una estudio" (debería ser "un estudio"), "díalogos", "The Washingtong Times".
- Las páginas de Okuma, Muyuna Fest y Madre Melipona repiten textos de La Napoquiteña (Challwua) y pies de foto de "Psicoselva". Están copiados tal cual.
- Nosotros: "Dibujamos a mano cuando la marca lo pide,." (coma y punto juntos).
