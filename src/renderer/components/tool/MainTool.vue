<template>
<div class="area">
  <span id="hadder">대웅경영개발원</span><br>
  <span id="address">경기 용인시 처인구 포곡읍 두계로 72</span><br>
  <div class="search">
    <input type="text" class="search__textinput" placeholder="찾으시는게 있나요?">
    <button class="search__button">검색</button>
  </div>
  <span>음{{test}}</span><br>
  <span @click="$router.push({name: 'login_page'})">뒤로가기</span>
</div>
</template>

<!--넣어야되는것
:건물이름
:검색
:환경설정
:투표
:문의
:공지
:광고
:독스
-->

<script>
import store from 'vuex'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({test:'tool/isMain'})
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap');
.area {
  padding: 1.3em;
}

.search {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  margin-top: 1em;
  height: 2em;

  &__textinput {
    display: flex;
    padding-left: 0.5em;
    width: 100%;
    border: 0;
    border-radius: 5px 0px 0px 5px / 5px 0px 0px 5px;
    outline-style: none;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 15px;
  }
  
  .search__textinput::placeholder {
      font-family: 'Noto Sans KR', sans-serif;
      font-size: 15px;
      color: gray;
      padding-top: auto;
      padding-bottom: auto;
    }

  &__button {
    transition-property: background-color, color;
    transition-duration: 150ms;
    transition-timing-function: ease-out;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 15px;
    width: 6em;
    color: white;
    background-color: gray;
    border: 0;
    border-radius: 0px 5px 5px 0px / 0px 5px 5px 0px;
    outline-style: none;
    
    &:hover {
      transition-property: background-color, color;
      transition-duration: 150ms;
      transition-timing-function: ease-out;
      background-color: #43BB9C;
    }

    &:focus {
      transition-property: background-color, color;
      transition-duration: 150ms;
      transition-timing-function: ease-out;
      background-color: #43BB9C;
    }
  }
}

#hadder {
  font-size: 1.5em;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 900;
  margin-left: 0.1em;
}

#address {
  font-size: 1em;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  margin-left: 0.1em;
  color: gray;
}
</style>