<template>
  <div
    class="va-tree-node"
    :class="{'va-tree-node--highlighted': highlighted}"
  >
    <div class="va-tree-node__checkbox" v-if="$slots.checkbox">
      <slot name="checkbox"/>
    </div>
    <div class="va-tree-node__icon" v-if="icon">
      <va-icon :name="icon" :color="$themes['info']" :size="24"/>
    </div>
    <div class="va-tree-node__label">
      <slot/>
    </div>
    <div class="va-tree-node__icon-right" v-if="iconRight" :size="24">
      <va-icon :name="iconRight" :color="$themes['info']"/>
    </div>
  </div>
</template>

<script>
import VaIcon from '../va-icon/VaIcon'
export default {
  name: 'va-tree-node',
  components: { VaIcon },
  props: {
    highlighted: {
      type: Boolean,
    },
    icon: {
      type: String,
    },
    iconRight: {
      type: String,
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
    margin-bottom: 0;
  }

  &__icon {
    margin-right: .5rem;
  }

  &__icon-right {
    margin-left: .5rem;
  }

  &__label {
    flex-grow: 1;
    word-wrap: break-word;
    overflow: hidden;
  }

  &--highlighted #{&}__label {
    background-color: $vue-light-green;
  }
}
</style>
