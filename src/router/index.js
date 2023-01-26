import { createRouter, createWebHistory } from "vue-router";
import Login from '../components/Login.vue';
import Products from '../components/Products.vue';
import Cart from '../components/Cart.vue';
import Layout from '../components/Layout.vue';
import NotFound from "../components/NotFound.vue";

function checkForLogin(to, from, next) {
    const user = localStorage.getItem("UserDetail");
    if (user) {
      const data = JSON.parse(user);
      if (data.username) {
        next("/");
      }
      else {
        next();
      }
    }
    else {
      next();
    }
  }
function guardMyroute(to, from, next) {
    const user = localStorage.getItem("UserDetail");
    console.log(user,'user');
    if (user) {
      const data = JSON.parse(user);
      if (data.username) {
        next();
      }
      else {
        next("/login")
      }
    } else {
      next("/login");
    }
  }

const routes = [
    
    {
      path: "/login",
      name: "Login",
      beforeEnter: checkForLogin,
      component: Login,
    },
    {
    path: "/",
    name: "Layout",
    component: Layout,
    beforeEnter: guardMyroute,
    children: [
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
],

    },
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
