import { createStore } from 'vuex'

export default createStore({
  state: {
    flavorsAccountant: 0,
    toppingsAccountant: 0,
    orderList: [],
    users: [],
    username: null,
    auth: false
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
    },
    doLogin(state, username) {
      state.auth = true
      state.username = username
    },
    doLogout(state) {
      state.auth = false
      state.username = false
    }
  },
  actions: {
    doLogin({ commit }, username) {
      commit('doLogin', username)
    },
    doLogout({ commit }) {
      commit('doLogout')
    }
  },
  modules: {
  }
})
