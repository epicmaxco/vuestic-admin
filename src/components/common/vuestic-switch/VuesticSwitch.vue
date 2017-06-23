<template>
  <div class="vuestic-switch">
    <div class="vuestic-switch-option true-option" :class="{'active': value}" @click.prevent="setValue(true)">
      <slot name="trueTitle"></slot>
    </div>
    <div class="vuestic-switch-option false-option" :class="{'active': !value}" @click.prevent="setValue(false)">
      <slot name="falseTitle"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      value: Boolean
    },
    mounted () {
      this.$emit('input', this.value)
    },
    methods: {
      setValue (newVal) {
        this.$emit('input', newVal)
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../sass/_variables.scss";

  .vuestic-switch {
    cursor: pointer;
    display: flex;
    flex-direction: row;

    .vuestic-switch-option {
      padding: 5px 38px;
      border-top: 2px solid transparent;
      border-bottom: 2px solid $brand-primary;
      background-color: transparent;
      transition: background-color 0.15s ease;

      &.active {
        color: $white;
        background-color: $brand-primary;
      }
    }
  }
</style>
