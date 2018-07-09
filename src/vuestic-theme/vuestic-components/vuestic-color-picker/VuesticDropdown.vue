<template>
  <div class="vuestic-dropdown">
    <div class="vuestic-dropdown__toggle" @click="toggle()">
      <slot name="toggle"/>
    </div>
    <div v-if="isOpen">
      <div class="vuestic-dropdown__content">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vuestic-dropdown',
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    toggle () {
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<style lang="scss">
.vuestic-dropdown {
  &__toggle {
    position: relative;
  }

  &__content {
    position: absolute;
    padding-top: 20px;
    z-index: 1;
  }
}
</style>
