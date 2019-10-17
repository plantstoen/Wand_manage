import Vue from 'vue';
import Vuex from 'vuex';
import Tool from './modules/tool'
import Auth from './modules/auth'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tool: Tool,
    auth: Auth
  },
  //strict: true
});
