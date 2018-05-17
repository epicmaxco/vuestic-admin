<template>
  <div class="menu-icon-container col">
    <a class="menu-icon" :class="{ 'i-menu-expanded': openedLocal, 'i-menu-collapsed': !openedLocal }"
       href="#" v-on:click="onClick"></a>
  </div>
</template>

<script>
  export default {
    name: 'header-selector',
    model: {
      prop: 'opened',
      event: 'çlick'
    },
    data () {
      return {
        openedLocal: this.model
      }
    },
    props: {
      opened: {
        type: Boolean
      }
    },
    methods: {
      onClick () {
        this.openedLocal = !this.openedLocal
        this.$emit('click', !this.openedLocal)
      }
    }
  }
</script>

<style lang="scss">

  .menu-icon-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

</style>
