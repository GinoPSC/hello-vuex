import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0
  },
  getters: {
  },
  mutations: {
    addCount(state){
      state.counter++
    },
    dropCount(state){
      state.counter--
    }
  },
  actions: {
  },
  modules: {
  }
})
