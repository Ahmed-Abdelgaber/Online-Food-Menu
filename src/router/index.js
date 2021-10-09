import Home from "../components/Home";
import signUp from "../components/signUp";
import logIn from "../components/logIn";
import Add from "../components/Add";
import update from "../components/update";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "Home",
    component: Home,
    path: "/",
  },
  {
    name: "signUp",
    component: signUp,
    path: "/signup",
  },
  {
    name: "logIn",
    component: logIn,
    path: "/login",
  },
  {
    name: "Add",
    component: Add,
    path: "/add",
  },
  {
    name: "Update",
    component: update,
    path: "/update/:section/:id",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
