import Vue from 'vue'
import index from './router'
import App from './App.vue'

Vue.config.productionTip = false;

new Vue({
    router: index,
    render: h => h(App)
}).$mount('#app');
