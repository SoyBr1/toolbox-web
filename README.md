# ToolBox v2

Proyecto gratuito para GitHub Pages.

## Arquitectura
La web usa una SPA con rutas hash:
- `#/` inicio
- `#/herramientas` directorio
- `#/nota` calculadora de notas
- `#/nota-aprobar` nota necesaria para aprobar
- etc.

Esto permite que cada herramienta tenga su propia vista sin mantener 20 copias de la misma cabecera.

## 20 herramientas iniciales
1. Calculadora de notas con pesos personalizados
2. ¿Qué nota necesito para aprobar?
3. Calculadora de porcentajes
4. Calculadora de edad
5. Regla de tres
6. Contador de palabras
7. Comprimir imagen
8. Redimensionar imagen
9. Imagen a JPG
10. Imagen a PNG
11. Imagen a PDF
12. Generador QR
13. Conversor de longitud
14. Conversor de temperatura
15. Interés compuesto
16. Calculadora de descuentos
17. Días entre fechas
18. Calculadora de media
19. MCD y MCM
20. Generador de contraseñas
21. Formateador JSON
22. Asistente ToolBox

La petición original era 20; se incluyen 22 porque dos son utilidades adicionales muy baratas de mantener.

## IA
No se mete una clave de Groq/Grok en el JavaScript público: eso expondría la clave a cualquier visitante. La primera versión incluye un asistente local de respuestas y una interfaz preparada para añadir un backend seguro.

## Investigación
Competidores actuales de herramientas gratuitas muestran una concentración clara en PDF, imágenes, calculadoras, conversores, texto, generadores y herramientas para estudiantes. Eso no demuestra por sí solo volumen de búsquedas, así que no debemos confundir “popular en competidores” con “volumen de Google”. Google Trends permite contrastar el interés de términos y compararlos a lo largo del tiempo.

Fuentes consultadas:
- Google Trends: https://trends.google.com/
- AMTake: https://amtake.com/
- ToolBig: https://www.toolbig.com/
- TryFormatter: https://www.tryformatter.com/
- TooliFyra: https://toolifyra.com/
