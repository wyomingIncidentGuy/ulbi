import Main from '@/pages/main.vue';
import posts from '@/pages/postPage.vue';
import about from '@/pages/About.vue';
import postIdPage from '@/pages/postIdPage.vue';
import postPageWithStore from '@/pages/postPageWithStore.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { compile } from 'vue';

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
    },
    {
        path:'/posts/:id',
        component: postIdPage
    },
    {
        path:'/store',
        component: postPageWithStore
    }
];

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

export default router;