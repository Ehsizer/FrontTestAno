import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { createPinia } from 'pinia';
import router from './router';

import 'vuetify/styles';
import './assets/styles.css'; // Глобальные стили

createApp(App)
    .use(createPinia())
    .use(router)
    .use(vuetify)
    .mount('#app');
