import Vue from 'vue'
import App from './App.vue'
import router from './router'
import meows from '../src/index.js'

Vue.config.productionTip = false

Vue.use(meows)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')