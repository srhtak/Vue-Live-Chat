import { createRouter, createWebHistory } from "vue-router";
import Welcome from "../views/Welcome.vue";
import ChatRoom from "../views/ChatRoom.vue";
import Auth from "../views/Auth.vue";
import { projectAuth } from "@/firebase/config";

const noRequireAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (user) {
    next({ name: "ChatRoom" });
  } else {
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
    beforeEnter: noRequireAuth,
  },
  {
    path: "/chatroom",
    name: "ChatRoom",
    component: ChatRoom,
  },
  {
    path: "/auth",
    name: "Auth",
    component: Auth,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
