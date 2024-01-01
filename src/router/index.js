import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '../components/layouts/MainLayout.vue';
import HomeView from '../views/ExampleView.vue';
import LoginView from '../views/LoginView.vue';
import NotFoundView from '../views/NotFoundView.vue';
import { useAuthStore } from '../stores/auth';
import childrenRoute from './children';

const defaultTitle = import.meta.env.VITE_APP_NAME;
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          name: 'home',
          path: '/',
          component: HomeView,
          meta: {
            title: 'Beranda',
            roles: ['admin', 'staf', 'approver'],
          }
        }
      ].concat(childrenRoute)
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
      path: '/404',
      name: 'not-found',
      component: NotFoundView,
      meta: {
        title: 'Not Found'
      }
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found-all',
      component: NotFoundView,
      meta: {
        title: 'Not Found'
      }
    },
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
    next({name: 'home'});
  } else if (to.name === 'login' && isTokenExist === null) {
    next();
  } else {
    const me = authStore.me();
    if (to.meta.roles === undefined || to.meta.roles.length === 0 || !to.meta.roles.includes(me.role)) {
      if (to.name !== 'not-found') {
        next({name: 'not-found'});
      } else {
        next();
      }
    } else {
      next();
    }
  }
})

export default router
