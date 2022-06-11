import Vue from 'vue'
import Vuex from 'vuex'
import countAbout from './modules/count'
import todosAbout from './modules/todos'
import myPlugins from '@/plugins/myPlugins'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    countAbout,
    todosAbout
  },
  plugins: [myPlugins]
})
