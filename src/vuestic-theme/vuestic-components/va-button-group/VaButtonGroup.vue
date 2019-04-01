<template>
  <div class="va-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'va-button-group',
}
</script>

<style lang='scss'>
.va-button-group {
  display: flex;
  margin: 0.375rem 0.5rem;

  .va-button {
    margin: 0;
  }

  & > .va-button:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 0;
  }

  & > .va-button + .va-button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left: 0;
  }
}
</style>
