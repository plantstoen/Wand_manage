//옵션 페이지로 변경
const CHANGE_PAGE_OPTION = (state) => {
  alert('옵션 커밋 성공')
  state.isOption = true
  state.isMain = false
}

const CHANGE_PAGE_MAIN = (state) => {
  alert('메인툴 커밋 성공')
  state.isMain = true
  state.isOption = false
}


export default {
  CHANGE_PAGE_OPTION,
  CHANGE_PAGE_MAIN
};