import Vue from 'vue'
import router from './router.js'

import App from './App.vue'


Vue.config.productionTip = false;


const app = new Vue({
    router,
    render: h => h(App),
}).$mount('#app');