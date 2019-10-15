<template>
<div>
  <span>테스트</span><br>
  <span>음{{test}}</span><br>
  <span @click="$router.push({name: 'login_page'})">뒤로가기</span>
</div>
</template>

<script>
import store from 'vuex'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({test:'tool/products'})
  }
}
</script>

<style>

</style>