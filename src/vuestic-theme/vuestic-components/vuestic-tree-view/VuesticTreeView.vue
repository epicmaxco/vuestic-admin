<template>
  <div class="vuestic-tree-view">
    <template v-for="node in vuesticTreeRoot.nodes">
      <vuestic-tree-view-category-edit
        v-if="isCategory(node)"
        :vuesticTreeNodeCategory="node"
      />
      <vuestic-tree-view-node-edit
        v-else
        :vuesticTreeNode="node"
      />
    </template>
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
    props: {
      /**
       * @type VuesticTreeNode[]
       */
      vuesticTreeRoot: {
        type: VuesticTreeRoot,
        required: true
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
    padding: 0.3125rem;
  }
</style>
