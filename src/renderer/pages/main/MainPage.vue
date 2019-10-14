<template>
<div class="main">
  <intool class="main__intool"></intool>
  <inmap class="main__inmap"></inmap>
</div>
</template>

<script>
import Tool from './../../components/tool/Tool.vue'
import Map from './../../components/map/Map.vue'

export default {
  components: {
    'intool': Tool,
    'inmap': Map
  },
}
</script>

<style lang="scss" scoped>
.main {
  height: 100%;
  display: flex;
  flex-direction: row;

  &__intool {
  height: 100%;
  display: inline-block;
  width: 30%;
  }

  &__inmap {
  height: 100%;
  display: inline-block;
  width: 70%;
 }
}
</style>