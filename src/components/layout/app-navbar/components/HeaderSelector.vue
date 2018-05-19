<template>
  <div class="header-selector-container"
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

  .header-selector-container {
    display: flex;
    justify-content: center;
    align-items: center;
    i:hover {
      cursor: pointer;
    }
  }

</style>
