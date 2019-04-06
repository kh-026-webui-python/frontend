import Vue from 'vue';
import Router from 'vue-router';

import HomePage from './components/HomePage'
import TheLogin from './components/TheLogin'
import Registration from './components/Registration'
import Resume from './components/Resume/Resume'
import FileRegistration from './components/FileRegistration/FileRegistration'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


const router = new Router({
    mode: 'history',
    routes: [
        {path: '/', component: HomePage},
        {path: '/login', component: TheLogin},
        {path: '/registration', component: Registration},
        {path: '/resume', component: Resume},
        {path: '/file_registration', component: FileRegistration},
        {path: '*', redirect: '/'},
    ]
});

Vue.use(Router);
Vue.use(BootstrapVue);
export default router;