<template>
  <div id="app">
    <img src="./assets/images/logo.png">
    <router-view></router-view>
  </div>
</template>
<style lang="scss">
  @import "base";
  #app {
    margin-top: 60px;
    color: $color-primary;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    text-align: center;
  }

</style>
<script>
  export default {}
</script>
