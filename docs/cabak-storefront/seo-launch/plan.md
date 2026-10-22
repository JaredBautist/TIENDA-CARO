# CABAK — Plan SEO y preparación del lanzamiento

**Estado:** aprobado el 22/10/2026. Fase A verificada en vista previa; SEO e introducciones de ocho colecciones y Contacto aplicados en Admin. Catálogo, push y publicación pendientes.

**Fecha:** 21 de octubre de 2026.

**Base revisada:** commit `3af0126`, tema local Horizon personalizado.

**Objetivo:** que las personas encuentren CABAK y sus productos, entiendan la oferta y puedan comprar sin obstáculos. No se prometen posiciones, plazos de indexación ni porcentajes de ventas.

## 1. Alcance y límites

Preparar el SEO técnico, el contenido de inicio y colecciones, una plantilla para fichas de producto, la búsqueda interna y un procedimiento de lanzamiento y medición.

Se mantienen colores, tipografía, logos, diseño aprobado, navegación y comportamiento móvil. Los ajustes semánticos no deben cambiar la apariencia. No se restaurarán las pestañas ni las migas de navegación que se retiraron. No se copiarán fotografías ni textos de otras tiendas.

La aprobación inicial del 22/10/2026 habilitó la fase A y los borradores de B. La continuación posterior autoriza aplicar los textos revisados de colecciones y Contacto en Admin, con copia anterior y verificación; ver el contrato ampliado en design.md. Configuración de aplicaciones, publicación y envío a Google quedan fuera de esta ejecución. No incluye activar pasarelas, tramitar documentación empresarial, comprar servicios, lanzar anuncios ni enviar comunicaciones.

## 2. Auditoría preliminar: evidencia y límites

| Observación | Evidencia | Implicación |
|---|---|---|
| El dominio responde y redirige a la página de contraseña | Consulta HTTP a `https://cabak.co`: 302 a `/password` | Podemos preparar y probar; el catálogo no es accesible públicamente para Google todavía. No se retirará la contraseña en esta fase. |
| Ya existen título, descripción condicional, canonical y etiquetas sociales | `snippets/meta-tags.liquid` | Revisar valores renderizados; no duplicar etiquetas. |
| El título añade el nombre de la tienda cuando no lo encuentra en `page_title` | `snippets/meta-tags.liquid` | Comprobar nombre de tienda y títulos finales para evitar sufijos incorrectos o repetidos. La captura previa mostraba “My Store”; su estado actual no está confirmado. |
| El texto principal del inicio está marcado como `span` | `sections/cabak-campaign.liquid:22`, utilizado en `templates/index.json` | Proponer un H1 principal estable, preservando estilo, enlace y animación; no convertir cada diapositiva en H1. |
| Las colecciones ya tienen H1 y admiten descripción | `sections/cabak-collection-header.liquid` | Completar textos desde Shopify; evitar grandes bloques que empujen el catálogo hacia abajo. |
| Hay ocho rutas documentadas | `docs/cabak-storefront/category-pages/collections.json` | Conservar los handles existentes; verificar respuesta y contenido actual antes de editar. El registro local no prueba el estado remoto actual. |
| Ya existe JSON-LD de Organization y generación nativa de Product | `sections/header.liquid`, `sections/product-information.liquid` y secciones de productos destacados | Validar con productos reales antes de añadir marcado. No afirmar que falta schema ni duplicarlo. |
| El buscador usa la ruta predictiva de Shopify | `assets/predictive-search.js` | Priorizar funciones nativas y Search & Discovery antes de construir un motor propio. |
| Hay plantillas con estados vacíos y sustitutos visuales | `snippets/product-grid.liquid`, `snippets/card-gallery.liquid` | Verificar que el lanzamiento muestre productos reales; no tratar placeholders como inventario. |

**Todavía no verificado:** contenido del catálogo en administración, metadatos guardados recientemente, dominio principal y variantes, Search Console, Search & Discovery, métricas de tráfico, sitemap público completo, HTML renderizado de productos, políticas y compra real. Esta es una auditoría preliminar de código y acceso HTTP, no una certificación de producción.

## 3. Requisitos y criterios de aceptación

| ID | Cuando… | El sistema deberá… | Prueba |
|---|---|---|---|
| SEO-01 | Se renderice inicio, colección o producto | Mostrar un título y una descripción pertinentes, un canonical coherente y un H1 principal identificable | Inspeccionar HTML renderizado de cada tipo de página; comprobar ausencia de duplicados |
| SEO-02 | Se cambie la semántica del inicio | Conservar apariencia, enlaces y animaciones; no crear un H1 por diapositiva | Comparación visual y navegación por teclado |
| SEO-03 | Se abra una colección lista para vender | Mostrar nombre y texto propio, enlaces navegables y productos pertinentes | Revisar las ocho colecciones con el catálogo final |
| SEO-04 | Se publique una ficha de producto | Mostrar datos reales y consistentes de precio, moneda, disponibilidad, variantes, imágenes y descripción | Contrastar ficha, variantes, JSON-LD y carrito |
| SEO-05 | Se busque un sinónimo aprobado | Permitir encontrar productos pertinentes en los modos donde Shopify lo soporte | Matriz de búsquedas completas y predictivas con productos reales |
| SEO-06 | Una búsqueda contenga un error común | Evaluar la tolerancia nativa y registrar resultados y límites, sin garantizar cualquier falta ortográfica | Probar consultas acordadas; si fallan, proponer una solución específica antes de añadir código |
| SEO-07 | Se comparta un enlace | Ofrecer metadatos coherentes y una imagen de marca o producto sin recortes indeseados | Inspección de OG y vista previa en herramientas de las plataformas |
| SEO-08 | Se autorice el lanzamiento | Permitir acceso público a páginas vendibles, con HTTPS y redirecciones coherentes | Verificar sin sesión, robots, sitemap, canonical y estados HTTP |
| SEO-09 | Se mida una compra | Registrar el evento correspondiente sin duplicarlo y respetar la configuración de consentimiento aplicable | Prueba de compra y revisión de eventos; excluir pedidos de prueba del análisis comercial |

## 4. Diseño propuesto y decisiones

### Fuente de datos y responsabilidades

- **Shopify Admin:** productos, colecciones, metadatos SEO, dominio, políticas y datos comerciales. No fijar precios ni inventario en el tema.
- **Tema Liquid:** estructura HTML, presentación, enlaces, etiquetas y marcado generado con datos reales.
- **Search & Discovery:** sinónimos y ajustes de búsqueda que estén disponibles para la tienda.
- **Search Console:** propiedad, descubrimiento, indexación y consultas de Google.
- **Analítica de Shopify y, si se aprueba, GA4:** embudo de compra y resultados. Revisar integraciones existentes antes de conectar otra.

### Decisiones breves

| Decisión | Alternativa considerada | Motivo y consecuencia |
|---|---|---|
| Mejorar el SEO existente de Horizon | Añadir una app SEO general o un segundo bloque de meta tags | Menos duplicación y dependencia. Una app solo se propondrá si resuelve una carencia comprobada. |
| Usar búsqueda nativa primero | Añadir búsqueda difusa personalizada en JavaScript | Shopify ya ofrece tolerancia a errores; se prueba antes de aumentar peso y mantenimiento. No equivale a controlar las correcciones de Google. |
| Una ruta principal por categoría | Crear páginas para cada sinónimo o falta de escritura | Evita páginas repetitivas y mantenimiento innecesario. Los sinónimos se incorporan naturalmente donde corresponda. |
| Aprovechar el JSON-LD nativo | Añadir otro Product schema manual | Reduce contradicciones de precio y disponibilidad. Las carencias se corrigen después de validar el marcado real. |
| Preparar ahora y abrir tras las pruebas | Retirar la contraseña para indexar un catálogo incompleto | Permite terminar pagos y productos sin presentar una compra incompleta. La indexación comienza después de habilitar el acceso público. |

## 5. Trabajo por fases y dependencias

### Fase A — Base técnica y contenido que podemos adelantar

**Prioridad P1. Dependencia: aprobación del plan.**

1. Capturar una línea base de inicio, colección, producto si existe, contacto y búsqueda en escritorio y móvil.
2. Revisar nombres, títulos, descripciones, idioma, enlaces, canonical, etiquetas sociales y encabezados. Corregir solo problemas demostrados.
3. Definir el H1 del inicio conservando el diseño. Propuesta de texto SEO: “Ropa deportiva para mujer”; conservar o ajustar el texto visible solo con revisión del usuario.
4. Preparar una matriz de títulos y descripciones para inicio y ocho colecciones.
5. Preparar una imagen social con logo completo, fondo de marca y margen suficiente. Preferir composición de los assets originales, sin regenerar el logo.
6. Revisar datos de Organization: nombre, URL estable de inicio, logo y perfiles oficiales. Validar antes de extender el JSON-LD.
7. Revisar enlaces de navegación reales para que las colecciones y los productos no dependan exclusivamente del buscador.

**Entrega:** correcciones locales, matriz de metadatos y evidencia de validación. Sin publicación ni push hasta autorización.

### Fase B — Colecciones y catálogo

**Prioridad P1. Dependencia: información real de productos; borradores posibles desde ahora.**

Mapa inicial de intención, no estudio de volumen de búsqueda:

| Colección / ruta existente | Enfoque propuesto | Variantes naturales por validar |
|---|---|---|
| `/collections/enterizos` | Enterizos deportivos para mujer | Enterizos para entrenar |
| `/collections/sets-deportivos` | Sets deportivos para mujer | Conjuntos deportivos |
| `/collections/faldas` | Faldas deportivas | Faldas para entrenar, solo si el producto corresponde |
| `/collections/shorts` | Shorts deportivos para mujer | Pantalones cortos deportivos |
| `/collections/licras-largas` | Licras largas deportivas | Leggings deportivos |
| `/collections/tops` | Tops deportivos para mujer | No equiparar automáticamente con brasieres de alto soporte |
| `/collections/bolsos` | Bolsos de CABAK | “Bolsos deportivos” únicamente si describe el catálogo |
| `/collections/medias` | Medias de CABAK | “Medias deportivas” según el producto |

- Inicio cubre la marca y la oferta general; cada colección cubre su categoría; cada producto cubre modelo y características verificadas.
- Redactar introducciones breves, útiles y distintas. No imponer un mínimo de palabras ni rellenar con términos repetidos.
- Plantilla por producto: nombre, tipo, uso, material/composición, ajuste, tallas y medidas, colores, cuidados, precio, disponibilidad, fotografías propias y alt descriptivo. SKU/GTIN cuando existan; nunca inventarlos.
- Evitar afirmaciones como “no transparenta”, “compresión”, “antibacterial”, “fabricado en Colombia” o “envíos nacionales” sin confirmación.
- Productos temporalmente agotados conservan su URL y disponibilidad correcta. No eliminar automáticamente por falta de stock.
- Colecciones aún sin oferta: decidir por categoría si siguen visibles, se completan o se retiran temporalmente del menú; sin borrado masivo ni noindex general.

**Entrega:** textos para revisión, ficha modelo y catálogo revisado antes del lanzamiento.

### Fase C — Sinónimos y errores de escritura

**Prioridad P2. Dependencia: catálogo cargado y acceso a Search & Discovery.**

1. Confirmar configuración y comportamiento actual en español.
2. Probar grupos iniciales: `licras / leggings`, `sets deportivos / conjuntos deportivos`, `shorts / pantalones cortos`. Aprobar equivalencia según productos reales.
3. Probar `licra`, `licras`, `likra`, `leggings`, `leggins`, `enterizo`, `enterisos`, `set deportivo` y `conjunto deportivo` tanto en sugerencias como en resultados completos.
4. Registrar consulta, modo, productos esperados, resultados y limitaciones. No asumir que la búsqueda predictiva y la completa tienen idéntico comportamiento.
5. No añadir faltas ortográficas al contenido SEO ni configurar sinónimos indiscriminados. Si la tolerancia nativa falla en consultas relevantes, documentar opciones y aprobar una solución acotada.

**Entrega:** matriz de pruebas y lista de sinónimos justificados. No se promete aparecer en Google ante cualquier escritura de CABAK o de una categoría.

### Fase D — Rendimiento, confianza y compra

**Prioridad P0 para lanzar. Dependencia: productos, envíos y pagos configurados por sus responsables.**

- Revisar imágenes responsive, dimensiones reservadas, carga de imagen principal, lazy loading del resto y peso de nuevas apps.
- Medir rendimiento móvil en un entorno comparable antes/después. Registrar herramienta, condiciones y varias ejecuciones; no confundir pruebas locales con datos reales de usuarios.
- Verificar contacto, costos y cobertura de envío, cambios/devoluciones y políticas con la información proporcionada por la propietaria.
- Probar compra desde móvil: variante, talla, stock, carrito, envío, pago, retorno y confirmación. Para cada pasarela activada, probar estados admitidos de éxito, rechazo y pendiente mediante el procedimiento del proveedor.
- No asumir que Wompi, Sistecrédito y Mercado Pago están aprobados o son obligatorios los tres para lanzar. La propietaria decide cuáles estarán disponibles; deben estar operativos y correctamente presentados.

**Entrega:** lista de bloqueos y evidencia de compra. Ningún resultado se marcará aprobado sin haberlo observado.

### Fase E — Apertura e indexación

**Prioridad P0 de lanzamiento. Dependencia: aprobación expresa de publicación y fases críticas verificadas.**

1. Confirmar `https://cabak.co` como dominio principal y revisar variantes `www`, HTTP y dominio myshopify sin bucles.
2. Verificar propiedad de dominio en Search Console; puede adelantarse antes de abrir la tienda.
3. Retirar contraseña solo al autorizar el lanzamiento.
4. Revisar acceso público, robots.txt y sitemap generado por Shopify. No crear un sitemap paralelo ni sobrescribir robots sin causa demostrada.
5. Comprobar páginas vendibles con HTTP 200; verificar canonical, ausencia de noindex accidental y enlaces internos. Revisar filtros, búsqueda, variantes y paginación sin aplicar reglas generales que oculten productos.
6. Enviar sitemap e inspeccionar inicio y una muestra representativa de colecciones/productos. Registrar fecha y estados; una solicitud no garantiza indexación inmediata.
7. Evaluar Merchant Center después, con productos comprables y políticas coherentes; revisar requisitos vigentes antes de activarlo. Campañas pagadas fuera de este alcance.

### Fase F — Medición y mejora

**Prioridad P2. Dependencia: tienda pública y medición validada.**

- Primeros 7 días: enlaces, errores de rastreo, pedidos, eventos duplicados y búsquedas sin resultados.
- A los 30 días: consultas de marca/no marca, impresiones, clics, CTR, páginas indexadas y embudo de compra. Poco tráfico no permite conclusiones fuertes.
- A los 60–90 días: ajustar contenido según consultas y productos que realmente generan interés; decidir si conviene contenido editorial.
- Métricas: clics orgánicos, tasa de búsquedas sin resultado, vistas de producto → carrito → checkout → compra e ingresos atribuidos con sus limitaciones.
- No lanzar pruebas A/B sin tráfico suficiente ni declarar mejoras causales a partir de unos pocos pedidos.

## 6. Verificación y definición de terminado

| Área | Casos mínimos | Criterio |
|---|---|---|
| Tema | Theme Check, diff y pruebas de regresión pertinentes | Sin nuevos errores atribuibles al cambio |
| SEO renderizado | Inicio, ocho colecciones, contacto y al menos un producto por estructura/variante relevante | Metadatos coherentes, encabezados y canonical revisados |
| JSON-LD | Producto disponible, agotado y con variantes; Organization | JSON válido, valores coincidentes y validación con Rich Results Test donde aplique; advertencias evaluadas |
| Navegación | Inicio → colección → producto → carrito | Enlaces rastreables, sin rutas rotas ni contenido de prueba presentado como real |
| Responsive | 320, 390, 768 y 1440 px; teclado y movimiento reducido | Sin solapamientos ni pérdida de controles; identidad visual preservada |
| Búsqueda | Matriz de consultas exactas, sinónimos y errores | Resultados pertinentes o limitaciones documentadas y aceptadas |
| Publicación | Sesión anónima y dominio principal | Acceso, HTTPS, redirecciones, sitemap y robots comprobados |
| Compra | Métodos activos y estados pertinentes | Pedido, inventario y confirmación coherentes; datos de prueba identificados |

Cada tarea quedará marcada como **pendiente, en curso, verificada o bloqueada**, acompañada de evidencia. Una prueba bloqueada por falta de productos, permisos o aprobación de pasarela no cuenta como aprobada.

## 7. Orden de tareas y entregables

- [x] T1 — Línea base y lecturas remotas completadas; ver audit.md.
- [x] T2 — Matriz revisada: SEO e introducciones de ocho colecciones y Contacto guardados y verificados en Admin y vista previa. Inicio e imagen social administrativa siguen en la lista de lanzamiento.
- [x] T3 — Correcciones técnicas locales implementadas sin publicar textos de colección.
- [x] T4 — Validación local completada y documentada; push pendiente de autorización.
- [ ] T5 — Textos de colecciones completados; faltan productos, fichas y stock reales (B, depende de propietaria).
- [ ] T6 — Configurar/probar sinónimos y tolerancia nativa (C, depende de T5).
- [ ] T7 — Revisar marcado, rendimiento, políticas y compra (D, depende de T4/T5 y pagos/envíos).
- [ ] T8 — Autorizar apertura y verificar publicación (E, depende de T7).
- [ ] T9 — Enviar sitemap y revisar indexación (E, depende de T8).
- [ ] T10 — Seguimiento y mejoras con datos (F).

Documentos previstos junto a este plan: `audit.md` (evidencias), `metadata.md` (textos aprobables), `product-template.md` (datos necesarios), `search-test-matrix.md`, `validation.md` y `launch-checklist.md`. Se crearán al ejecutar las fases correspondientes, evitando duplicar documentación.

Cambios en código versionados y reversibles. Antes de editar valores del administrador, guardar su estado anterior. Git no revierte ajustes del administrador: deben restaurarse por separado. No cambiar handles existentes sin motivo y redirección revisada.

## 8. Qué se solicita aprobar

La aprobación inicial permitió iniciar **A y los borradores de B**. La continuación aprobada añadió la aplicación de textos en Admin; ver el resultado en validation.md. C y la finalización de B dependen de productos reales. Publicar, hacer push, abrir la tienda, conectar servicios externos o activar indexación se tratará en el momento correspondiente con resultados concretos para revisar.

## 9. Fuentes oficiales consultadas

- [Shopify: metadatos y palabras clave](https://help.shopify.com/en/manual/promoting-marketing/seo/adding-keywords).
- [Shopify: comportamiento de búsqueda y tolerancia a errores](https://help.shopify.com/en/manual/online-store/storefront-search/search-behavior).
- [Shopify: Search & Discovery y sinónimos](https://help.shopify.com/manual/online-store/search-and-discovery/product-boosts).
- [Google: lanzamiento de una tienda e-commerce](https://developers.google.com/search/docs/specialty/ecommerce/how-to-launch-an-ecommerce-website?hl=es).
- [Google: navegación rastreable en e-commerce](https://developers.google.com/search/docs/specialty/ecommerce/help-google-understand-your-ecommerce-site-structure).
- [Google: URLs de comercio electrónico](https://developers.google.com/search/docs/specialty/ecommerce/designing-a-url-structure-for-ecommerce-sites).

Las fuentes confirman el enfoque técnico, no constituyen una predicción de tráfico o ventas para CABAK.
