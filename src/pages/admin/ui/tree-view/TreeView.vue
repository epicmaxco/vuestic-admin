<template>
  <div class="tree-view sets-list grid grid-cols-12 items-start gap-6">
    <va-card class="lg:col-span-6 col-span-12">
      <va-card-title>{{ t('treeView.basic') }}</va-card-title>
      <va-card-content>
        <tree-view-basic-preview />
      </va-card-content>
    </va-card>

    <va-card class="lg:col-span-6 col-span-12">
      <va-card-title>{{ t('treeView.icons') }}</va-card-title>
      <va-card-content>
        <tree-view-icons-preview />
      </va-card-content>
    </va-card>

    <va-card class="lg:col-span-6 col-span-12">
      <va-card-title>{{ t('treeView.advanced') }}</va-card-title>
      <va-card-content>
        <tree-view-advanced-preview />
      </va-card-content>
    </va-card>

    <va-card class="lg:col-span-6 col-span-12">
      <va-card-title>{{ t('treeView.editable') }}</va-card-title>
      <va-card-content>
        <tree-view-editable-preview />
      </va-card-content>
    </va-card>

    <va-card class="lg:col-span-6 col-span-12">
      <va-card-title>{{ t('treeView.selectable') }}</va-card-title>
      <va-card-content>
        <tree-view-selectable-preview />
      </va-card-content>
    </va-card>
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
