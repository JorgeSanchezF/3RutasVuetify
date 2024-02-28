import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '@/views/Inicio.vue'
import Perfil from '@/views/Perfil.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Inicio
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: Perfil
    }
  ]
})

export default router
