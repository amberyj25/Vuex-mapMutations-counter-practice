import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count1: 0,
    count2: 25,
    count3: 25,
    count4: 50,
    count5: 150,
    count6: 150,
    count7: 200,
    count8: 250,
  },
  mutations: {
    counter1(state) {
      state.count1 += 25
    },
    counter2(state, payload) {
      state.count2 = state.count2 + payload
    },
    counter3(state, payload) {
      state.count3 += payload.num
    },
    counter4(state) {
      state.count4 += 25
    },
    counter5(state, payload) {
      state.count5 += payload.num
    },
    counter6(state, payload) {
      state.count6 = state.count6 + payload
    }
  },
  actions: {
    counter6(context, payload) {
      context.commit("counter6", payload)
    }
  },
  getters: {
    counter7(state) {
      return state.count7
    },
    counter8: state => state.count8
  }
})