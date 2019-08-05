<template>
  <span
    class="flex-center header-selector"
    :class="`i-menu-${minimized ? 'collapsed' : 'expanded'}`"
    @click="$emit('update:minimized', !minimized)"

  />
</template>

<script>
export default {
  name: 'header-selector',
  props: {
    minimized: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.header-selector {
  cursor: pointer;
}

</style>
