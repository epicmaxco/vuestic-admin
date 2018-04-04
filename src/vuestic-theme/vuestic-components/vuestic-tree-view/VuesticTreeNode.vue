<template>
  <div class="vuestic-tree-node"
       :class="{'vuestic-tree-node--selected': selected}"
  >
    <div class="vuestic-tree-node__checkbox" v-if="$slots.checkbox">
      <slot name="checkbox"></slot>
    </div>
    <div class="vuestic-tree-node__icon" v-if="$slots.icon">
      <slot name="icon"></slot>
    </div>
    <div class="vuestic-tree-node__label">
      <slot/>
    </div>
  </div>
</template>

<script>
  import VuesticDivCheckbox from './vuestic-div-checkbox/VuesticDivCheckbox.vue'

  export default {
    name: 'vuestic-tree-node',
    components: {
      VuesticDivCheckbox
    },
    props: {
      selected: {
        type: Boolean,
        default: false,
      }
    },
  }
</script>

<style lang="scss">
  @import "../../../sass/variables";

  .vuestic-tree-node {
    display: flex;
    &__checkbox {
      margin-right: 0.75rem;
    }
    &__icon {
      margin-right: 0.375rem;
    }
    &__label {
      word-wrap: break-word;
      overflow: hidden;
    }
    &--selected #{&}__label {
      background-color: $vue-light-green;
    }
  }
</style>

