<script setup lang="ts">
import { ref } from 'vue'
import chapter from '@/textos/cap1.json'

const chapters = ref([
  { id: 1, title: 'Capítulo 1' },
  { id: 2, title: 'Capítulo 2' },
  { id: 3, title: 'Capítulo 3' },
  { id: 4, title: 'Capítulo 4' },
])

const recommendations = ref([
  { id: 1, title: 'Canción A', artist: 'Artista A' },
  { id: 2, title: 'Canción B', artist: 'Artista B' },
  { id: 3, title: 'Canción C', artist: 'Artista C' },
])

function play(rec: { id: number; title: string }) {
  console.log('Play ▶️', rec)
}

function generateQr(rec: { id: number; title: string }) {
  console.log('Generar QR 🔲', rec)
}
</script>

<template>
  <div class="home-grid">
    <aside class="sidebar">
      <h2>Índice</h2>
      <ul>
        <li
          v-for="cap in chapters"
          :key="cap.id"
          :class="{ active: cap.id === 1 }"
        >
          <a href="#">{{ cap.title }}</a>
        </li>
      </ul>
    </aside>

    <main class="content">
      <h1>{{ chapter.titulo }}</h1>
      <p>{{ chapter.descripcion }}</p>
    </main>

    <aside class="recommendations">
      <h2>Recomendaciones Música</h2>
      <ul>
        <li v-for="rec in recommendations" :key="rec.id">
          <div class="rec-info">
            <div class="thumb" />
            <div class="meta">
              <p class="track">{{ rec.title }}</p>
              <p class="artist">{{ rec.artist }}</p>
            </div>
          </div>
          <div class="rec-actions">
            <button @click="play(rec)" aria-label="Play">▶️</button>
            <button
              @click="generateQr(rec)"
              aria-label="Generar QR"
            >🔲</button>
          </div>
        </li>
      </ul>
    </aside>
  </div>
</template>

<style scoped>
.home-grid {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 1.5rem;
  padding: 2rem;
  height: calc(100vh - 4rem);
  box-sizing: border-box;
}

.sidebar {
  background: #f7f9fc;
  padding: 1rem;
  border-radius: 8px;
  overflow-y: auto;
}
.sidebar h2 {
  margin-bottom: 1rem;
  font-size: 1.25rem;
  color: #333;
}
.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.sidebar li {
  margin-bottom: 0.75rem;
}
.sidebar li.active a {
  font-weight: bold;
  color: #1e88e5;
}
.sidebar a {
  text-decoration: none;
  color: #555;
  transition: color 0.2s;
}
.sidebar a:hover {
  color: #1e88e5;
}

.content {
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  overflow-y: auto;
}
.content h1 {
  margin-top: 0;
  font-size: 1.75rem;
  color: #222;
}
.content p {
  line-height: 1.6;
  color: #444;
}

.recommendations {
  background: #f7f9fc;
  padding: 1rem;
  border-radius: 8px;
  overflow-y: auto;
}
.recommendations h2 {
  margin-bottom: 1rem;
  font-size: 1.25rem;
  color: #333;
}
.recommendations ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.recommendations li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding: 0.5rem;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}
.rec-info {
  display: flex;
  align-items: center;
}
.thumb {
  width: 48px;
  height: 48px;
  background: #ddd;
  border-radius: 4px;
  margin-right: 0.75rem;
}
.meta .track {
  margin: 0;
  font-weight: 500;
  color: #333;
}
.meta .artist {
  margin: 0;
  font-size: 0.875rem;
  color: #666;
}
.rec-actions button {
  background: transparent;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  transition: transform 0.1s;
}
.rec-actions button:hover {
  transform: scale(1.2);
}
</style>
