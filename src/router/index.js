import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Bai1',
      name: 'Bai1',
      component: () => import('../views/Buoi3/Bai1.vue'),
    },
    // {
    //   path: '/Bai2',
    //   name: 'Bai2',
    //   component: () => import('../views/Buoi2/Bai2.vue'),
    // },
  ],
})

export default router
