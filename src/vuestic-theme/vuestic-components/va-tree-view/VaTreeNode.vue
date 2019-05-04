<template>
  <div
    class="va-tree-node"
    :class="{'va-tree-node--selected': selected}"
  >
    <div class="va-tree-node__checkbox" v-if="$slots.checkbox">
      <slot name="checkbox"/>
    </div>
    <div class="va-tree-node__icon" v-if="$slots.icon">
      <slot name="icon"/>
    </div>
    <div class="va-tree-node__label">
      <slot/>
    </div>
    <div class="va-tree-node__icon-right" v-if="$slots.iconRight">
      <slot name="iconRight"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'va-tree-node',
  props: {
    selected: {
      type: Boolean,
    },
  },
}
</script>

<style lang="scss">
@import "../../vuestic-sass/resources/resources";

.va-tree-node {
  display: flex;
  align-items: center;

  .form-group {
    margin-bottom: 0px;
  }

  &__checkbox {
    margin-right: 0.5rem;
  }

  &__icon {
    margin-right: 0.375rem;
    color: $theme-blue-dark;
  }

  &__icon-right {
    margin-left: 0.375rem;
    color: $theme-blue-dark;
  }

  &__label {
    flex-grow: 1;
    word-wrap: break-word;
    overflow: hidden;
  }

  &--selected #{&}__label {
    background-color: $vue-light-green;
  }

  // HACK Checkbox for presentation page
  .va-checkbox {
    margin-bottom: 0;
    margin-top: -0.125rem;
    margin-right: -0.625rem;
  }
}
</style>
