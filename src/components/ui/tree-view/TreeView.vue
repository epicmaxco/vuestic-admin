<template>
  <div class="sets-list row">
    <div class="col-md-12">
      <div class="row">

        <div class="small-set col-lg-6">
          <vuestic-widget :headerText="$t('treeView.basic')">
            <div class="set-content">
              <div class="overlay">
                <vuestic-tree-view
                  :options="treeViewData.basic"
                >
                </vuestic-tree-view>
              </div>
            </div>
          </vuestic-widget>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import VuesticTreeView
    from '../../../vuestic-theme/vuestic-components/vuestic-tree-view/VuesticTreeView.vue'
  import VuesticWidget
    from '../../../vuestic-theme/vuestic-components/vuestic-widget/VuesticWidget.vue'

  import VuesticTreeNode
    from '../../../vuestic-theme/vuestic-components/vuestic-tree-view/VuesticTreeNode'
  import VuesticTreeNodeCategory
    from '../../../vuestic-theme/vuestic-components/vuestic-tree-view/VuesticTreeNodeCategory'

  export default {
    name: 'tree-view',
    components: {
      VuesticTreeView,
      VuesticWidget
    },
    data () {
      return {
        treeViewData: {
          basic: [
            new VuesticTreeNodeCategory({
              data: 'Products',
              children: [
                new VuesticTreeNode({
                  data: 'Product 1'
                }),
                new VuesticTreeNode({
                  data: 'Product 2'
                }),
                new VuesticTreeNode({
                  data: 'Product 3'
                })
              ]
            }),
            new VuesticTreeNodeCategory({
              data: 'Electronics',
              open: true,
              children: [
                new VuesticTreeNode({
                  data: 'Cellphones'
                }),
                new VuesticTreeNode({
                  data: 'Camera Body Kits',
                  selected: true
                }),
                new VuesticTreeNode({
                  data: 'External HDDs'
                })
              ]
            }),
            new VuesticTreeNodeCategory({
              data: 'Apparel',
              children: [
                new VuesticTreeNode({
                  data: 'Apparel 1'
                }),
                new VuesticTreeNode({
                  data: 'Apparel 2'
                }),
                new VuesticTreeNode({
                  data: 'Apparel 3'
                })
              ]
            }),
            new VuesticTreeNodeCategory({
              data: 'Furniture',
              children: [
                new VuesticTreeNode({
                  data: 'Furniture 1'
                }),
                new VuesticTreeNode({
                  data: 'Furniture 2'
                }),
                new VuesticTreeNode({
                  data: 'Furniture 3'
                })
              ]
            })
          ]
        },
        treeViewDataSelected: {
          basic: []
        }
      }
    }
  }
</script>

<style lang="scss">

</style>

