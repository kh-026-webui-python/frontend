import Vue from 'vue'
import Router from 'vue-router'
import HealthCheck from './views/HealthCheck/HealthCheck'

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/health_check',
            name: 'health_check',
            component: HealthCheck,
        },
    ]
});

Vue.use(Router);

export default router;