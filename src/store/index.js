import { createStore } from 'vuex'

export default createStore({
  state: {
    flavorsAccountant: 0,
    toppingsAccountant: 0
  },
  getters: {
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
