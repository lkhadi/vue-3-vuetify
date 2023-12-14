import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '../components/layouts/MainLayout.vue';
import HomeView from '../views/ExampleView.vue';
import AboutView from '../views/AboutView.vue';
import LoginView from '../views/LoginView.vue';
import NotFoundView from '../views/NotFoundView.vue';
import { useAuthStore } from '../stores/auth';

const defaultTitle = import.meta.env.VITE_APP_NAME;
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: MainLayout,
      children: [
        {
          name: 'dashboard',
          path: '/',
          component: HomeView,
          meta: {
            requiresAuth: true,
            title: 'Home'
          }
        },
        {
          name: 'book',
          path: 'buku',
          component: AboutView,
          meta: {
            requiresAuth: true,
            title: 'Book'
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        title: 'Login'
      }
    },
    {
      path: '/:catchAll(.*)',
      component: NotFoundView,
      meta: {
        title: 'Not Found'
      }
    }
  ]
})
router.beforeEach(async (to, from, next) => {
  document.title = to.meta.title ? to.meta.title + ' | ' + defaultTitle : defaultTitle;
  const authStore = useAuthStore();
  const isTokenExist = await authStore.getAccessToken();
  if (to.name !== 'login' && isTokenExist === null) {
    authStore.clearCredentials();
    next({ name: 'login' });
  } else if (to.name === 'login' && isTokenExist !== null) {
    next({name: 'dashboard'});
  } else {
    next();
  }
})

export default router
