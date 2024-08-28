import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router';
import { createPinia } from 'pinia';
import Antd from 'ant-design-vue';

const app = createApp(App);
app.use(Antd);
app.use(createPinia());
app.use(router);


app.mount('#app');
