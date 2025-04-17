<!-- src/App.vue -->
<script setup lang="ts">
</script>

<template>
  <div id="app">
    <nav class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <main class="view">
      <!-- Aquí montan tus vistas definidas en router/index.ts -->
      <router-view/>
    </main>
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

.nav {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: #f5f5f5;
}

.nav a {
  text-decoration: none;
  color: #42b983;
  font-weight: bold;
}

.nav a.router-link-active {
  border-bottom: 2px solid #42b983;
}

.view {
  padding: 2rem;
}
</style>
