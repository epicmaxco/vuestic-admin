<template>
  <div class="color-dot">
    <div class="flex-container"
         :class="{'flex-container--selected': selected}"
    >
      <div
        @click="$emit('click')"
        class="dot"
        :style="{'background-color': color}"
      />
    </div>
  </div>
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
  .flex-container {
    &--selected {
      border-radius: 50%;
      border: solid 2px #34495e;
    }
    width: 24px;
    height: 24px;
    position: relative;
    .dot {
      width: 16px;
      height: 16px;
      position: absolute;
      top: 8%;
      right: 8%;
      float: left;
      cursor: pointer;
      margin-left: 5px;
      border-radius: 50%;
    }
  }

}
</style>
