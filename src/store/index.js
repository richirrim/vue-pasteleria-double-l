import { createStore } from 'vuex'

export default createStore({
  state: {
    flavorsAccountant: 0
  },
  getters: {
  },
  mutations: {
    productsAccountant(state, isChecked) {
      if (isChecked) {
        state.flavorsAccountant++
      } else {
        state.flavorsAccountant--
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
