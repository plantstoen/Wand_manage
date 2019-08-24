<template>
<div>
  <span>뒤로가기</span>
  <button @click="$router.push({name: 'login_page'})">이전</button>
  <button @click="$router.push({name: 'select_map'})">내 건물 찾기</button>
</div>    
</template>

<style lang="scss" scoped>

</style>

<script>
export default {

}
</script>

