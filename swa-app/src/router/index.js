import Vue from 'vue'
import VueRouter from 'vue-router'
import Todo from '../views/Todo.vue'
import Brunnenmeister from '../views/Brunnenmeister.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Todo',
    component: Todo
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/obstbauer',
    name: 'Obstbauer',
    // route level code-splitting
    // this generates a separate chunk (obstbauer.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "obstbauer" */ '../views/Obstbauer.vue')
  },
  {
    path: '/brunnenmeister',
    name: 'Brunnenmeister',
    component: Brunnenmeister
  },
  {
    path: '/verbraucher',
    name: 'Verbraucher',
    // route level code-splitting
    // this generates a separate chunk (obstbauer.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "obstbauer" */ '../views/Verbraucher.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
