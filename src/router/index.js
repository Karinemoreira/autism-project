import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutAutismView.vue'),
    },
    {
      path: '/challenges',
      name: 'challenges',
      component: () => import('../views/ChallengesView.vue'),
    },
    {
      path: '/estructure',
      name: 'estructure',
      component: () => import('../views/EstructureView.vue'),
    },
    {
      path: '/tips',
      name: 'tips',
      component: () => import('../views/TipsView.vue'),
    },
    {
      path: '/crises',
      name: 'crises',
      component: () => import('../views/CrisesView.vue'),
    },
    {
      path: '/conclusion',
      name: 'conclusion',
      component: () => import('../views/ConclusionView.vue'),
    },
  ],
})

export default router
