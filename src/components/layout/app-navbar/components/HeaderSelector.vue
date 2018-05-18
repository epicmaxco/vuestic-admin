<template>
  <div class="header-selector-container"
       :class="{ 'i-menu-expanded': !openedLocal, 'i-menu-collapsed': openedLocal }" v-on:click="onClick">
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
    i:hover {
      cursor: pointer;
    }
  }

</style>
