import Vue from 'vue'
import VueRouter from 'vue-router'

import Todo from '../views/Todo.vue'
import About from '../views/About.vue'

import Brunnenmeister from '../views/Brunnenmeister.vue'
import Obstbauer from '../views/Obstbauer.vue'
import Verbraucher from '../views/Verbraucher.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Brunnenmeister',
    component: Brunnenmeister
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/obstbauer',
    name: 'Obstbauer',
    component: Obstbauer
  },
  {
    path: '/brunnenmeister',
    name: 'Brunnenmeister',
    component: Brunnenmeister
  },
  {
    path: '/verbraucher',
    name: 'Verbraucher',
    component: Verbraucher
  },
  {
    path: '/todo',
    name: 'Todo',
    component: Todo
  },
]

const router = new VueRouter({
  routes
})

export default router
