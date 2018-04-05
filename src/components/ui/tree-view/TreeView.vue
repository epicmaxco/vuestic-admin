<template>
  <div class="sets-list row">
    <div class="col-md-12">
      <div class="row">

        <div class="small-set col-lg-6">
          <vuestic-widget :headerText="$t('treeView.basic')">
            <div class="set-content">
              <div class="overlay">
                <tree-view-basic-preview/>
              </div>
            </div>
          </vuestic-widget>
        </div>

        <div class="small-set col-lg-6">
          <vuestic-widget :headerText="$t('treeView.icons')">
            <div class="set-content">
              <div class="overlay">
                <tree-view-icons-preview/>
              </div>
            </div>
          </vuestic-widget>
        </div>

        <div class="small-set col-lg-6">
          <vuestic-widget :headerText="$t('treeView.selectable')">
            <div class="set-content">
              <div class="overlay">
                <tree-view-selectable-preview/>
              </div>
            </div>
          </vuestic-widget>
        </div>

        <div class="small-set col-lg-6">
          <vuestic-widget :headerText="$t('treeView.editable')">
            <div class="set-content">
              <div class="overlay">
                <tree-view-editable-preview/>
              </div>
            </div>
          </vuestic-widget>
        </div>

        <div class="small-set col-lg-6">
          <vuestic-widget :headerText="$t('treeView.advanced')">
            <div class="set-content">
              <div class="overlay">
                <tree-view-advanced-preview/>
              </div>
            </div>
          </vuestic-widget>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import VuesticWidget
    from '../../../vuestic-theme/vuestic-components/vuestic-widget/VuesticWidget.vue'
  import VuesticTreeCategory
    from '../../../vuestic-theme/vuestic-components/vuestic-tree-view/VuesticTreeCategory'
  import VuesticTreeRoot
    from '../../../vuestic-theme/vuestic-components/vuestic-tree-view/VuesticTreeRoot'
  import VuesticTreeNode
    from '../../../vuestic-theme/vuestic-components/vuestic-tree-view/VuesticTreeNode'
  import TreeViewBasicPreview from './TreeViewBasicPreview'
  import TreeViewIconsPreview from './TreeViewIconsPreview'
  import TreeViewSelectablePreview from './TreeViewSelectablePreview'
  import TreeViewAdvancedPreview from './TreeViewAdvancedPreview'
  import TreeViewEditablePreview from './TreeViewEditablePreview'

  export default {
    name: 'tree-view',
    components: {
      TreeViewEditablePreview,
      TreeViewAdvancedPreview,
      TreeViewSelectablePreview,
      TreeViewIconsPreview,
      TreeViewBasicPreview,
      VuesticTreeNode,
      VuesticTreeRoot,
      VuesticTreeCategory,
      VuesticWidget
    },
    data () {
      return {
        treeViewData: {}
      }
    }
  }
</script>

<style lang="scss">

</style>

