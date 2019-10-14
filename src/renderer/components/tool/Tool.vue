<template>
<div class="main">
  <maintool></maintool>
</div>
</template>

<script>
import MainTool from './MainTool.vue'
import SetUp from './SetUp.vue'

export default {
  name: 'tool',
  components: {
    'maintool': MainTool,
    'setup': SetUp
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap');
.main {
  box-shadow: -2px 0px 5px 0px rgb(165, 165, 165) inset;
  display: inline-block;
  height: 100%;
  background-color: rgb(223, 223, 223);
}
</style>