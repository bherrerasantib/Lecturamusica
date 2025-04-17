// src/stores/textStore.ts
import { defineStore } from 'pinia'
import rawData from '../textos/cap1.json'

interface Chapter {
  titulo: string
  descripcion: string
}

export const useTextStore = defineStore('text', {
  state: () => ({
    // Opción A: lo guardas como un solo objeto
    chapter: rawData as Chapter,

    // Opción B: lo envuelves en un array de párrafos,
    // asignando tú mismo id y content:
    texts: [
      {
        id: 1,
        content: (rawData as Chapter).descripcion
      }
    ] as Array<{ id: number; content: string }>,
  }),
  getters: {
    totalSize: (state) =>
      // si usas chapter: state.chapter.descripcion.length
      state.texts.reduce((acc, t) => acc + t.content.length, 0),
  },
})
