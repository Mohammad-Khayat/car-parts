import Vue from 'vue'
import App from './App.vue'
import router from './router'
import bootstrapVue from 'bootstrap-vue';
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fortawesome/fontawesome-free/css/all.css'
import './assets/_custom.scss'
Vue.config.productionTip = false
Vue.use(bootstrapVue);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
