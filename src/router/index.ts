import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue'),
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('@/views/Register.vue'),
    },
    {
        path: '/settings',
        name: 'Settings',
        component: () => import('@/views/Settings.vue'),
    },
    {
        path: '/editor',
        name: 'Editor',
        component: () => import('@/views/Editor.vue'),
    },
    {
        path: '/editor/:editorId',
        name: 'Edit Article',
        component: () => import('@/views/EditArticle.vue'),
    },
    {
        path: '/articles/:articleId',
        name: 'Article',
        component: () => import('@/views/Article.vue'),
    },
    {
        path: '/profile/:username',
        name: 'Profile',
        component: () => import('@/views/Profile.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
