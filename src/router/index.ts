import { createRouter, createWebHistory } from 'vue-router'
import Recommend from '../views/Recommend.vue';
import Selected from '../views/Selected.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/selected',
      name: 'selected',
      component: Selected
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: Recommend
    }
  ]
})

export default router