# CABAK — Plantilla para cargar productos

Estado: lista para completar; no crea productos ni modifica el catálogo. No publicar campos entre corchetes. Una ficha por modelo, con variantes coherentes; evitar duplicar páginas por color sin una necesidad real.

## Datos que debe entregar la propietaria

| Dato | Qué completar | Validación |
|---|---|---|
| Nombre/modelo | Tipo de prenda + nombre real del modelo | Describe el artículo; no es una lista de palabras clave |
| Marca/proveedor | Marca real del artículo | No dejar “My Store”; no sustituir una marca revendida por CABAK |
| Categoría | Una o más colecciones pertinentes | Evitar incluir todo en todas las colecciones |
| Tallas y medidas | Tabla por modelo, unidades y cómo medir | Coincide con las variantes vendibles |
| Color | Nombre y fotografía del color real | No prometer colores sin inventario |
| Material y composición | Información de etiqueta/proveedor, porcentajes si existen | No inventar compresión, soporte ni propiedades técnicas |
| Ajuste y largo | Características verificadas | Sin promesas universales de ajuste |
| Presentación | Una prenda, un par, paquete o conjunto con piezas enumeradas | Especialmente importante en medias y sets |
| Cuidados | Instrucciones comprobadas | Consistentes con la etiqueta |
| Precio e inventario | Valores reales por variante, moneda COP | Revisar disponibilidad y política de sobreventa |
| SKU y códigos | Identificadores reales, si existen | Nunca inventar GTIN o usar códigos de otra referencia |
| Fotografías | Propias o autorizadas, frente, espalda y detalle útil | Sin fotos copiadas de la referencia de diseño |
| Envíos/cambios | Información comercial aprobada | Usar las políticas de la tienda; no inventar plazos |

## Estructura editorial

**Nombre:** [Tipo de prenda] [Modelo]

**Introducción:** [Qué prenda es y qué detalle real la distingue, en una o dos frases.]

**Detalles:**

- Composición: [dato confirmado].
- Ajuste/largo: [dato confirmado].
- Presentación: [qué incluye exactamente].
- Cuidados: [instrucciones confirmadas].

**Tallas:** [tabla de medidas específica y enlace a orientación pertinente].

**Título SEO:** [Tipo de prenda] [Modelo] | CABAK Activewear

**Meta descripción:** [Descripción breve del modelo con uno o dos atributos verificables y una invitación a consultar tallas o detalles.]

**Texto alternativo de imagen:** [Tipo + modelo + color + vista relevante]. No incluir “imagen de”, precios ni listas de keywords. Imágenes decorativas pueden llevar alt vacío.

## Producto observado en la auditoría

`/products/medias-nike`: activo, una variante, inventario registrado de 0 y proveedor “My Store”. La vista previa muestra agotado. Confirmar si es una ficha definitiva, verificar marca, composición, tallas y unidades incluidas. No modificado por esta fase.

## Lista previa a publicación

- [ ] Datos y fotografías aprobados por la propietaria.
- [ ] Nombre, descripción y variante describen el mismo artículo.
- [ ] Colección asignada y enlaces accesibles desde el catálogo.
- [ ] Precio/inventario revisados y estado de compra coherente.
- [ ] Medidas y presentación claras en móvil.
- [ ] Título/meta propios; sin campos pendientes ni afirmaciones sin evidencia.
- [ ] JSON-LD nativo refleja los datos reales; no añadir otro Product schema.
- [ ] Compra de prueba según procedimiento de la pasarela cuando esté activada.
