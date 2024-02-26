import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/lawyer',
      name: 'lawyer',
      component: () => import('../views/LawyerView.vue')
    },
    {
      path: '/writer',
      name: 'writer',
      component: () => import('../views/WriterView.vue')
    },
    {
      path: '/speaker',
      name: 'speaker',
      component: () => import('../views/SpeakerView.vue')
    },
  ]
})

export default router
