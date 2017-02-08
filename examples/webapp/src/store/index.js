import Vue from 'vue'
import Vuex from 'vuex'

import getCode from './modules/getCode'
Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    getCode
  }
})
