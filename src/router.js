import Vue from 'vue';
import Router from 'vue-router';

import HomePage from './components/HomePage'
import TheLogin from './components/TheLogin'
import Registration from './components/Registration'
import HealthCheck from './views/HealthCheck/HealthCheck'



const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage },
    { path: '/login', component: TheLogin },
    { path: '/registration', component: Registration },
    { path: '*', redirect: '/' },
    {
        path: '/health_check',
        name: 'health_check',
        component: HealthCheck,
    },
  ]
});

Vue.use(Router);
export default router;