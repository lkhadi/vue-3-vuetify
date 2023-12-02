import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    authUser: null
  }),
  getters: {
    user: state => state.authUser
  },
  actions: {
    
  }
});