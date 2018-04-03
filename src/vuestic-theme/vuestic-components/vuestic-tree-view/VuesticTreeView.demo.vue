<template>
  <div
    style="left: 420px; top: 180px; background-color: white; position: absolute"
  >
    <button class="btn btn-primary btn-sm" @click="$refs.treeView.expand()">
      EXPAND ALL
    </button>
    <button class="btn btn-primary btn-sm" @click="$refs.treeView.collapse()">
      COLLAPSE ALL
    </button>
    <vuestic-div-checkbox v-model="showIcons"/>
    Show icons
    <vuestic-tree-view
      ref="treeView"
      :vuesticTreeRoot="vuesticTreeRoot"
      :showIcons="showIcons"
    />
    Raw
    <vuestic-tree-view
      :showIcons="showIcons"
      v-model="vuesticTreeRootRaw"
    />
  </div>
</template>

<script>
  import VuesticTreeNodeCategory from './VuesticTreeNodeCategory'
  import VuesticTreeNode from './VuesticTreeNode'
  import VuesticTreeRoot from './VuesticTreeRoot'

  import VuesticTreeView from './VuesticTreeView.vue'
  import VuesticDivCheckbox from './vuestic-div-checkbox/VuesticDivCheckbox.vue'

  export default {
    components: { VuesticDivCheckbox, VuesticTreeView },
    data () {
      return {
        showIcons: false,
        vuesticTreeRootRaw: [
          {
            label: 'Category',
            children: [
              { label: 'Item one' },
              { label: 'Item one' }
            ]
          },
          { label: 'Item one' },
          { label: 'Item two' }
        ],
        vuesticTreeRoot: new VuesticTreeRoot([
          new VuesticTreeNode({
            label: 'Item one'
          }),
          new VuesticTreeNode({
            label: 'Item two'
          }),
          new VuesticTreeNodeCategory({
            label: 'Products',
            children: [
              new VuesticTreeNodeCategory({
                label: 'Products',
                children: [
                  new VuesticTreeNode({
                    label: 'Product 1'
                  }),
                  new VuesticTreeNode({
                    label: 'Product 2'
                  }),
                  new VuesticTreeNode({
                    label: 'Product 3'
                  })
                ]
              }),
              new VuesticTreeNode({
                label: 'Product 1'
              }),
              new VuesticTreeNode({
                label: 'Product 2'
              }),
              new VuesticTreeNode({
                label: 'Product 3'
              })
            ]
          }),
          new VuesticTreeNodeCategory({
            label: 'Electronics',
            open: true,
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
          }),
          new VuesticTreeNodeCategory({
            label: 'Apparel',
            children: [
              new VuesticTreeNode({
                label: 'Apparel 1'
              }),
              new VuesticTreeNode({
                label: 'Apparel 2'
              }),
              new VuesticTreeNode({
                label: 'Apparel 3'
              })
            ]
          }),
          new VuesticTreeNodeCategory({
            label: 'Furniture',
            children: [
              new VuesticTreeNode({
                label: 'Furniture 1'
              }),
              new VuesticTreeNode({
                label: 'Furniture 2'
              }),
              new VuesticTreeNode({
                label: 'Furniture 3'
              })
            ]
          })
        ])
      }
    }
  }
</script>

