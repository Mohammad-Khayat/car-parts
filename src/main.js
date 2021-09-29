import Vue from "vue";
import App from "./App.vue";
import router from "./router/router.js";
import bootstrapVue from "bootstrap-vue";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/_custom.scss";
import InputImage from './views/components/InputImage.vue';
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import specific icons */
import {
  faBuilding,
  faPlus,
  faUserSecret,
  faHouse,
  faBars,
  faGear,
  faAngleLeft,
  faAngleRight,
  faCoins,
  faStore,
  faUsers,
  faBorderAll,
  faListUl,
  faCar,
  faGears,
} from "@fortawesome/free-solid-svg-icons";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* add icons to the library */
library.add(
  faBuilding,
  faGears,
  faPlus,
  faUserSecret,
  faHouse,
  faBars,
  faGear,
  faAngleLeft,
  faAngleRight,
  faCoins,
  faUsers,
  faStore,
  faBorderAll,
  faListUl,
  faCar
);

/* add font awesome icon component */
Vue.component("fa", FontAwesomeIcon);
Vue.component('InputImage',InputImage)
Vue.config.productionTip = false;
Vue.use(bootstrapVue);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
