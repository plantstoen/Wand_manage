import Vue from 'vue'
import Vuex from 'vuex'

import { createPersistedState, createSharedMutations } from 'vuex-electron'

import ToolLocation from './modules/ToolLocation.js'

Vue.use(Vuex)

export default new Vuex.Store({
  namespace: true,
  state: {
    datatest: 'mainvuex'
  },
  getters: {
    getTest: (state) => {
      return state.datatest
    }
  },
  modules: {
    a: ToolLocation
  },
  plugins: [
    createPersistedState(),
    createSharedMutations()
  ],
  //strict 키면 state가 mutation 핸들러 외부에서 변경될때마다 오류발생시킴 
  //strict: process.env.NODE_ENV !== 'production'
})
