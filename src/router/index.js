import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
// import Home from '../views/Home.vue'
const Home = () => import('../views/Home.vue')
const Facciones = () => import('../views/Facciones.vue')
const Mapas = () => import('../views/Mapas.vue')
const Liga = () => import('../views/Liga.vue')
const Equipos = () => import('../views/Equipos.vue')
const Resultados = () => import('../views/Resultados.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { toTop: true, smoothScroll: true }
  },
  {
    path: '/facciones',
    name: 'Facciones',
    component: Facciones,
    meta: { toTop: true, smoothScroll: true }
  },
  {
    path: '/mapas',
    name: 'Mapas',
    component: Mapas,
    meta: { toTop: true, smoothScroll: true }
  },
  {
    path: '/liga',
    name: 'Liga',
    component: Liga,
    meta: { toTop: true, smoothScroll: true }
  },
  {
    path: '/resultados',
    name: 'Resultados',
    component: Resultados,
    meta: { toTop: true, smoothScroll: true }
  },
  {
    path: '/equipos',
    name: 'Equipos',
    component: Equipos,
    meta: { toTop: true, smoothScroll: true }
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to) {
    const scroll = {}
    if (to.meta.toTop) scroll.top = 0
    if (to.meta.smoothScroll) scroll.behavior = 'smooth'
    return scroll
  }
})

export default router
