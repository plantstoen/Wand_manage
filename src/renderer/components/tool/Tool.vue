<template>
<div class="main">
  <span @click="$router.push({name: 'login_page'})">뒤로가기</span><br>
  <span>대웅경영개발원</span>
</div>
</template>

<script>
export default {
  name: 'tool'
}
</script>

<style lang="scss" scoped>
.main {
  display: inline-block;
  height: 100%;
  background-color: red;
}
</style>