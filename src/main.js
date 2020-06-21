import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    changeServer (server) {
      this.$emit('changeServer', server);
    }
  },
});

new Vue({
  el: '#app',
  render: h => h(App)
})