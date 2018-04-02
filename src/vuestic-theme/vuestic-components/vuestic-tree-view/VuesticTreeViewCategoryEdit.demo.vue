<template>
  <div style="left: 420px; top: 180px; background-color: white; position: absolute">
    <vuestic-tree-view-category-edit
      :vuesticTreeNodeCategory="vuesticTreeNodeCategory"
    />
  </div>
</template>

<script>
  import VuesticTreeViewCategoryEdit from './VuesticTreeViewCategoryEdit'
  import VuesticTreeNodeCategory from './VuesticTreeNodeCategory'
  import VuesticTreeNode from './VuesticTreeNode'

  export default {
    components: { VuesticTreeViewCategoryEdit },
    data () {
      return {
        vuesticTreeNodeCategory: new VuesticTreeNodeCategory({
          label: 'Electronics',
          children: [
            new VuesticTreeNode({
              label: 'Cellphones'
            }),
            new VuesticTreeNode({
              label: 'Camera Body Kits',
              selected: true
            }),
            new VuesticTreeNode({
              label: 'External HDDs'
            })
          ]
        })
      }
    }
  }
</script>

