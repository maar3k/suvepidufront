import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CheckoutView from "@/views/CheckoutView.vue";
import NewUserView from "@/views/NewUserView.vue";
import ErrorView from "@/views/ErrorView.vue";

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
