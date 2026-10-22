# CABAK — Auditoría de la fase A

Fecha: 22/10/2026. Fuente: tema local en `3af0126`, vista previa Shopify CLI y lecturas del MCP de Shopify. No se ejecutaron mutaciones del administrador.

## Hallazgos y resolución

| Prioridad | Evidencia anterior | Resultado local / pendiente |
|---|---|---|
| P1 | Inicio: H1 oculto “My Store” en header; cero H1 en main | El titular visible existente es ahora el único H1, sin cambiar el texto. Estados sin fotografía, con fotografía y sin bloques cubiertos. |
| P1 | Búsqueda: título principal H3 y cero H1 | H1 semántico, conservando el estilo configurado del bloque. |
| P1 | Todas las rutas añadían “My Store” al título | Respaldo CABAK Activewear cuando el nombre de Admin está vacío o conserva ese placeholder. Un nombre configurado tiene prioridad. |
| P1 | Inicio sin meta descripción; título de Admin ya correcto antes del cambio | Descripción de inicio como respaldo local. No se reemplaza una descripción explícita del administrador. |
| P1 | Organization sin logo y con URL myshopify variable según página | Una sola entidad, URL estable tomada de shop.url, identificador estable, logo y perfiles oficiales. |
| P1 | Product usa generación nativa; proveedor actual “My Store” | JSON-LD de Product intacto. Corregir proveedor desde los datos reales de producto, no desde el tema. |
| P2 | Imagen social global muestra el logo sin composición horizontal con márgenes | PNG 1200×630 preparado. Es respaldo si no hay page_image; la imagen elegida en Admin sigue ganando y requiere sustitución manual posterior si se aprueba. |
| P2 | Primera etiqueta og:image usaba http | Ahora usa HTTPS. El proxy local puede convertir URLs de CDN en rutas relativas; fixtures cubren la salida absoluta fuera del proxy. |
| P1 | Ocho colecciones responden 200; siete sin productos | Textos propios listos para revisión. No se modificaron colecciones ni se ocultaron URLs. |
| P1 | Contacto tiene H1 correcto, pero título Admin “Contact” y sin meta descripción | Propuesta en metadata.md; no se parchea ese contenido en Liquid. |

## Estado remoto confirmado

- Dominio del shop: `cabak.co`; moneda COP; plan Basic. Nombre administrativo todavía “My Store”.
- Un producto: `medias-nike`, activo, inventario registrado 0, proveedor “My Store”; vista previa agotada.
- Medias contiene ese producto. Enterizos, Sets deportivos, Faldas, Shorts, Licras largas, Tops y Bolsos tienen contador 0. Existe además la colección interna Home page.
- HTTP, www y myshopify llegan a `https://cabak.co/password`. La tienda sigue protegida.
- `robots.txt` responde 200. `sitemap.xml` respondió 404 en la consulta pública de hoy: queda como comprobación obligatoria después de abrir la tienda. No se alteró robots ni se creó un sitemap sustituto, y no se atribuye la causa del 404 sin verificarla.

## Límites

No se comprobó compra, activación de pasarelas, entrega de correo, Search Console, Merchant Center ni relevancia predictiva. No se obtuvieron datos de tráfico/volumen para escoger palabras clave. No se cambió el correo administrativo ni el proveedor del artículo; el correo público del footer sigue siendo el aprobado.

La presencia y validez JSON local no equivalen a aprobación de resultados enriquecidos de Google. Rich Results Test de la tienda pública queda pendiente por el acceso protegido. No se añadieron reseñas, disponibilidad inventada, políticas de devolución o datos fiscales.

Fuentes de implementación: [Organization](https://developers.google.com/search/docs/appearance/structured-data/organization), [structured_data de Shopify](https://shopify.dev/docs/api/liquid/filters/structured_data), [canonical_url](https://shopify.dev/docs/api/liquid/objects/canonical_url). Más referencias y alcance en plan.md.
