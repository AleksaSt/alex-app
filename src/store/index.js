import Vue from 'vue'
import Vuex from 'vuex'
import { AuthStore } from './AuthStore'
import { ShopsStore } from './ShopsStore'
import { ManagersStore } from './ManagersStore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    AuthStore,
    ShopsStore,
    ManagersStore
  }
})
