<!-- src/views/Home.vue -->
<script setup lang="ts">
import chapter from '@/textos/cap1.json'
</script>

<template>
  <section class="home">
    <h1>{{ chapter.titulo }}</h1>
    <p>{{ chapter.descripcion }}</p>
  </section>
</template>

<style scoped>
.home {
  padding: 2rem;
  max-width: 800px;
  margin: auto;
}
.home h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.home p {
  line-height: 1.6;
}
</style>