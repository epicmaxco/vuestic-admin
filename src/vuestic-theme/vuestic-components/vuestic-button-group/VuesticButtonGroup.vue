<template>
  <div class="vuestic-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vuestic-button-group'
}
</script>

<style lang='scss'>
  .vuestic-button-group {
    display: flex;
    margin: 6px 8px;

    .vuestic-button {
      margin: 0;
    }

    & > .vuestic-button:not(:last-child) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-right: 0;
    }

    & > .vuestic-button + .vuestic-button {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-left: 0;
    }
  }
</style>
