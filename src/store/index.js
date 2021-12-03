import Vue from 'vue'
import Vuex from 'vuex'
import admin from './admin'
import auth from './auth';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    ...admin,
    auth
  }
})
