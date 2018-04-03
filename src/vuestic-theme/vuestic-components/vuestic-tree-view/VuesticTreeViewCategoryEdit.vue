<template>
  <div class="vuestic-tree-view-category-edit">
    <div class="vuestic-tree-view-category-edit__header">
      <div class="vuestic-tree-view-category-edit__header-checkbox">
        <square-with-icon
          @click.native="isOpen = ! isOpen" :iconClass="checkboxIconClass"
        />
      </div>
      <div class="vuestic-tree-view-category-edit__header-icon"
           v-if="showIcons"
      >
        <span class="icon">
          <i :class="iconClass" aria-hidden="true"/>
        </span>
      </div>
      <div class="vuestic-tree-view-category-edit__header-label">
        {{label}}
      </div>
    </div>

    <div class="vuestic-tree-view-category-edit__list-container" v-if="isOpen">
      <div class="vuestic-tree-view-category-edit__list-internal-container">
        <div class="vuestic-tree-view-category-edit__list-item"
             v-for="node in vuesticTreeNodes"
        >
          <vuestic-tree-view-category-edit
            v-if="isCategory(node)"
            :vuesticTreeNodeCategory="node"
            :showIcons="showIcons"
          />
          <vuestic-tree-view-node-edit
            v-else
            :vuesticTreeNode="node"
            :showIcon="showIcons"
          />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import VuesticTreeNodeCategory from './VuesticTreeNodeCategory'
  import VuesticTreeViewNodeEdit from './VuesticTreeViewNodeEdit.vue'
  import VuesticDivCheckbox from './vuestic-div-checkbox/VuesticDivCheckbox.vue'
  import SquareWithIcon from './vuestic-div-checkbox/SquareWithIcon.vue'

  export default {
    name: 'vuestic-tree-view-category-edit',
    components: { SquareWithIcon, VuesticDivCheckbox, VuesticTreeViewNodeEdit },
    props: {
      /**
       * @type VuesticTreeNodeCategory
       */
      vuesticTreeNodeCategory: {
        type: VuesticTreeNodeCategory,
        required: true
      },
      showIcons: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      checkboxIconClass () {
        return this.isOpen ? 'ion ion-md-remove' : 'ion ion-md-add'
      },
      iconClass () {
        if (this.vuesticTreeNodeCategory.icon) {
          return this.vuesticTreeNodeCategory.icon
        }
        return this.isOpen ? 'ion ion-md-folder-open' : 'ion ion-md-folder'
      },
      isOpen: {
        get () {
          return this.vuesticTreeNodeCategory.isOpen
        },
        set (isOpen) {
          this.vuesticTreeNodeCategory.isOpen = isOpen
        }
      },
      label () {
        return this.vuesticTreeNodeCategory.label
      },
      vuesticTreeNodes () {
        return this.vuesticTreeNodeCategory.children
      }
    },
    methods: {
      isCategory (node) {
        return node instanceof VuesticTreeNodeCategory
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../sass/variables";

  .vuestic-tree-view-category-edit {
    &__header {
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
    &__list-item {
      & + & {
        margin-top: 0.625rem;
      }
    }
  }
</style>

