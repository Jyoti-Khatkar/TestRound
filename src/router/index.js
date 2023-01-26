import { createRouter, createWebHistory } from "vue-router";
import Login from '../components/Login.vue';
import Products from '../components/Products.vue';
import Cart from '../components/Cart.vue';
// import Layout from '../components/Layout.vue';
import NotFound from "../components/NotFound.vue";



const routes = [
    
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    // {
    // path: "/",
    // name: "Layout",
    // component: Layout,
    // // beforeEnter: guardMyroute,
    // children: [
    {
        path: "/cart",
        name: "Cart",
        component: Cart,
    },
    {
        path: "/",
        name: "Products",
        component: Products,
    },
// ],

    // },
    {
        path: '/:pathMatch(.*)*',
        name: "NotFound",
        component: NotFound,
      },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;
