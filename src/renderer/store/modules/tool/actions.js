import router from './../../../router/index.js'

const getProducts = () => {
  alert('sucess_action')
};

// Option페이지 열때 작동시키는 액션
const openOption = () => {
  router.push({name: 'option'})
  commit(CHANGE_OPTION)  
};

export default {
  getProducts,
  openOption
};