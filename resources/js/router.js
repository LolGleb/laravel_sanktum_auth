import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/get', component: () => import('./components/Get.vue'),
            name: 'get.index'
        },
        {
            path: '/login', component: () => import('./components/Login.vue'),
            name: 'user.login'
        },
        {
            path: '/registration', component: () => import('./components/Registration.vue'),
            name: 'user.registration'
        },
    ]
});

export default router;
