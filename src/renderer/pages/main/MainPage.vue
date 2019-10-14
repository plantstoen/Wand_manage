<template>
<div class="main">
  <tool class="tool"></tool>
  <inmap class="map"></inmap>
</div>
</template>

<script>
import Tool from './../../components/tool/Tool.vue'
import InMap from './../../components/map/InMap.vue'

export default {
  components: {
    'tool': Tool,
    'inmap': InMap
  },
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: row;
}
.tool {
  display: flex;
  width: 30%;
}
.map {
  display: flex;
  width: 70%;
}
</style>