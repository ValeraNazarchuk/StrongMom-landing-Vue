import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Form from '../views/Form.vue'

const routes = [
  {
    path: '/',
    redirect: '/home', 
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/form',
    name: 'Form',
    component: Form,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
})

export default router
