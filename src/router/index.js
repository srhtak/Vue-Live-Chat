import { createRouter, createWebHistory } from "vue-router";
import Welcome from "../views/Welcome.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
