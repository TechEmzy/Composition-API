import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Reactive from '../views/Reactive.vue'
import RefReactive from '../views/RefReactive.vue'
<<<<<<< HEAD
import ComputedValue from '../views/ComputedValue.vue'
=======

>>>>>>> 10684a5499a47d9511c9e119e74adc7a5942d7e8

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
<<<<<<< HEAD
  },
  {
    path: '/computed',
    name: 'ComputedValue',
    component: ComputedValue
  },
=======
  }
>>>>>>> 10684a5499a47d9511c9e119e74adc7a5942d7e8
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
