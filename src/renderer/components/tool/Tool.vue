<template>
<div class="main">
  <maintool v-if="this.isMain === true"></maintool>
  <span v-else-if="this.isDetail === true">하핫</span>
  <span v-else>실패</span>
</div>
</template>

<script>
import MainTool from './MainTool.vue'

import store from 'vuex'
import { mapGetters } from 'vuex'

export default {
  name: 'tool',
  components: {
    'maintool': MainTool
  },
  computed: {
    ...mapGetters({
      isMain: 'tool/isMain', isDetail: 'tool/isDetail'})
  }
}
</script>

<style lang="scss" scoped>
.main {
  overflow: scroll;
  overflow-x: hidden;
  box-shadow: -2px 0px 5px 0px rgb(165, 165, 165) inset;
  display: inline-block;
  height: 100%;
  background-color: rgb(223, 223, 223);
}

.main::-webkit-scrollbar {
  width: 10px;
  background-color: rgb(223, 223, 223); }
.main::-webkit-scrollbar-thumb {
  background: rgb(196, 196, 196); }
.main::-webkit-scrollbar-thumb:hover { 
  background: rgb(180, 180, 180); }
.main::-webkit-scrollbar-thumb:active { 
  background: rgb(163, 163, 163); }
.main::-webkit-scrollbar-button { display: none; }
</style>