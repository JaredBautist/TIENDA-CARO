# CABAK — Validación SEO: fases A y continuación B

**Fecha:** 22/10/2026. **Resultado actual:** fase A verificada localmente y SEO de ocho colecciones y Contacto aplicado y verificado en Admin. Sin push ni publicación del tema; tienda protegida. La vista previa usa el tema de desarrollo y `http://127.0.0.1:9292`.

Las pruebas de la fase A que siguen son el registro anterior a las mutaciones de la continuación B; su evidencia adicional aparece al final.

## Prueba antes de corregir

`node capture/validate-cabak-seo.cjs` falló contra la línea base:

```text
AssertionError: /: one primary heading in main
0 !== 1
```

El H1 existente era el nombre genérico oculto en la cabecera. La línea base también registró sufijo “My Store”, descripción de inicio ausente y Organization sin logo y con URL myshopify.

## Resultado después

| Prueba | Resultado y alcance |
|---|---|
| `node capture/validate-cabak-seo.cjs` | PASS: 12 rutas (inicio, 8 colecciones, producto existente, Contacto, búsqueda). Un H1 en main y en el documento, título único, canonical correcto, identidad Organization coherente, imagen social y descripción de inicio. |
| Datos del producto | El objeto Product JSON-LD renderizado coincide exactamente con el de la línea base; precio, marca y stock no fueron alterados. Esto conserva también el proveedor pendiente de revisión. |
| Responsive | Inicio, colección, producto, Contacto y búsqueda revisados a 320, 390, 768 y 1440 px; sin overflow. Geometría del titular de inicio igual a la base con tolerancia inferior a 1 px. |
| Comparación visual | Capturas de colección y Contacto idénticas a 390/1440 px. Búsqueda idéntica a 390 px; a 1440 px la diferencia se limita a la imagen de producto por carga, no al encabezado. Revisión visual de inicio móvil, búsqueda escritorio e imagen social. |
| Sin JavaScript | H1 y ocho enlaces de categorías presentes. |
| Teclado/movimiento reducido | Enlace de campaña enfocable y pruebas realizadas con movimiento reducido. La regresión de movimiento cubre también animación normal. |
| `node capture/validate-mobile-header.cjs` | PASS en 320, 390, 430, 610 y 749 px, modos native y drawer. |
| `node capture/validate-cabak-motion.cjs` | PASS en 320, 390, 430, 768, 1024 y 1440 px; foco, animación una vez, movimiento reducido, ciclo del editor, etiquetas y no-JS. |
| Fixtures Liquid | PASS: seis estados de campaña; prioridad de nombre/descripción/imagen de Admin; escape de texto; colección vacía sin descripción artificial; tres estados de logo. |
| Shopify Theme Check | 0 errores y 6 advertencias: 42 ajustes de header frente al umbral 40 y cinco parámetros de divider no utilizados. Esos ajustes y parámetros no se cambiaron. |
| Sintaxis y diff | `node --check` de ambos nuevos validadores y `git diff --check` sin errores. |
| Borradores | Diez rutas únicas; títulos <=70 y descripciones <=320 caracteres; JSON y documento legible coinciden. En esa prueba de fase A todavía eran borradores; ver aplicación de B al final. |

## Evidencias y reproducción

Capturas y reportes de esta sesión: `/tmp/cabak-seo/` (temporales, no versionados).

- `baseline.json`, `after.json`: resultados de las páginas antes/después.
- `before-*.png`, `after-*.png`: capturas a cuatro anchos.
- `theme-check-final.json`: informe Theme Check.
- `public-state.json`: resultados de solicitudes anónimas al dominio y recursos.

Las pruebas de navegador requieren Shopify CLI activo y Playwright. Los validadores siguen la ruta de Playwright usada por las pruebas existentes; puede cambiarse con `PLAYWRIGHT_MODULE`. El origen se configura con `SEO_PREVIEW_ORIGIN`. Si cambia el producto de prueba, usar `SEO_PRODUCT_PATH` y capturar una nueva línea base.

Los casos que no existen en el catálogo se probaron con LiquidJS 10.30.0 instalado únicamente en `/tmp`, sin dependencias nuevas del tema:

```sh
npm install --prefix /tmp/cabak-seo/fixtures --no-package-lock --ignore-scripts liquidjs@10.30.0
LIQUIDJS_MODULE=/tmp/cabak-seo/fixtures/node_modules/liquidjs node capture/validate-cabak-seo-fixtures.cjs
```

Los filtros de imágenes/CDN de esos fixtures son adaptadores de prueba; no sustituyen el render de Shopify. La salida Shopify real sí fue comprobada para la configuración actual.

## Entregables para revisar

- Código: H1 de campaña/búsqueda, identidad compartida, metadatos y Organization.
- `metadata.md` y `metadata.json`: inicio, ocho colecciones y Contacto.
- `product-template.md`: requisitos editoriales y datos de cada ficha.
- `assets/cabak-social-card.png`: 1200×630, aproximadamente 58 KB; composición del logo original con fondo #F2ECE4. Fuente reproducible: `social-card.html`, captura de navegador a 1200×630 y escala 1.
- `search-test-matrix.md` y `launch-checklist.md`: pendientes y pruebas futuras.

## Pendientes que no cuentan como aprobados

- Colecciones y Contacto ya tienen metadatos guardados y verificados. La descripción administrativa de inicio sigue vacía; el respaldo del tema se comprobó en la vista previa.
- El nombre administrativo y el proveedor “My Store” siguen pendientes; el respaldo del tema no cambia esos datos.
- La imagen social elegida actualmente en Admin tiene prioridad sobre el nuevo respaldo. Sustituirla por el PNG preparado si se aprueba.
- Siete colecciones vacías y producto existente agotado; no se confirmó una compra.
- Búsqueda predictiva, sinónimos, pasarelas, políticas, medición, datos de campo y rendimiento de producción pertenecen a fases posteriores.
- Sitio público protegido; sitemap respondió 404. Revalidar tras la apertura antes de enviarlo a Search Console.
- No se ejecutó Rich Results Test público ni se solicitó indexación. JSON válido no equivale a elegibilidad garantizada en Google.

La fase A no introduce JavaScript ni librerías en el storefront. El nuevo PNG se referencia en metadatos como respaldo y no añade una imagen visible a la página. No se promete una mejora numérica de velocidad sin medición de producción.


## Continuación B — Contenido guardado en Shopify Admin

**Autorización:** continuación solicitada tras revisar el mapa de palabras clave. Contrato: `design.md`, sección Phase B. Solo se enviaron los campos definidos allí.

### Cambios y evidencia

- Las ocho colecciones recibieron título SEO, meta descripción e introducción visible de una frase. Los nombres del menú y handles se conservaron.
- La página `contact` recibió título `Contacto` y los campos SEO `global.title_tag` y `global.description_tag`. Se conservaron cuerpo, plantilla y estado de publicación.
- Los borradores se ajustaron para no prometer tallas, medidas, composición, stock ni guías todavía no cargadas. Se mantuvieron las familias de términos: enterizos, sets/conjuntos, faldas, shorts/pantalones cortos, licras/leggings, tops, bolsos y medias.
- Los nueve resultados de mutación devolvieron `userErrors: []`. Una consulta independiente confirmó igualdad exacta con `metadata.json`.
- Copias de datos antes y después: `admin-before.json` y `admin-after.json`. No contienen credenciales. Git no revierte estos cambios; seguir el procedimiento de rollback de `design.md`.
- Se comprobaron invariantes: IDs, handles, nombres de las colecciones, cantidades de productos, datos de la colección `frontpage`, cuerpo/plantilla/publicación de Contacto y datos de tienda sin cambios.

### Pruebas de aceptación de esta continuación

| Prueba | Evidencia |
|---|---|
| Antes de escribir en Admin | El validador ampliado falló en `/collections/enterizos`: `Enterizos – CABAK Activewear` no coincidía con el título SEO esperado. |
| Después de escribir y leer de nuevo | `node capture/validate-cabak-seo.cjs`: PASS en 12 rutas. Se verifican títulos exactos sin sufijo repetido, una meta descripción exacta por página intervenida, introducciones visibles y nombres de colección conservados. |
| Regresión del tema | El mismo recorrido confirmó canonical, Organization, datos Product idénticos a la línea base, cuatro anchos (320/390/768/1440), navegación sin JavaScript y foco. |
| Revisión visual | Captura de Enterizos a 390 px: introducción legible, controles separados y estado vacío conservado. Las pruebas de geometría no detectaron overflow en las rutas y anchos revisados. |
| Protección pública | Solicitud anónima a `https://cabak.co` terminó en `https://cabak.co/password`, HTTP 200. No se retiró la contraseña. |

Las capturas y `after.json` en `/tmp/cabak-seo/` ahora reflejan esta continuación. No se modificó Liquid, CSS ni JavaScript del storefront en B; solo contenido Admin, documentación y el validador existente. No se repitió Theme Check porque no hubo nuevo cambio de código de tema respecto al resultado de A.

### Trabajo que sigue pendiente

- Guardar la descripción de inicio en Preferencias y elegir la imagen social preparada; no se usó una API no documentada para esos ajustes. El nombre administrativo sigue siendo “My Store”.
- Cargar y revisar productos reales: siete colecciones siguen vacías y el producto existente continúa agotado. Ninguna prueba aquí certifica compra ni lanzamiento.
- Probar sinónimos y errores de escritura con catálogo representativo; no se añadieron faltas al contenido ni se configuró Search & Discovery.
- Pasarelas, envíos, políticas, medición, publicación e indexación conservan sus dependencias y autorizaciones separadas.
