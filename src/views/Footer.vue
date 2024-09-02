<template>
  <footer class="site-footer">
    <div class="footer-container">
      <div class="footer-links">
        <a href="#" class="footer-link">Документы</a>
        <a href="#" class="footer-link">О компании</a>
        <a href="#" class="footer-link">Поддержка</a>
        <a href="#" class="footer-link">Разместить объявление</a>
      </div>
      <p class="footer-text">© Annoncé 2023</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "SiteFooter",
};
</script>

<style scoped>
.site-footer {
  background-color: #f8f9fa;
  border-top: 1px solid #dee2e6;
  padding: 20px 0;
  margin-top: 40px;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.footer-links {
  display: flex;
  gap: 20px;
}

.footer-link {
  text-decoration: none;
  color: #495057;
  font-size: 16px;
}

.footer-text {
  color: #6c757d;
  font-size: 14px;
}
</style>
