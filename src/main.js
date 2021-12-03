import Vue from "vue";
import App from "./App.vue";
import router from "./router/router.js";
import bootstrapVue from "bootstrap-vue";
import VueFormulate from "@braid/vue-formulate";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/_custom.scss";
import './global-components'
import "@braid/vue-formulate/themes/snow/snow.scss";
import '@/libs/toast'

Vue.config.productionTip = false;
Vue.use(bootstrapVue);
Vue.use(VueFormulate);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
