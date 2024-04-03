import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home/HomeView.vue')
    },{
      path: '/note',
      name: 'note',
      component: () => import('../views/note/NoteView.vue')
    }
  ]
})

export default router
