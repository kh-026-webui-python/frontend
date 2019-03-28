import Vue from 'vue';
import Router from 'vue-router';

import HomePage from './components/HomePage'
import TheLogin from './components/TheLogin'
import Registration from './components/Registration'

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage },
    { path: '/login', component: TheLogin },
    { path: '/registration', component: Registration },
    { path: '*', redirect: '/' }
  ]
});
