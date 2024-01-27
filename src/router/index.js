import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  //history: createWebHistory('/events/'),
  history: createWebHashHistory('/events/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Eventos'
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: 'Sobre'
      }
    },
    {
      path: '/children',
      name: 'children',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ChildrenView.vue'),
      meta: {
        title: 'Crianças'
      }
    },
    {
      path: '/inscription',
      name: 'inscription',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/InscriptionView.vue'),
      meta: {
        title: 'Inscrição'
      }
    }
  ],
  scrollBehavior() {
    window.scrollTo(0, 0)
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title + ' | ADECSSA (Assembléia de Deus - São Sebastião do Anta)'
  next()
})

export default router
