import { defineStore } from 'pinia'
import rawData from '../textos/cap1.json'

interface Chapter {
  titulo: string
  descripcion: string
}

export const useTextStore = defineStore('text', {
  state: () => ({
    chapter: rawData as Chapter,

    texts: [
      {
        id: 1,
        content: (rawData as Chapter).descripcion
      }
    ] as Array<{ id: number; content: string }>,
  }),
  getters: {
    totalSize: (state) =>
      state.texts.reduce((acc, t) => acc + t.content.length, 0),
  },
})
