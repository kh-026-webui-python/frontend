import Vue from 'vue'
import VueAWN from 'vue-awesome-notifications'
import index from './router'
import App from './App.vue'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate);

const options = {
    icons: {enabled: false},
    position: 'top-left',
    duration: 2000,
};
Vue.use(VueAWN, options)
require("vue-awesome-notifications/dist/styles/style.css")

Vue.config.productionTip = false;

new Vue({
    router: index,
    render: h => h(App)
}).$mount('#app');
