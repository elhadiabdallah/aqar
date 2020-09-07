import Vue from "vue";
import VueRouter from "vue-router";
import Aqar from "../views/Aqar.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import SignUp from "../views/SignUp.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Aqar",
    component: Aqar
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
