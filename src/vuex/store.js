import Vue from 'vue'
import Vuex from 'vuex'
import headline from './modules/headline'

Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  modules: {
    headline
  }
})
