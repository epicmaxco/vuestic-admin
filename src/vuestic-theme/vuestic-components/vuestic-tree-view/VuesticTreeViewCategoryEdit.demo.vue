<template>
  <div style="left: 420px; top: 180px; width: 400px; background-color: white; position: absolute">
    <vuestic-div-checkbox v-model="showIcons"/> Show icons
    <vuestic-tree-view-category-edit
      :vuesticTreeNodeCategory="vuesticTreeNodeCategory"
      :showIcons="showIcons"
    />
  </div>
</template>

<script>
  import VuesticTreeViewCategoryEdit from './VuesticTreeViewCategoryEdit'
  import VuesticTreeNodeCategory from './VuesticTreeNodeCategory'
  import VuesticTreeNode from './VuesticTreeNode'
  import VuesticDivCheckbox from './vuestic-div-checkbox/VuesticDivCheckbox.vue'

  export default {
    components: { VuesticDivCheckbox, VuesticTreeViewCategoryEdit },
    data () {
      return {
        showIcons: false,
        vuesticTreeNodeCategory: new VuesticTreeNodeCategory({
          label: 'Electronicsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
          children: [
            new VuesticTreeNode({
              label: 'Cellphonessssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss'
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
