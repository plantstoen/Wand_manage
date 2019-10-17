<!--넣어야되는것
:건물이름 O
:주소 O
:검색 O
:환경설정_새탭열기 O
:문의(세로뷰)
:공지(세로뷰)
:투표(세로뷰)
:광고_새탭열기
:독스(세로뷰)
-->

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
  <div class="option" @click="openOption()">
    <!--환경설정 관련 이미지-->
    <span class="option__text">환경설정</span><br>
  </div>
  <div class="ad">
    <!--광고관련 이미지-->
    <span class="ad__text">광고</span>
  </div>
  <div class="feedback">
    <span class="feedback__title">최근 들어온 문의</span>
    <hr class="feedback__line">
    <ul>
      <li v-for="item in items">{{ item.text }}</li>
    </ul>
  </div>
  <span>음{{test}}</span>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <span id="logout" @click="$router.push({name: 'login_page'})">로그아웃</span>
</div>
</template>

<script>
import store from 'vuex'
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({test:'tool/isMain'})
  },
  methods: {
    ...mapActions({openOption: 'tool/openOption'})
  },
  data () {
    items: [
      { text: '첫번째 문의입니다'},
      { text: '이건 두번쨰 문의구요'},
      { text: '당연히 이건 세번째겠죠?'}
    ]
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
    background-color: rgb(240, 240, 240);
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
      cursor: pointer;
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
.option {
  padding-top: 0.3em;
  padding-bottom: 0.3em;
  margin-top: 1em;
  background-color: none;
  transition-property: background-color, color;
  transition-duration: 200ms;
  transition-timing-function: ease-out;
  border: 0;
  border-radius: 5px;

  &__text {
    padding-left: 1em;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 1em;
    color: gray;
  }
  
  &:hover {
    transition-property: background-color, color;
    transition-duration: 200ms;
    transition-timing-function: ease-out;
    cursor: pointer;
    background-color: rgb(211, 211, 211);
  }

  &:focus {
    transition-property: background-color, color;
    transition-duration: 200ms;
    transition-timing-function: ease-out;
    background-color: rgb(211, 211, 211);
  }
  
}

.ad {
  padding-top: 0.3em;
  padding-bottom: 0.3em;
  background-color: none;
  transition-property: background-color, color;
  transition-duration: 200ms;
  transition-timing-function: ease-out;
  border: 0;
  border-radius: 5px;

  &__text {
    padding-left: 1em;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 1em;
    color: gray;
  }

  &:hover {
    transition-property: background-color, color;
    transition-duration: 200ms;
    transition-timing-function: ease-out;
    cursor: pointer;
    background-color: rgb(211, 211, 211);
  }
  
  &:focus {
    transition-property: background-color, color;
    transition-duration: 200ms;
    transition-timing-function: ease-out;
    background-color: rgb(211, 211, 211);
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