import router from './../../../router/index.js'

const getProducts = () => {
  alert('sucess_action')
};

// Option페이지 열때 작동시키는 액션
const openOption = (context) => {
  context.commit('CHANGE_PAGE_OPTION')
  router.push({name: 'option'})
};

const openMaintool = (context) => {
  context.commit('CHANGE_PAGE_MAINTOOL')
  router.push({name: 'mainpage'})
}

export default {
  getProducts,
  openOption
};