import { defineStore } from 'pinia'
import api from '../src/services/api'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null as string | null,
    user: null as { uuid: string; userName: string; email: string } | null,
  }),

  actions: {
    // Initialize state from localStorage
    initializeStore() {
      if (typeof window !== 'undefined') {
        const token = localStorage.getItem('token')
        const user = localStorage.getItem('user')

        if (token) {
          this.token = token
        }
        if (user) {
          this.user = JSON.parse(user)
        }
      }
    },

    setToken(token: string) {
      this.token = token
      localStorage.setItem('token', token)
    },

    setUser(user: { uuid: string; userName: string; email: string }) {
      this.user = user
      localStorage.setItem('user', JSON.stringify(user))
    },

    clearAuth() {
      this.token = null
      this.user = null
      localStorage.removeItem('token')
      localStorage.removeItem('user')
    },

    async login(credentials: { username: string; password: string }) {
      try {
        const response = await axios.post(api.apiBaseUrl + `/api/Account/Login`, credentials)

        if (response.data && response.data.token) {
          this.setToken(response.data.token)
          this.setUser({
            uuid: response.data.uuid,
            userName: response.data.userName,
            email: response.data.email,
          })
        } else {
          console.error('Login failed: Token not received')
          throw new Error('Login failed: Token not received')
        }
      } catch (error) {
        console.error('Login failed:', error)
        throw error
      }
    },

    logout() {
      this.clearAuth()
    },
  },

  getters: {
    isAuthenticated: (state) => !!state.token,
    currentUser: (state) => state.user,
    username: (state) => state.user?.userName, // Getter for username
    uuid: (state) => state.user?.uuid, // Getter for uuid
  },
})
