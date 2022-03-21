import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pastelcreator',
    name: 'pastelcreator',
    component: () => import(/* webpackChunkName: "pastelcreator" */ '../views/PastelCreatorView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
