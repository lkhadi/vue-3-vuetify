import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    authUser: null
  }),
  getters: {
    user: state => state.authUser
  },
  actions: {
    async login(data) {
      this.authUser = data.user;
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('access_token', data.access_token);
      window.location = '/';
    },
    async logout() {
      await this.clearCredentials();
      window.location = '/login';
    },
    getAccessToken() {
      return localStorage.getItem('access_token');
    },
    async clearCredentials() {
      this.authUser = null;
      localStorage.removeItem('user');
      localStorage.removeItem('access_token');
    },
    me() {
      return JSON.parse(localStorage.getItem('user'));
    }
  }
});