import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home      from '@/views/Home.vue'
import About     from '@/views/About.vue'
// importa aquí las vistas que necesites

const routes: RouteRecordRaw[] = [
  { path: '/',     name: 'home',  component: Home },
  { path: '/about', name: 'about', component: About },

]

const router = createRouter({
  history: createWebHistory(), 
  routes,
})

export default router
