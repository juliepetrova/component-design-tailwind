import Vue from "vue";
import VueRouter from "vue-router";
import Showcase from "../views/Showcase.vue";
import ButtonPage from "../views/ButtonPage.vue";
import CardPage from "../views/CardPage.vue";
import InputPage from "../views/InputPage.vue";
import AccordionPage from "../views/AccordionPage.vue";
import NavigationPage from "../views/NavigationPage.vue";
import ModalPage from "../views/ModalPage.vue";
import TablePage from "../views/TablePage.vue";
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
      {
        path: "cards",
        component: CardPage,
      },
      {
        path: "inputs",
        component: InputPage,
      },
      {
        path: "accordion",
        component: AccordionPage,
      },
      {
        path: "navigation",
        component: NavigationPage,
      },
      {
        path: "modals",
        component: ModalPage,
      },
      {
        path: "tables",
        component: TablePage,
      },
    ],
  },
  {
    path: "/",
    name: "Dashboard",
    component: ButtonPage,
  },
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
