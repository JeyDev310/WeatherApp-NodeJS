import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';

const http = axios.create({
  baseURL: process.env.BACKEND_URL ? process.env.BACKEND_URL : 'http://localhost/api',
});

Vue.prototype.$http = http;

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
