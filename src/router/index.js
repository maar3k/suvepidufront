import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CheckoutView from "@/views/CheckoutView.vue";
import NewUserView from "@/views/NewAccountView.vue";
import ErrorView from "@/views/ErrorView.vue";
import MainEventView from "@/views/MainEventView.vue";
import FeatureCategoryView from "@/views/FeatureCategoryView.vue";

const routes = [
    {
        path: '/',
        name: 'homeRoute',
        component: HomeView
    },
    {
        path: '/checkout',
        name: 'checkoutRoute',
        component: CheckoutView
    },
    {
        path: '/new-user',
        name: 'newUserRoute',
        component: NewUserView
    },
    {
        path: '/error',
        name: 'errorRoute',
        component: ErrorView
    },
    {
        path: '/main-event',
        name: 'mainEventRoute',
        component: MainEventView
    },

    {
        path: '/feature-category',
        name: 'featureCategoryRoute',
        component: FeatureCategoryView
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
