import Main from '@/pages/main.vue';
import posts from '@/pages/postPage.vue';
import about from '@/pages/About.vue'
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path:'/posts',
        component: posts
    },
    {
        path:'/about',
        component: about
    }
];

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

export default router;