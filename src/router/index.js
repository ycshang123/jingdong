import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('../views/home/HomePage.vue')
  },
  {
    path: '/cart',
    name: 'CartPage',
    component: () => import('../views/cart/CartPage.vue')
  },
  {
    path: '/order',
    name: 'OrderPage',
    component: () => import('../views/order/OrderPage.vue')
  },
  {
    path: '/personal',
    name: 'PersonPage',
    component: () => import('../views/personal/PersonalPage.vue')
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: () => import('../views/register/RegisterPage.vue')
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: () => import('../views/login/LoginPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
