import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../views/HomePage'
import Registration from '../views/RegistrationPage'
import Resume from '../views/ResumeUploadPage'
import FileRegistration from '../views/ApplicantsRegistrationPage'
import BootstrapVue from 'bootstrap-vue/src/index'
import Courses from '../views/Courses'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


const authenticated = (to, from, next) => {
    if (localStorage.token) {
        next();
        return
    }
    next('/')
};

const index = new Router({
    mode: 'history',
    routes: [
        {path: '/', component: HomePage, },
        {path: '/registration', component: Registration, },
        {path: '/resume', component: Resume,  beforeEnter: authenticated,},
        {path: '/file_registration', component: FileRegistration,  beforeEnter: authenticated,},
        {path: '/courses', component: Courses},
        {path: '*', redirect: '/'},
    ]
});

Vue.use(Router);
Vue.use(BootstrapVue);
export default index;