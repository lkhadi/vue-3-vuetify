import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '../components/layouts/MainLayout.vue';
import HomeView from '../views/ExampleView.vue';
import AboutView from '../views/AboutView.vue';
import LoginView from '../views/LoginView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: '',
      component: MainLayout,
      children: [
        {
          name: 'home',
          path: '/',
          component: HomeView
        },
        {
          name: 'about',
          path: 'about',
          component: AboutView
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    }
  ]
})
router.beforeEach((to, from) => {
  // if (to.name !== 'Login' && !isAuthenticated) {
  //   next({ name: 'Login' })
  // } else {
  //   next()
  // }
})
export default router
