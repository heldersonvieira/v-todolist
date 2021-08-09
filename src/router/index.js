import { createRouter, createWebHistory } from 'vue-router';
import List from '../views/List.vue';
import Form from '../views/Form.vue';

const routes = [
    {
        path: '/',
        name: 'list',
        component: List,
    },
    {
        path: '/form',
        name: 'form',
        component: Form,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
