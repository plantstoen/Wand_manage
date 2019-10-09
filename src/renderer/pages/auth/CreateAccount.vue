<template>
<div>
<div id="main">
  <span @click="$router.push({name: 'login_page'})" id="backward">뒤로가기</span>
  <div class="inputform">
    <input type="text" name="ID" placeholder="Id를 입력해주세요" class="inputform__inputbox" v-model="id">
    <input type="password" name="ID" placeholder="비밀번호를 입력해주세요" class="inputform__inputbox" v-model="pw">
    <input type="password" name="ID" placeholder="비밀번호를 다시 입력해주세요" class="inputform__inputbox" v-model="pw">
  </div>
  <span>가입시 필요한 이메일 인증입니다</span>
    <div class="emailconfirm">
      <input type="text" name="ID" placeholder="이메일을 입력해주세요" class="emailconfirm__inputbox" v-model="id">
      <button type="button" class="emailconfirm__sendbutton">send</button>
    </div>
  <button @click="$router.push({name: 'select_map'})">내 건물 찾기</button>
</div>
</div>    
</template>

<style lang="scss" scoped>
@import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css);

#main{
  width: 30%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: auto;
}
#backward{
  font-weight: 700;
  font-family: 'NanumSquare', sans-serif;
  border: none;
  background-color: white;
  color: gray;
  &:hover {
    cursor: pointer;
    color: rgba(44, 218, 96, 0.61);
  }
  margin-left: 1.9em;
}
.inputform{
  width: 100%;
  margin-top: 3em;
  margin-bottom: 3em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__inputbox {
    width: 100%;
    height: 3em;
    border-radius: 1em;
    border: 0.1em solid rgb(189, 186, 186);
    outline-style: none;
    padding-left: 1em;
    margin-top: 0.3em;
    margin-bottom: 0.3em;
    &:focus{
      border: 0.2em solid rgba(12, 202, 69, 0.295);
    }
  }
  &__sendbutton{
    border: 0.1em solid white;
    border-radius: 1em;
    font-weight: bold;
    color: gray;
    width: 2em;
    height: 3em;
    outline-style: none;
    &:hover{
      background-color: rgba(142, 234, 170, 0.575);
      color: gray;
      font-weight: bold;
    }
    &:focus{
      background-color: rgba(142, 234, 170, 0.575);
      color: gray;
      font-weight: bold;  
    }
  }
}
.emailconfirm{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &__inputbox {
    width: 100%;
    height: 3em;
    border-radius: 1em;
    border: 0.1em solid rgb(189, 186, 186);
    outline-style: none;
    padding-left: 1em;
    margin-top: 0.3em;
    margin-bottom: 0.3em;
    &:focus{
      border: 0.2em solid rgba(12, 202, 69, 0.295);
    }
  }
}
</style>

<script>
export default {

}
</script>

