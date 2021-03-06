/* eslint no-console: ["error", { allow: ["log"] }] */
import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import { routes } from "./routes";
import store from "./store/store";
import VueResource from 'vue-resource';
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

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://quiz-3c2c7.firebaseio.com/';

Vue.filter('currency', value => {
  return value.toLocaleString('pt-BR',  { style: 'currency', currency: 'BRL' });
});

const router = new VueRouter({
  routes // short for `routes: routes`
})


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})