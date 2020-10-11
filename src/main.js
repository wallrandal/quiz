import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import { routes } from "./routes";
import store from "./store/store";

Vue.use(Vuex);
Vue.use(VueRouter);

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
  render: h => h(App)
})