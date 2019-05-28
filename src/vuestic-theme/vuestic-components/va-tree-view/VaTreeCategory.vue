<template>
  <div class="va-tree-category">
    <div
     class="va-tree-category__header"
     @click="toggle"
    >
      <div class="va-tree-category__header-switcher">
        <square-with-icon
          :iconClass="`ion ion-md-${isOpenCached ? 'remove' : 'add'}`"
          :color="va.color || colorComputed"
        />
      </div>
      <div
        class="va-tree-category__header-checkbox"
        v-if="$slots.checkbox"
      >
        <slot name="checkbox"/>
      </div>
      <div
        class="va-tree-category__header-icon"
         v-if="icon"
      >
        <va-icon :icon="icon" :color="$themes['info']"/>
      </div>
      <div class="va-tree-category__header-label">
        {{ label }}
      </div>
    </div>

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
import VaIcon from '../va-icon/VaIcon'

export default {
  name: 'va-tree-category',
  mixins: [ ColorThemeMixin ],
  components: { VaIcon, VaTreeNode, SquareWithIcon, VaCheckbox },
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
    },
    icon: {
      type: String,
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
    toggle (e) {
      if (!e.target.classList.contains('va-checkbox__input')) {
        this.isOpenCached = !this.isOpenCached
      }
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
    align-items: center;
  }

  &__header-switcher {
    margin-right: .5rem;
  }

  &__header-checkbox {
    margin-right: .5rem;
    height: 1.5rem;
    width: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    .va-checkbox__square {
      width: 1.5rem;
      height: 1.5rem;
      flex: 0 0 1.5rem;
    }
  }

  &__header-icon {
    color: $theme-blue-dark;
    margin-right: .5rem;
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
