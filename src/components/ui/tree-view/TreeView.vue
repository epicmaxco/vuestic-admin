<template>
  <div class="sets-list row">
    <div class="col-md-12">
      <div class="row">

        <div class="small-set col-lg-6">
          <vuestic-widget :headerText="$t('treeView.basic')">
            <div class="set-content">
              <div class="overlay">
                <vuestic-tree-view
                  :vuesticTreeRoot="treeViewData.products"
                />
              </div>
            </div>
          </vuestic-widget>
        </div>

        <div class="small-set col-lg-6">
          <vuestic-widget :headerText="$t('treeView.icons')">
            <div class="set-content">
              <div class="overlay">
                <vuestic-tree-view
                  showIcons
                  :vuesticTreeRoot="treeViewData.personalDocuments1"
                />
              </div>
            </div>
          </vuestic-widget>
        </div>

        <div class="small-set col-lg-6">
          <vuestic-widget :headerText="$t('treeView.advanced')">
            <div class="set-content">
              <div class="overlay">

                <div class="row mb-4">
                  <div class="small-set col-sm-6 d-flex justify-content-center">
                    <button class="btn btn-primary btn-micro"
                            @click="treeViewData.personalDocuments2.expand()">
                      EXPAND ALL
                    </button>
                  </div>
                  <div class="small-set col-sm-6 d-flex justify-content-center">
                    <button class="btn btn-primary btn-micro"
                            @click="treeViewData.personalDocuments2.collapse()">
                      COLLAPSE ALL
                    </button>
                  </div>
                </div>


                <vuestic-tree-view
                  showIcons
                  :vuesticTreeRoot="treeViewData.personalDocuments2"
                />
              </div>
            </div>
          </vuestic-widget>
        </div>

        <div class="small-set col-lg-6">
          <vuestic-widget :headerText="$t('treeView.custom')">
            <div class="set-content">
              <div class="overlay">
                <vuestic-tree-view
                  showIcons
                  :vuesticTreeRoot="treeViewData.personalDocuments3"
                />
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

  import TreeViewRootFactory from './TreeViewRootFactory'

  export default {
    name: 'tree-view',
    components: {
      VuesticTreeView,
      VuesticWidget
    },
    data () {
      return {
        treeViewData: {
          products: TreeViewRootFactory.products(),
          personalDocuments1: TreeViewRootFactory.personalDocuments(),
          personalDocuments2: TreeViewRootFactory.personalDocuments(),
          personalDocuments3: TreeViewRootFactory.personalDocumentsWithCustomIcons()
        }
      }
    }
  }
</script>

<style lang="scss">

</style>

