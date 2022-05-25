import Vue from "vue";
import VueRouter from "vue-router";
import ButtonPage from "../views/ButtonPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: ButtonPage,
  },
  {
    path: "/components/buttons",
    name: "Button Page",
    component: ButtonPage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
