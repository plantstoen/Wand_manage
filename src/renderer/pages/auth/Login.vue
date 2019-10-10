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
        <!--img src="@/assets/Wand_textlogo.png" width="200em" id="textlogo"-->
        <input type="text" name="ID" placeholder="id" class="loginbox__inputbox" v-model="id">
        <input type="password" name="ID" placeholder="password" class="loginbox__inputbox" v-model="pw">
        <button type="button" class="loginbox__button" @click="login_funtion(id, pw)">Login</button>
        <span id="forgot">forgot the password?</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap');
.top{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10em;
}

.loginbox{
  display: flex;
  flex-direction: column;
  
  &__inputbox {
    transition-property: background-color, color;
    transition-duration: 400ms;
    transition-timing-function: ease-out;
    margin-top: 0.2em;
    margin-bottom: 0.2em;
    height: 3em;
    border-radius: 1em;
    border: 0.1em solid rgb(189, 186, 186);
    outline-style: none;
    padding-left: 1em;
    font-family: 'Noto Sans KR', sans-serif;
    
    &:focus{
      transition-property: background-color, color;
      transition-duration: 400ms;
      transition-timing-function: ease-out;
      border: 0.1em solid #43BB9C;
    }
  }
  
  &__button{
    transition-property: background-color, color;
    transition-duration: 150ms;
    transition-timing-function: ease-out;
    border: 0.1em solid white;
    border-radius: 1em;
    color: rgb(196, 196, 196);
    width: 22em;
    height: 3em;
    outline-style: none;
    
    &:hover{
      color: white;
      transition-property: background-color, color;
      transition-duration: 150ms;
      transition-timing-function: ease-out;
      background-color: #43BB9C;  
    }
    
    &:focus{
      background-color: #43BB9C;
      transition-property: background-color, color;
      transition-duration: 150ms;
      transition-timing-function: ease-out;
      color: white;  
    }

  }
}

#create_msg{
  border: none;
  background-color: white;
  color: gray;
  
  &:hover {
    cursor: pointer;
    color: rgba(29, 216, 85, 0.856);
  }
  margin-left: 1.9em;
}

#forgot {
  margin-left: auto;
  font-family: 'Noto Sans KR', sans-serif;
  transition-property: background-color, color;
  transition-duration: 150ms;
  transition-timing-function: ease-out;
  color: rgb(196, 196, 196);
  
  &:hover{
    color: #43BB9C;
    transition-property: background-color, color;
    transition-duration: 150ms;
    transition-timing-function: ease-out;
    cursor: pointer;  
  }
}
</style>