import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  isLogin: false,
  isLoginError: false, //구역별 디테일화면
  token: '', //세팅화면
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
}