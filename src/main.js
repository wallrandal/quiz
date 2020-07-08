import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

Vue.http.options.root = 'https://quiz-3c2c7.firebaseio.com/';
Vue.http.interceptors.push((request, next) => {
  /* eslint no-console: ["error", { allow: ["log"] }] */
  next();
});

new Vue({
  el: '#app',
  render: h => h(App)
})