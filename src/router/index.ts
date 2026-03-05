import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: () => import('@/pages/HomePage.vue'),
    },
    {
      path: '/project/:id',
      name: 'ProjectPage',
      component: () => import('@/pages/ProjectPage.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFoundPage',
      component: () => import('@/pages/NotFoundPage.vue'),
    },
  ],
})

export default router
