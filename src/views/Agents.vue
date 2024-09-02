<template>
  <v-container>
    <v-row>
      <v-col v-for="agent in agents" :key="agent.id" cols="12" md="6">
        <v-card>
          <v-card-title>{{ agent.name }}</v-card-title>
          <v-card-subtitle>{{ agent.contact }}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const agents = ref([])

onMounted(async () => {
  const response = await fetch('http://localhost:5000/agents')
  agents.value = await response.json()
})
</script>
