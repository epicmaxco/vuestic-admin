<template>
  <div class="va-tree-category">
    <va-tree-node
      @click.native="isOpenCached = !isOpenCached"
      class="va-tree-category__header"
      >
      <div slot="checkbox">
        <square-with-icon
        :iconClass="`ion ion-md-${isOpenCached ? 'remove' : 'add'}`"
        :color="va.color || colorComputed"
        />
      </div>
      <template slot="icon">
        <slot name="icon"/>
      </template>
      <div class="va-tree-category__header-label">
        {{ label }}
      </div>
    </va-tree-node>

    <div class="va-tree-category__list-container" v-if="isOpenCached">
      <div class="va-tree-category__list-internal-container">
        <slot/>
      </div>
    </div>

  </div>
</template>

<script>
import { ColorThemeMixin } from '../../../services/ColorThemePlugin'
import SquareWithIcon from './SquareWithIcon/SquareWithIcon.vue'
import VaCheckbox from '../va-checkbox/VaCheckbox'
import VaTreeNode from './VaTreeNode'

export default {
  name: 'va-tree-category',
  mixins: [ ColorThemeMixin ],
  components: { VaTreeNode, SquareWithIcon, VaCheckbox },
  inject: {
    va: {
      default: () => ({}),
    },
  },
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
  methods: {
    /**
     * @public
     */
    collapse () {
      this.isOpenCached = false
      this.$nextTick(() => {
        this.$children.forEach(child => {
          if (child.$options.name === 'va-tree-category') {
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
          if (child.$options.name === 'va-tree-category') {
            child.expand()
          }
        })
      })
    },
  },
}
</script>

<style lang="scss">
@import "../../vuestic-sass/resources/resources";

.va-tree-category {
  &__header {
    cursor: pointer;
    display: flex;
  }

  &__header-icon {
    margin-right: .375rem;
  }

  &__header-label {
    word-wrap: break-word;
    overflow: hidden;
  }

  &__list-container {
    margin-top: .625rem;
    padding-left: .6875rem;
  }

  &__list-internal-container {
    background-image: linear-gradient($gray 33%, rgba(255,255,255,0) 0%);
    background-position: left;
    background-size: 1px 3px;
    background-repeat: repeat-y;
    padding-left: 1.1875rem;
  }

  & + .va-tree-category,
  .va-tree-node + .va-tree-node,
  .va-tree-category + .va-tree-node,
  .va-tree-node + .va-tree-category {
    margin-top: .75rem;
  }
}
</style>
