import Vue from "vue";
import VueRouter from "vue-router";
import Showcase from "../views/Showcase.vue";
import ButtonPage from "../views/ButtonPage.vue";
import ButtonsRegular from "../components/buttons/regular.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/components",
    name: "Showcase",
    component: Showcase,
    children: [
      {
        path: "buttons",
        component: ButtonPage,
      },
    ],
  },
  {
    path: "/",
    name: "Dashboard",
    component: ButtonPage,
  },
  // {
  //   path: "/buttons",
  //   name: "Button Page",
  //   component: ButtonPage,
  // },
  {
    path: "/buttons/regular",
    name: "Buttons Page",
    component: ButtonsRegular,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
