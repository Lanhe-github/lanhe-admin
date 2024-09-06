import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'redirect',
      component: () => import('@/views/layouts/layout.vue')
    }
  ]
})

export default router
