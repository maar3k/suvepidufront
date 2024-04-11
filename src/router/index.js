import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CheckoutView from "@/views/CheckoutView.vue";
import NewUserView from "@/views/NewUserView.vue";

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
