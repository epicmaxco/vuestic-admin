<template>
  <div class="vuestic-tree-view-category-edit">
    <div class="vuestic-tree-view-category-edit__header">
      <vuestic-div-checkbox v-model="isOpen"/>
      {{label}}
    </div>

    <div class="vuestic-tree-view-category-edit__list-container" v-if="isOpen">
      <div class="vuestic-tree-view-category-edit__list-internal-container">
        <div class="vuestic-tree-view-category-edit__list-item"
             v-for="node in vuesticTreeNodes"
        >
          <vuestic-tree-view-category-edit
            v-if="isCategory(node)"
            :vuesticTreeNodeCategory="node"
          />
          <vuestic-tree-view-node-edit
            v-else
            :vuesticTreeNode="node"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VuesticTreeNodeCategory from './VuesticTreeNodeCategory'
  import VuesticTreeViewNodeEdit from './VuesticTreeViewNodeEdit.vue'
  import VuesticDivCheckbox from './vuestic-div-checkbox/VuesticDivCheckbox'

  export default {
    name: 'vuestic-tree-view-category-edit',
    components: { VuesticDivCheckbox, VuesticTreeViewNodeEdit },
    props: {
      /**
       * @type VuesticTreeNodeCategory
       */
      vuesticTreeNodeCategory: {
        type: VuesticTreeNodeCategory,
        required: true
      }
    },
    computed: {
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
      margin-bottom: 0.625rem;
    }
    &__list-container {
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

