export default {
  namespaced: true,
  actions: {
    incrementOdd(ctx, payload) {
      if (ctx.state.count % 2 === 0) {
        ctx.commit('INCREMENT', payload)
      }
    },
    incrementAsync(ctx, payload) {
      setTimeout(() => {
        ctx.commit('INCREMENT', payload)
      }, 1000)
    }
  },
  mutations: {
    INCREMENT(state, payload) {
      state.count += payload.num
    },
    DECREMENT(state, payload) {
      state.count -= payload.num
    }
  },
  state: {
    count: 0
  },
  getters: {
    count10(state) {
      return state.count * 10
    }
  }
}