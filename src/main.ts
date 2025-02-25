import './assets/main.css';
import 'vue-toastification/dist/index.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { VueQueryPlugin } from '@tanstack/vue-query';
import Toast, { POSITION } from 'vue-toastification';

import App from './App.vue';
import router from './router';
import i18n from './i18n';
import './config/yup.config';

const app = createApp(App);

app.use(createPinia());
app.use(VueQueryPlugin);
app.use(router);
app.use(i18n);
app.use(Toast, { position: POSITION.BOTTOM_RIGHT });

app.mount('#app');
