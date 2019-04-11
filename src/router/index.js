import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../views/HomePage'
import TheLogin from '../views/LoginPage'
import Registration from '../views/RegistrationPage'
import Resume from '../views/ResumeUploadPage'
import FileRegistration from '../views/ApplicantsRegistrationPage'
import BootstrapVue from 'bootstrap-vue/src/index'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


const index = new Router({
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
export default index;