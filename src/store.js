import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count1: 0,
    count2: 25,
    count3: 25
  },
  mutations: {
    counter1(state) {
      state.count1 += 25
    },
    counter2(state, payload) {
      state.count2 = state.count2 + payload
    },
    counter3(state, payload) {
      state.count3 += payload.nums
    }
  }
})