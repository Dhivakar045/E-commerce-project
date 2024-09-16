import { createRouter, createWebHistory } from 'vue-router';

import ProductList from './components/ProductList.vue'; // Current Component

const routes = [
  {
    path: '/',
    name: 'ProductList',
    component: ProductList,
  },
//   {
//     path: '/product/:name',
//     name: 'ProductDetails',
//     component: ProductDetails,
//   }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
