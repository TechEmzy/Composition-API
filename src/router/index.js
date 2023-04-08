import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Reactive from '../views/Reactive.vue'
import RefReactive from '../views/RefReactive.vue'
import ComputedValue from '../views/ComputedValue.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/reactive',
    name: 'Reactive',
    component: Reactive
  },
  {
    path: '/ref&reactive',
    name: 'RefReactive',
    component: RefReactive
  },
  {
    path: '/computed',
    name: 'ComputedValue',
    component: ComputedValue
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
