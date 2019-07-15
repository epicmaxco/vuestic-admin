<template>
  <div
    class="va-button-group"
    :class="computedClass"
  >
    <slot/>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'va-button-group',
  props: {
    color: {
      type: String,
      default: 'primary',
    },
  },
  provide () {
    const parent = this
    return {
      va: new Vue({
        computed: {
          color () {
            return parent.color
          },
        },
      }),
    }
  },
  computed: {
    computedClass () {
      return {
        'va-button-group--large': this.large,
        'va-button-group--small': this.small,
        'va-button-group--normal': !this.large && !this.small,
      }
    },
  },
}
</script>

<style lang='scss'>
@import '../../vuestic-sass/resources/resources';

.va-button-group {
  display: flex;
  justify-content: stretch;
  margin: 0.375rem 0.5rem;

  &--small {
    border-radius: $btn-border-radius-sm;
  }

  &--large {
    border-radius: $btn-border-radius-lg;
  }

  &--normal {
    border-radius: $btn-border-radius-nrm;
  }

  .va-button {
    margin: 0;
  }

  & > .va-button:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 0;
  }

  & > .va-button + .va-button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left: 0;
  }
}
</style>
