<template>
  <div class="vuestic-accordion">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'vuestic-accordion',
  }
</script>

<style lang="scss">
  .vuestic-accordion {
    .btn {
      width: 100%;
      padding-left: 10px;
      border-radius: 0;
      text-align: left;
    }

    .vuestic-collapse__body {
      margin-top: 0;
    }
  }
</style>
