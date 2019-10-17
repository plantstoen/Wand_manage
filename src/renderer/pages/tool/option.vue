<!--
건물이름수정
건물주소수정


-->
<template>
  <div class="area">
    <span @click="$router.push({name: 'mainpage'})">뒤로가기</span>
  </div>
</template>

<script>
import store from 'vuex'
import { mapGetters, mapActions } from 'vuex'
export default {
  methods : {
    ...mapActions({openMaintool: 'tool/openMaintool'})
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap');

.area {
  margin-left: 25%;
  margin-right: 25%;
  margin-top: 5em;
}
</style>