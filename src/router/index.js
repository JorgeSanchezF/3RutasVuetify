import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '@/views/Inicio.vue'
import Perfil from '@/views/Perfil.vue'
import Configuracion from '@/views/Configuracion.vue'
import Listado from '@/views/Listado.vue'
import Detalle from '@/views/Detalle.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Inicio
    },
    {
      path: '/perfil/:fecha',
      name: 'perfil',
      component: Perfil,
      props: true
    }, {
      path: '/configuracion',
      name: 'configuracion',
      component: Configuracion,

    },
    {
      path: '/listado',
      name: 'listado',
      component: Listado,
    }, {
      path: '/detalle/:idEnviar',
      name: 'detalle',
      component: Detalle
    }

  ]
})

export default router
