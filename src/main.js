/* eslint no-console: ["error", { allow: ["log"] }] */
import  { createApp } from 'vue';
import App from './App.vue';
import router from "./router";
import store from "./store/store";
import axios from 'axios';

axios.defaults.baseURL = 'https://quiz-3c2c7.firebaseio.com';

axios.interceptors.request.use(config => {
  console.log('request intecteptor: ' + config);
  return config;
})

axios.interceptors.response.use(res => {
  console.log('response intecteptor: ' + res);
  return res;
})

createApp(App)
  .use(store)
  .use(router)
  .mount('#app');