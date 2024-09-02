<template>
  <v-container>
    <v-form @submit.prevent="handleLogin">
      <v-text-field v-model="username" label="Username" required />
      <v-text-field v-model="password" label="Password" type="password" required />
      <v-btn type="submit" color="primary">Login</v-btn>
    </v-form>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const authStore = useAuthStore()
const router = useRouter()

const handleLogin = () => {
  authStore.login(username.value, password.value)
  if (authStore.isAuthenticated) {
    router.push('/')
  } else {
    alert('Invalid credentials')
  }
}
</script>
