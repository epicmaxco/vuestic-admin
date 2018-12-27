<template>
  <div class="vuestic-tree-category">
    <div class="vuestic-tree-category__header"
         @click="isOpenCached = ! isOpenCached">
      <div class="vuestic-tree-category__header-checkbox">
        <square-with-icon :iconClass="checkboxIconClass"/>
      </div>
      <div class="vuestic-tree-category__header-icon"
           v-if="$slots.icon"
      >
        <slot name="icon"/>
      </div>
      <div class="vuestic-tree-category__header-label">
        {{ label }}
      </div>
    </div>

    <div class="vuestic-tree-category__list-container" v-if="isOpenCached">
      <div class="vuestic-tree-category__list-internal-container">
        <slot></slot>
      </div>
    </div>

  </div>
</template>

<script>
import SquareWithIcon from './vuestic-div-checkbox/SquareWithIcon.vue'
import VuesticCheckbox from '../vuestic-checkbox/VuesticCheckbox'

export default {
  name: 'vuestic-tree-category',
  components: { SquareWithIcon, VuesticCheckbox },
  data () {
    return {
      isOpenCached: false,
    }
  },
  watch: {
    isOpen: {
      handler (isOpen) {
        this.isOpenCached = isOpen
      },
      immediate: true,
    },
  },
  props: {
    label: {
      type: [String, Number],
      default: '',
    },
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    checkboxIconClass () {
      return this.isOpenCached ? 'ion ion-md-remove' : 'ion ion-md-add'
    },
  },
  methods: {
    /**
     * @public
     */
    collapse () {
      this.isOpenCached = false
      this.$nextTick(() => {
        this.$children.forEach(child => {
          if (child.$options.name === 'vuestic-tree-category') {
            child.collapse()
          }
        })
      })
    },
    /**
     * @public
     */
    expand () {
      this.isOpenCached = true
      this.$nextTick(() => {
        this.$children.forEach(child => {
          if (child.$options.name === 'vuestic-tree-category') {
            child.expand()
          }
        })
      })
    },
  },
}
</script>

<style lang="scss">
.vuestic-tree-category {
  &__header {
    cursor: pointer;
    display: flex;
  }
  &__header-checkbox {
    margin-right: 0.75rem;
  }
  &__header-icon {
    margin-right: 0.375rem;
  }
  &__header-label {
    word-wrap: break-word;
    overflow: hidden;
  }
  &__list-container {
    margin-top: 0.625rem;
    padding-left: 0.6875rem;
  }
  &__list-internal-container {
    border-left: dashed 0.0625rem $lighter-gray;
    padding-left: 1.5rem;
  }
  // List items require padding. Somewhat hacky, but the only remaining option is using render functions.
  .vuestic-tree-category + .vuestic-tree-category, .vuestic-tree-node + .vuestic-tree-node, .vuestic-tree-category + .vuestic-tree-node, .vuestic-tree-node + .vuestic-tree-category {
    margin-top: 0.625rem;
  }
}
</style>
