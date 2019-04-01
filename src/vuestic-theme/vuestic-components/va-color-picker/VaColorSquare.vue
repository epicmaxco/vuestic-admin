<template>
  <div
    class="va-color-square"
    :style="{'background-color': value}"
  />
</template>

<script>
export default {
  name: 'va-color-square',
  props: {
    value: {
      required: true,
    },
  },
}
</script>

<style lang='scss'>
@import "../../vuestic-sass/resources/resources";

.va-color-square {
  height: 48px;
  width: 48px;
  border: 1px solid $gray-light;
}
</style>
