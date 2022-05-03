import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    counter: 0,
    ID_Color: 'red'
  },
  getters: {
    sqr(state){
      return state.counter * state.counter
    }
  },
  mutations: {
    addCount(state, RNG_Number){
      state.counter += RNG_Number
    },
    dropCount(state, RNG_Number){
      state.counter -= RNG_Number
    },
    setColor(state, newColor){
      state.ID_Color = newColor
    }
  },
  actions: {
    add_random_number({commit}){
      axios(
        'https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new'
      ).then(respuesta => {
        commit('addCount', respuesta.data)
      })
    },
    drop_random_number({commit}){
      axios(
        'https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new'
      ).then(respuesta => {
        commit('dropCount', respuesta.data)
      })
    }
  },
  modules: {
  }
})
