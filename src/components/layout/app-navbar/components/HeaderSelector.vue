<template>
  <div class="header-selector-container" v-on:click="onClick">
    <i :class="{ 'i-menu-expanded': !openedLocal, 'i-menu-collapsed': openedLocal }"></i>
  </div>
</template>

<script>
  export default {
    name: 'header-selector',
    data () {
      return {
        openedLocal: true
      }
    },
    methods: {
      onClick () {
        this.openedLocal = !this.openedLocal
        this.$emit('click', this.openedLocal)
      }
    }
  }
</script>

<style lang="scss">

  .header-selector-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>
