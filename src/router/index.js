import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '../store'

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
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "dashbo+ard" */ '../views/DashboardView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  }
]

const router = createRouter({
  // history: createWebHashHistory(), // esto genera el '#' en la url. 
  history: createWebHistory(), //Esto lo elimina.
  routes
})


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.auth){
      next()
    } else {
      next({name: 'login'})
    }
  } else {
    next()
  }
})

export default router
