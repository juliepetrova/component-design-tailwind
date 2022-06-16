import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import VueCodeHighlight from "vue-code-highlight";

Vue.use(VueCodeHighlight);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
