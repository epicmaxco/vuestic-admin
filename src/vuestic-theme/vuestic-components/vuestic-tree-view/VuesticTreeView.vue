<template>
  <div class="vuestic-tree-view">
    <div class="vuestic-tree-view__item" v-for="node in vuesticTreeRoot.nodes">
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
</template>

<script>
  import VuesticTreeRoot from './VuesticTreeRoot'
  import VuesticTreeViewCategoryEdit from './VuesticTreeViewCategoryEdit'
  import VuesticTreeNodeCategory from './VuesticTreeNodeCategory'
  import VuesticTreeViewNodeEdit from './VuesticTreeViewNodeEdit'

  export default {
    name: 'vuestic-tree-view',
    components: { VuesticTreeViewNodeEdit, VuesticTreeViewCategoryEdit },
    data () {
      return {
        vuesticTreeRootCached: null,
      }
    },
    props: {
      /**
       * @type VuesticTreeNode[]
       */
      vuesticTreeRoot: {
        type: VuesticTreeRoot,
        required: true
      },
      showIcons: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      collapse () {
        this.vuesticTreeRoot.collapse()
      },
      expand () {
        this.vuesticTreeRoot.expand()
      },
      isCategory (node) {
        return node instanceof VuesticTreeNodeCategory
      }
    }
  }
</script>

<style lang="scss">
  .vuestic-tree-view {
    &__item {
      padding-bottom: 0.625rem;
    }
    padding: 0.3125rem;
  }
</style>
