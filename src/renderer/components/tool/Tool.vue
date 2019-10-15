<template>
<div class="main">
  <maintool v-if="this.isMain === true"></maintool>
  <span v-else-if="this.isDetail === true">하핫</span>
</div>
</template>

<script>
import MainTool from './MainTool.vue'
import SetUp from './SetUp.vue'

import store from 'vuex'
import { mapGetters } from 'vuex'

export default {
  name: 'tool',
  components: {
    'maintool': MainTool,
    'setup': SetUp
  },
  computed: {
    ...mapGetters({
      isMain: 'tool/isMain', isDetail: 'tool/isDetail'})
  }
}
</script>

<style lang="scss" scoped>
.main {
  box-shadow: -2px 0px 5px 0px rgb(165, 165, 165) inset;
  display: inline-block;
  height: 100%;
  background-color: rgb(223, 223, 223);
}

</style>