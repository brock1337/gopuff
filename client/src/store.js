import Vue from 'vue'
import Vuex from 'vuex'
import httpService from './services/http-axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    user: {
      id: ''
    }
  },
  mutations: {
    updateOrder (state, products) {
      state.products = products
    }
  },
  actions: {
    fetchOrder ({ commit }) {
      // Make API Call
      let response = httpService.getOrder()
      commit('updateOrder', response.cart.products)
    }
  }
})
