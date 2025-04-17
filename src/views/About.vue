<script setup lang="ts">
// Aquí puedes definir props, estados locales o lógica
const info = 'Esta aplicación te permite leer textos y generar recomendaciones musicales vía código QR.'
</script>

<template>
  <section class="about">
    <h1>About</h1>
    <p>{{ info }}</p>
  </section>
</template>

<style scoped>
.about {
  max-width: 600px;
  margin: 2rem auto;
  line-height: 1.5;
}

.about h1 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.about p {
  font-size: 1rem;
  color: #444;
}
</style>
