<template>
  <div class="tree-view sets-list row">
    <div class="flex md12 xs12">
      <div class="row">
        <div class="small-set flex lg6 xs12">
          <va-card :title="$t('treeView.basic')">
            <tree-view-basic-preview/>
          </va-card>
        </div>

        <div class="small-set flex lg6 xs12">
          <va-card :title="$t('treeView.icons')">
            <tree-view-icons-preview/>
          </va-card>
        </div>
      </div>

      <div class="row">
        <div class="small-set flex lg6 xs12">
          <va-card :title="$t('treeView.advanced')">
            <tree-view-advanced-preview/>
          </va-card>
        </div>

        <div class="small-set flex lg6 xs12">
          <va-card :title="$t('treeView.editable')">
            <tree-view-editable-preview/>
          </va-card>
        </div>
      </div>

      <div class="row">
        <div class="small-set flex lg6 xs12">
          <va-card :title="$t('treeView.selectable')">
            <tree-view-selectable-preview/>
          </va-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
  },
  data () {
    return {
      treeViewData: {},
    }
  },
}
</script>
