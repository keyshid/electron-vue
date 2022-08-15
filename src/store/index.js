import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    payment: [],
  },
  mutations: {
    savepay(state, pay) {
      state.peyment = pay

    }
  },
  actions: {
    savepay({ commit }, pay) {
      commit('savepay', pay)
    },
  },
  getters: {
    getpay: state => state.payment,
  },
  modules: {
  }
})
