<template>
  <div style="left: 420px; top: 180px; background-color: white; position: absolute">
    <vuestic-div-checkbox v-model="showIcon"/> Show icons
    <vuestic-tree-view-node-edit
      :vuesticTreeNode="vuesticTreeNode"
      :showIcon="showIcon"
    />
  </div>
</template>

<script>

  import VuesticTreeViewCategoryEdit
    from './VuesticTreeViewCategoryEdit.vue'
  import VuesticTreeViewNodeEdit from './VuesticTreeViewNodeEdit.vue'

  import VuesticTreeNode from './VuesticTreeNode'
  import VuesticDivCheckbox from './vuestic-div-checkbox/VuesticDivCheckbox.vue'

  export default {
    components: { VuesticDivCheckbox, VuesticTreeViewNodeEdit, VuesticTreeViewCategoryEdit },
    data () {
      return {
        showIcon: false,
        vuesticTreeNode: new VuesticTreeNode({
          label: 'Product'
        }),
      }
    }
  }
</script>
