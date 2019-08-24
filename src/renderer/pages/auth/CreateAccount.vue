<template>
<div>
  <span @click="$router.push({name: 'login_page'})" id="backward">뒤로가기</span>
  <div class="inputform">
    <input type="text" name="ID" placeholder="Id를 입력해주세요" class="inputform__inputbox" v-model="id">
    <input type="password" name="ID" placeholder="비밀번호를 입력해주세요" class="inputform__inputbox" v-model="pw">
    <input type="password" name="ID" placeholder="비밀번호를 다시 입력해주세요" class="inputform__inputbox" v-model="pw">
  </div>
  <button @click="$router.push({name: 'select_map'})">내 건물 찾기</button>
</div>    
</template>

<style lang="scss" scoped>
#backward{
  font-weight: 700;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__inputbox {
    margin-top: 0.2em;
    margin-bottom: 0.2em;
    height: 3em;
    border-radius: 1em;
    border: 0.1em solid rgb(189, 186, 186);
    outline-style: none;
    padding-left: 1em;
  }
}
</style>

<script>
export default {

}
</script>

