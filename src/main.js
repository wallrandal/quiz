import Vue from 'vue'
import App from './App.vue'
import Servers from './Servers.vue'

Vue.component('servers', Servers)

export const eventBus = new Vue();

//parent 
new Vue({
  el: '#app',
  render: h => h(App)
})