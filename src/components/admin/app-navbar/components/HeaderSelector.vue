<template>
  <span class="header-selector"
       :class="{ 'i-menu-expanded': !value, 'i-menu-collapsed': value }"
       @click="onClick()"
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
    },
    methods: {
      onClick () {
        this.$emit('input', !this.value)
      }
    }
  }
</script>

<style lang="scss">

  .header-selector {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

</style>
