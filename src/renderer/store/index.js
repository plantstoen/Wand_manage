import Vue from 'vue';
import Vuex from 'vuex';
import FirstModule from './modules/first'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    rootdata: 'root'
  },
  modules: {
    b: FirstModule
  },
  strict: true
});
