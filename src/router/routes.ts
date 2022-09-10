import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Home from "../pages/Home.vue";
import Auth from "../pages/Login.vue";

export const ROUTES: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/auth",
    name: "auth",
    component: Auth,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: ROUTES,
});

export default router;
