<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            <h2>Welcome to My Company</h2>
          </v-card-title>
          <v-card-subtitle>
            <p>
              Explore our products, meet our agents, and learn more about our
              company.
            </p>
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const headerData = ref({
  title: '',
  logo: ''
})

onMounted(async () => {
  const response = await fetch('http://localhost:5000/header')
  headerData.value = await response.json()
})
</script>

<style scoped>
h2 {
  margin-bottom: 16px;
}

p {
  margin-bottom: 24px;
}
</style>
