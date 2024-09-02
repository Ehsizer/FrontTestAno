
  <template>
    <div id="app">
      <SiteHeader />
      <router-view />
      <SiteFooter />
    </div>
  </template>


<script setup>
import SiteHeader from './views/Header.vue';
import SiteFooter from './views/Footer.vue';
import { ref, onMounted } from 'vue'

const headerData = ref({
  title: '',
  logo: ''
})

// Получаем данные для шапки из API
onMounted(async () => {
  const response = await fetch('http://localhost:5000/header')
  headerData.value = await response.json()
})
</script>

<style scoped>
.v-app-bar {
  background-color: #1976D2;
  color: white;
}

.v-footer {
  background-color: #1976D2;
  color: white;
  padding: 16px 0;
}
</style>
