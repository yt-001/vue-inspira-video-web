import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/recommend',
      name: 'recommend',
      component: () => import('../views/Recommend.vue')
    },
    {
      path: '/video',
      name: 'video',
      component: () => import('../views/Recommend.vue')
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: () => import('../views/Recommend.vue')
    }
  ]
})

export default router