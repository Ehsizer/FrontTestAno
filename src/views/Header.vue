<template>
  <header class="site-header">
    <div class="header-container">
      <div class="logo-container">
        <router-link to="/" class="site-logo-link">
          <img src="{{companyDetails.logo}}" alt="Site Logo" class="site-logo" />
          <h1 class="site-title">Annoncé</h1>
        </router-link>
      </div>
      <nav class="site-nav">
        <div class="dropdown">
          <button class="dropdown-btn">Все категории</button>
          <div class="dropdown-content">
            <router-link to="/products" class="dropdown-item">Товары и услуги</router-link>
            <router-link to="/agents" class="dropdown-item">Агенты</router-link>
            <router-link to="/about" class="dropdown-item">О компании</router-link>
          </div>
        </div>
      </nav>
      <div class="header-actions">
        <button class="login-btn">Войти</button>
        <button class="post-ad-btn">Разместить объявление</button>
      </div>
    </div>
  </header>
</template>

<script>
import {useAuthStore} from "@/stores/auth";
export default {
  name: "SiteHeader",
};
</script>


<style scoped>
.site-header {
  background-color: #FFF7EB;
  border-bottom: 1px solid #dee2e6;
  padding: 20px 0;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.logo-container {
  display: flex;
  align-items: center;
}

.site-logo {
  width: 50px;
  height: auto;
}

.site-title {
  font-size: 24px;
  margin-left: 10px;
  color: #343a40;
}

.site-nav {
  display: flex;
  gap: 20px;
}

.nav-link {
  text-decoration: none;
  color: #495057;
  font-size: 18px;
}

.header-actions {
  display: flex;
  gap: 20px;
}

.login-btn, .post-ad-btn {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

.login-btn {
  background-color: #28a745;
  color: white;
}

.post-ad-btn {
  background-color: #007bff;
  color: white;
}
.site-header {
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
  padding: 20px 0;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.logo-container {
  display: flex;
  align-items: center;
}

.site-logo {
  width: 50px;
  height: auto;
}

.site-title {
  font-size: 24px;
  margin-left: 10px;
  color: #343a40;
}

.site-nav {
  position: relative;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-btn {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: white;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content .dropdown-item {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content .dropdown-item:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
