// import Vue from 'vue'
import { GETCODE } from '../mutation-types'
import * as api from '../api'

// initial state
const state = {
  codeValue: ''
}

// getters
const getters = {
  codeValue: state => state.codeValue
}

// actions
const actions = {
  getCodeValue ({commit, state}, param) {
    api.getDemoText(param).then(res => {
      commit(GETCODE, res['data'])
    })
  }
}

// mutations
const mutations = {
  [GETCODE] (state, data) {
    state.codeValue = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
