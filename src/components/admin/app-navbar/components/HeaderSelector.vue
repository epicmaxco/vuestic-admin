<template>
  <span class="header-selector i-menu-expanded"
        @click="$emit('update:isOpen', !isOpen)"
  />
</template>

<script>
export default {
  name: 'header-selector',
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
  }
}
</script>

<style lang="scss">
  .header-selector {
    @include flex-center();
    cursor: pointer;
  }

</style>
