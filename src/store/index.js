import { createStore } from 'vuex'

export default createStore({
  state: {
    flavorsAccountant: 0,
    toppingsAccountant: 0
  },
  getters: {
    getFlavorCounter(state) {
      return state.flavorsAccountant
    },
    getToppingsCounter(state) {
      return state.toppingsAccountant
    }
  },
  mutations: {
    productsAccountant(state, {accountant, isChecked}) {
      if (isChecked) {
        state[accountant]++
      } else {
        state[accountant]--
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
