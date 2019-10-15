<template>
<div class="area">
  <div class="header">
    <span class="header__name">대웅경영개발원</span><br>
    <span class="header__address">경기 용인시 처인구 포곡읍 두계로 72</span><br>
  </div>
  <div class="search">
    <input type="text" class="search__textinput" placeholder="찾으시는게 있나요?">
    <button class="search__button">검색</button>
  </div>
  <div class="option">
    <span class="newtap__option">환경설정</span><br>
  </div>
  <div>
    <span class="newtap__ad">광고</span>
  </div>
  <span>음{{test}}</span>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <span id="logout" @click="$router.push({name: 'login_page'})">로그아웃</span>
</div>
</template>

<!--넣어야되는것
:건물이름
:주소
:검색
:환경설정_새탭열기
:투표(세로뷰)
:문의(세로뷰)
:공지(세로뷰)
:광고_새탭열기
:독스(세로뷰)
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
  margin-top: 1em;
}

//NOTE   
.header {
  margin-top: 0.3em;
  margin-left: 0.1em;

  &__name {
    font-size: 1.5em;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 900;
  }
  
  &__address {
    font-size: 1em;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 400;
    color: gray;
  }
}

//NOTE 
.search {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  margin-top: 1em;
  height: 2em;

  &__textinput {
    background-color: rgb(206, 206, 206);
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
    font-weight: 100;
    width: 6em;
    color: white;
    background-color: rgb(167, 167, 167);
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

//NOTE 
.newtap {
  margin-top: 1em;

  &__option {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 1em;
    color: gray;

    &:hover {
      cursor: pointer;
    }
  }

  &__ad {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 1em;
    color: gray;

    &:hover {
      cursor: pointer;
    }
  }
}

//NOTE 
#logout {
  transition-property: background-color, color;
  transition-duration: 150ms;
  transition-timing-function: ease-out;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1em;
  font-weight: 500;
  color: gray;
  margin-left: 0.1em;
  
  &:hover {
    transition-property: background-color, color;
    transition-duration: 150ms;
    transition-timing-function: ease-out;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 1em;
    font-weight: 500;
    color: #43BB9C;
    cursor: pointer;
  }
}
</style>