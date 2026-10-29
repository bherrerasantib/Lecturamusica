# Notas del código

Comentarios y docstrings que tenía el código antes de quitarlos (regla "Código sin comentarios",
2026-10-29), textuales y por archivo. Los números son las líneas del commit 41f1fa6:
`git show 41f1fa6:<ruta>` muestra el contexto. Lo que siga vigente se pasa al README cuando se toque.

## src/App.vue
- 1: <!-- src/App.vue -->
- 12: <!-- Aquí montan tus vistas definidas en router/index.ts -->

## src/router/index.ts
- 4: importa aquí las vistas que necesites

## src/stores/textStore.ts
- 1: src/stores/textStore.ts
- 12: Opción A: lo guardas como un solo objeto
- 15-16:
  > Opción B: lo envuelves en un array de párrafos,
  > asignando tú mismo id y content:
- 26: si usas chapter: state.chapter.descripcion.length

## src/views/About.vue
- 2: Aquí puedes definir props, estados locales o lógica

## src/views/Home.vue
- 1: <!-- src/views/Home.vue -->
- 6: Datos de ejemplo para el índice
- 14: Datos de ejemplo para recomendaciones
- 32: <!-- Sidebar Índice -->
- 46: <!-- Contenido principal -->
- 52: <!-- Panel de recomendaciones -->
- 87: Índice
- 120: Contenido del capítulo
- 137: Recomendaciones

## vite.config.js
- 1: vite.config.js
- 6: Plugins extras
- 13: Carga variables de entorno de .env y .env.[mode]
- 18: Soporte de SFC de Vue
- 21: Auto-import de APIs de Vue, Router y Pinia
- 27: Auto-registra componentes de /src/components
- 35-36:
  > gzip
  > brotli
- 38: Genera un reporte HTML del bundle
