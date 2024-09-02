<template>
  <div class="company-section">
    <header class="company-header">
      <img src="{{companyDetails.logo}}" alt="Company Logo" class="company-logo" />
      <div class="company-info">
        <h1 class="company-name">{{ companyDetails.name }}</h1>
        <p class="company-rating">Доверяют: 9 пользователей • ★ 4.7 • 13 отзывов</p>
      </div>
      <button class="subscribe-btn">Подписаться на обновления</button>
    </header>

    <nav class="company-nav">
      <button>Товары и услуги</button>
      <button>Агенты</button>
      <button class="active">О компании</button>
    </nav>

    <section class="company-details">
      <h2>О компании</h2>
      <p class="company-description">
        {{ companyDetails.description }}
      </p>
      <div class="company-extra-info">
        <div class="working-hours">
          <h3>Режим работы</h3>
          <p>Сегодня: с 8:00 до 23:00</p>
        </div>
        <div class="location">
          <h3>Местоположение</h3>
          <p>Ростов-на-Дону, Ворошиловская ул., 93А</p>
          <img src="./src/assets/Map.png" alt="Map" class="location-map" />
        </div>
      </div>
    </section>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'

const companyDetails = ref({
  description: '',
  contact: ''
})

onMounted(async () => {
  const response = await fetch('http://localhost:5000/company')
  companyDetails.value = await response.json()
})
</script>
<style scoped>
.company-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.company-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
}

.company-logo {
  width: 100px;
  height: auto;
}

.company-info {
  flex: 1;
  margin-left: 20px;
}

.company-name {
  font-size: 24px;
  margin: 0;
}

.company-rating {
  font-size: 16px;
  color: #888;
}

.subscribe-btn {
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  cursor: pointer;
}

.company-nav {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
}

.company-nav button {
  padding: 10px 20px;
  border: none;
  background-color: #f8f9fa;
  cursor: pointer;
}

.company-nav .active {
  background-color: #e9ecef;
}

.company-details {
  margin-top: 20px;
}

.company-description {
  font-size: 18px;
  margin-bottom: 20px;
}

.company-extra-info {
  display: flex;
  justify-content: space-between;
}

.working-hours,
.location {
  flex: 1;
  margin-right: 20px;
}

.location-map {
  width: 100%;
  height: auto;
}
</style>