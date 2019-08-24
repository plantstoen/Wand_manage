<script>
  export default {
    name: 'Login_page',
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      },
      login_funtion(userId,password) {
        alert(userId, password)
      }
    },
    data() {
      return {
        id: null,
        pw: null
      }
    },
  }
</script>

<template>
  <div id="app">
    <div class="top">
      <img src="@/assets/Wand_logo.png" id='applogo'>
      <div class="loginbox">
        <img src="@/assets/Wand_textlogo.png" width="200em" id="textlogo">
        <input type="text" name="ID" placeholder="id" class="loginbox__inputbox" v-model="id">
        <input type="password" name="ID" placeholder="password" class="loginbox__inputbox" v-model="pw">
        <button type="button" class="loginbox__button" @click="login_funtion(id, pw)">로그인</button>
        <div class="account">
          <span class="loginbox__text">등록된 건물이 없나요?</span>
          <span @click="$router.push({name: 'create_account'})" id="create_msg">회원가입하기</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top{
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10em;
}
.loginbox{
  display: flex;
  flex-direction: column;
  padding-top: 1em;
  &__inputbox {
    margin-top: 0.2em;
    margin-bottom: 0.2em;
    height: 3em;
    border-radius: 1em;
    border: 0.1em solid rgb(189, 186, 186);
    outline-style: none;
    padding-left: 1em;
  }
  &__button{
    border: 0.1em solid white;
    border-radius: 1em;
    font-weight: bold;
    color: gray;
    width: 22em;
    height: 3em;
    outline-style: none;
    &:hover{
      background-color: rgba(142, 234, 170, 0.575);
      color: gray;
      font-weight: bold;
    }
  }
}
#textlogo{
  margin-left: 1em;
}
#create_msg{
  border: none;
  background-color: white;
  color: gray;
  &:hover {
    cursor: pointer;
    color: rgb(44, 218, 96);
  }
  margin-left: 1.9em;
}
</style>