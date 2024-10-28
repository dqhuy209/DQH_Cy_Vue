import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Bai1',
      component: () => import('../views/Bai1.vue'),
    },
    {
      path: '/Bai2',
      name: 'Bai2',
      component: () => import('../views/Bai2.vue'),
    },
    {
      path: '/Bai3',
      name: 'Bai3',
      component: () => import('../views/Bai3.vue'),
    },
    {
      path: '/Bai4',
      name: 'Bai4',
      component: () => import('../views/Bai4.vue'),
    },
    {
      path: '/Bai5',
      name: 'Bai5',
      component: () => import('../views/Bai5.vue'),
    },
    {
      path: '/Bai6',
      name: 'Bai6',
      component: () => import('../views/Bai6.vue'),
    },
    {
      path: '/Bai7',
      name: 'Bai7',
      component: () => import('../views/Bai7.vue'),
    },
  ],
})

export default router
