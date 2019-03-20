import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import axios from './axios.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
}).$mount('#app')

new Vue({
	render: h=> h(axios),
}).$mount('#axios')