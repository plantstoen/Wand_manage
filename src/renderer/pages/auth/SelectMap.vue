<template>
<div>
  <button @click="$router.push({name : 'create_account'})">뒤로가기</button>
  <div>
    <google-map class="googleMap"></google-map>
  </div>
</div>
</template>

<style lang="scss" scoped>
.googleMap{
  height: 500px;
}
</style>