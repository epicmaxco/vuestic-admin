<template>
  <div
    @click="$emit('click')"
    class="color-dot"
    :class="{'color-dot--selected': selected}"
    :style="{'background-color': color}"
  />
</template>

<script>
export default {
  name: 'color-dot',
  props: {
    color: {
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
  &--selected {
    border: solid 3px #6088b3;
  }
}
</style>
