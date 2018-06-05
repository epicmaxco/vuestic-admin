<template>
  <span class="header-selector"
       :class="{ 'i-menu-expanded': !value, 'i-menu-collapsed': value }"
       @click="$emit('input', !value)"
  />
</template>

<script>
  export default {
    name: 'header-selector',
    props: {
      value: {
        type: Boolean,
        required: true
      },
    }
  }
</script>

<style lang="scss">

  @import "../../../../sass/mixins";

  .header-selector {
    @include flex-center();
    cursor: pointer;
  }

</style>
