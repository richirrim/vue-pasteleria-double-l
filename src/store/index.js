import { createStore } from 'vuex'

export default createStore({
  state: {
    flavorsAccountant: 0,
    toppingsAccountant: 0,
    orderList: []
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
    },
    addOrdenInfo(state, orderInfo) {
      state.orderList.push(orderInfo)
      console.log(state.orderList)
    }
  },
  actions: {
  },
  modules: {
  }
})
