<template>
  <div>
    <div class="vuestic-color-picker">
      <div class="col-sm-12 col-md-6 col-lg-6 text-center">
        <div class="list-group-horizontal">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='scss' scoped>
  export default {
    name: 'vuestic-color-picker',
  }
</script>

<style lang='scss'>
  .dot {
    margin-left: 10px;
    height: 25px;
    width: 25px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
  }
</style>
