import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    changeServer (server) {
      this.$emit('changeServer', server);
    },
    switchStatus () {
      this.$emit('siwtchStatus');
    },
  },
});

new Vue({
  el: '#app',
  render: h => h(App)
})