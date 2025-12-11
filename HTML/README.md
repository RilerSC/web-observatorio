# Archivos para subir a fundepos.ac.cr/observatorio/

Este directorio contiene los archivos necesarios para enmascarar la URL de Vercel y hacer que el sitio parezca estar alojado en `fundepos.ac.cr/observatorio/`.

## Archivos incluidos:

1. **index.html** - Archivo principal que carga el contenido de Vercel en un iframe
2. **.htaccess** - Configuración de Apache para redirecciones y seguridad (opcional)

## Instrucciones de instalación:

### Opción 1: Solo HTML (Más simple)
1. Sube el archivo `index.html` al directorio `/observatorio/` en el servidor de fundepos.ac.cr
2. Asegúrate de que el archivo se llame exactamente `index.html`
3. El sitio estará disponible en: `https://fundepos.ac.cr/observatorio/`

### Opción 2: Con .htaccess (Recomendado para Apache)
1. Sube ambos archivos (`index.html` y `.htaccess`) al directorio `/observatorio/`
2. Asegúrate de que el servidor Apache tenga habilitado `mod_rewrite`
3. Verifica que los permisos del archivo `.htaccess` sean correctos (644)

## Cómo funciona:

- El archivo `index.html` carga el contenido de `https://web-observatorio.vercel.app` en un iframe
- El iframe ocupa toda la pantalla, haciendo que parezca que el contenido está en el mismo dominio
- Se muestra un spinner de carga mientras se carga el contenido
- La URL en el navegador siempre será `fundepos.ac.cr/observatorio/` (o subrutas)

## Notas importantes:

⚠️ **Limitaciones del iframe:**
- Algunos navegadores pueden mostrar la URL del iframe en la barra de estado al hacer hover sobre enlaces
- El SEO puede verse afectado ya que los buscadores verán el iframe, no el contenido directo
- Algunas funcionalidades de JavaScript pueden tener restricciones por políticas de seguridad

✅ **Alternativa recomendada (Proxy Reverso):**
Para una solución más profesional y sin limitaciones, se recomienda configurar un proxy reverso en el servidor de fundepos.ac.cr que redirija las peticiones a Vercel sin mostrar la URL. Esto requiere acceso a la configuración del servidor web (Apache/Nginx).

## Soporte:

Si necesitas ayuda con la configuración del proxy reverso o tienes problemas con el iframe, contacta al administrador del servidor de fundepos.ac.cr.

