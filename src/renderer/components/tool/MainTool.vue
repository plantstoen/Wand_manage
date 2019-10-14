<template>
<div>
  <span>테스트</span><br>
  <span>음{{test}}</span><br>
  <span>{{datatest}}</span>
  <span @click="$router.push({name: 'login_page'})">뒤로가기</span>
</div>
</template>

<script>
import store from 'vuex'
import {mapState, mapGetters} from 'vuex'
export default {
}
</script>

<style>

</style>