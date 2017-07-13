<template>
  <div class="unauthorized-layout row">
    <div class="left-side col-lg-6 col-12">
      <router-view></router-view>
    </div>
    <div class="right-side col-lg-6 hidden-md-down">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UnauthorizedLayout'
  }
</script>

<style lang="scss">
  .unauthorized-layout {
    height: 100%;
    margin: 0;
    .right-side {
      background-color: #333333;
    }
    .left-side {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: white;
    }
  }
</style>
