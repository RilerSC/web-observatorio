# Carpeta `fuentes/`

**Proposito:** material editorial de referencia (textos originales entregados por el cliente/redactor).

## Importante

Los archivos de esta carpeta **NO se consumen en runtime**. La Web **no los lee**.

La **fuente de verdad** para el contenido mostrado en el sitio vive en:

- `src/data/equipo.json` -> seccion `/nosotros`
- `src/data/alianzas.json` -> seccion de alianzas
- `src/data/ejes-tematicos.json` -> ejes tematicos
- `src/data/noticias.json` -> noticias
- `src/data/articulos/*.json` -> articulos individuales

## Flujo de actualizacion de contenido

1. Si llega texto nuevo del cliente -> guardar aqui como referencia historica.
2. Para que el cambio aparezca en la Web -> **editar el JSON correspondiente en `src/data/`**.
3. No editar unicamente los `.md` de esta carpeta esperando ver el cambio en el sitio: no se va a reflejar.

## Proximo paso (roadmap)

Migrar el contenido a un CMS headless (Sanity / Decap / MDX tipado) para eliminar esta duplicacion.
