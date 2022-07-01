<template>
  <div class="tree-view sets-list row">
    <div class="flex md12 xs12">
      <div class="row">
        <div class="small-set flex lg6 xs12">
          <va-card>
            <va-card-title>{{ t('treeView.basic') }}</va-card-title>
            <va-card-content>
              <tree-view-basic-preview />
            </va-card-content>
          </va-card>
        </div>

        <div class="small-set flex lg6 xs12">
          <va-card>
            <va-card-title>{{ t('treeView.icons') }}</va-card-title>
            <va-card-content>
              <tree-view-icons-preview />
            </va-card-content>
          </va-card>
        </div>
      </div>

      <div class="row">
        <div class="small-set flex lg6 xs12">
          <va-card>
            <va-card-title>{{ t('treeView.advanced') }}</va-card-title>
            <va-card-content>
              <tree-view-advanced-preview />
            </va-card-content>
          </va-card>
        </div>

        <div class="small-set flex lg6 xs12">
          <va-card>
            <va-card-title>{{ t('treeView.editable') }}</va-card-title>
            <va-card-content>
              <tree-view-editable-preview />
            </va-card-content>
          </va-card>
        </div>
      </div>

      <div class="row">
        <div class="small-set flex lg6 xs12">
          <va-card>
            <va-card-title>{{ t('treeView.selectable') }}</va-card-title>
            <va-card-content>
              <tree-view-selectable-preview />
            </va-card-content>
          </va-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import TreeViewBasicPreview from './TreeViewBasicPreview.vue'
  import TreeViewIconsPreview from './TreeViewIconsPreview.vue'
  import TreeViewSelectablePreview from './TreeViewSelectablePreview.vue'
  import TreeViewAdvancedPreview from './TreeViewAdvancedPreview.vue'
  import TreeViewEditablePreview from './TreeViewEditablePreview.vue'

  const { t } = useI18n()
</script>
