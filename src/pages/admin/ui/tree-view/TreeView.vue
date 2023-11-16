<template>
  <div class="tree-view sets-list grid grid-cols-12 items-start gap-6">
    <VaCard class="lg:col-span-6 col-span-12">
      <VaCardTitle>{{ t('treeView.basic') }}</VaCardTitle>
      <VaCardContent>
        <TreeViewBasicPreview />
      </VaCardContent>
    </VaCard>

    <VaCard class="lg:col-span-6 col-span-12">
      <VaCardTitle>{{ t('treeView.icons') }}</VaCardTitle>
      <VaCardContent>
        <TreeViewIconsPreview />
      </VaCardContent>
    </VaCard>

    <VaCard class="lg:col-span-6 col-span-12">
      <VaCardTitle>{{ t('treeView.advanced') }}</VaCardTitle>
      <VaCardContent>
        <TreeViewAdvancedPreview />
      </VaCardContent>
    </VaCard>

    <VaCard class="lg:col-span-6 col-span-12">
      <VaCardTitle>{{ t('treeView.editable') }}</VaCardTitle>
      <VaCardContent>
        <TreeViewEditablePreview />
      </VaCardContent>
    </VaCard>

    <VaCard class="lg:col-span-6 col-span-12">
      <VaCardTitle>{{ t('treeView.selectable') }}</VaCardTitle>
      <VaCardContent>
        <TreeViewSelectablePreview />
      </VaCardContent>
    </VaCard>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

import TreeViewBasicPreview from './TreeViewBasicPreview.vue'
import TreeViewIconsPreview from './TreeViewIconsPreview.vue'
import TreeViewSelectablePreview from './TreeViewSelectablePreview.vue'
import TreeViewAdvancedPreview from './TreeViewAdvancedPreview.vue'
import TreeViewEditablePreview from './TreeViewEditablePreview.vue'

const { t } = useI18n()
</script>
