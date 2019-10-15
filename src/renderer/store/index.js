import Vue from 'vue';
import Vuex from 'vuex';
import Tool from './modules/tool'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    rootdata: 'root'
  },
  modules: {
    tool: Tool
  },
  strict: true
});
