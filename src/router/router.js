import Vue from "vue";
import VueRouter from "vue-router";
import admin from "./admin.js";
import {isLogedIn} from '@/store/auth'
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "admin",
    redirect: "/admin",
  },
  {
    path: "/admin",
    component: () => import("../views/admin"),
    children: admin,
    meta: {
      pageTitle: "الرئيسية",
    },
  },

  {
    path: "/login",
    name: "Login",
    component: () => import("../views/auth/Login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/auth/Register.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});
router.beforeEach((to, from, next) => {
   if (to.name !== 'Login' && !isLogedIn()) next({ name: 'Login' })
   if(to.name =='Login' && isLogedIn()) next({name:'admin'})
   next()
})
export default router;
