import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  isMain: true,
  isDetail: false, //구역별 디테일화면
  isOption: false, //세팅화면
  isAd: false, //광고화면
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
}