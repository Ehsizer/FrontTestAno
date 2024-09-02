import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        isAuthenticated: false,
    }),
    actions: {
        login(username, password) {
            if (username === 'admin' && password === 'secret') {
                this.isAuthenticated = true
            } else {
                this.isAuthenticated = false
            }
        },
        logout() {
            this.isAuthenticated = false
        }
    }
})
