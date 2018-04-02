<template>
  <div style="left: 420px; top: 180px; background-color: white; position: absolute">
    <vuestic-tree-view-node-edit
      :vuesticTreeNode="vuesticTreeNode"
    />
  </div>
</template>

<script>
  import VuesticTreeViewCategoryEdit
    from './VuesticTreeViewCategoryEdit.vue'
  import VuesticTreeViewNodeEdit from './VuesticTreeViewNodeEdit.vue'

  import VuesticTreeNode from './VuesticTreeNode'

  export default {
    components: { VuesticTreeViewNodeEdit, VuesticTreeViewCategoryEdit },
    data () {
      return {
        vuesticTreeNode: new VuesticTreeNode({
          label: 'Product'
        })
      }
    }
  }
</script>
