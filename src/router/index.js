import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/work',
      name: 'work',
      component: () => import('../views/LastWorkVuew.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/NewsView.vue')
    },
    {
      path: '/news/:id',
      name: 'news name',
      component: () => import('../views/ArticleVuew.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactVuew.vue')
    }
    
  ]
})

export default router
