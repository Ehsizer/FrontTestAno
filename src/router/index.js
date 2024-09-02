import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import Agents from '../views/Agents.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import { useAuthStore } from '@/stores/auth'

const routes = [
    { path: '/', component: Home },
    { path: '/products', component: Products },
    { path: '/agents', component: Agents },
    { path: '/about', component: About, meta: { requiresAuth: true } },
    { path: '/login', component: Login }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore()
    if (to.meta.requiresAuth && !authStore.isAuthenticated) {
        next('/login')
    } else {
        next()
    }
})

export default router
