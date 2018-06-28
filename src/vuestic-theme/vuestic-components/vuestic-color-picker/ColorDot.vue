<template>
  <div
    class="color-dot"
    :class="{'selected': selected}"
    :style="{background: value}"
  />
</template>

<script>
export default {
  name: 'color-dot',
  props: {
    value: {
      default: ''
    },
    selected: {
      type: Boolean,
      Default: false
    }
  }
}
</script>

<style lang="scss">
.color-dot {
  width: 15px;
  height: 15px;
  float: left;
  margin-bottom: 5px;
  cursor: pointer;
  margin-left: 10px;
  border-radius: 50%;
  &.selected {
    border: solid 3px #6088b3;
  }
}
</style>
