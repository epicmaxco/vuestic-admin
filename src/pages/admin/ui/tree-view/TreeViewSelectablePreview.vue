<template>
  <va-tree-view>
    <va-tree-category label="Products">
      <va-tree-node v-for="product in products" :key="product.id">
        <template #checkbox>
          <va-checkbox v-model="product.selected" :label="product.name" />
        </template>
      </va-tree-node>
    </va-tree-category>
    <va-tree-category is-open label="Electronics">
      <va-tree-node v-for="electronic in electronics" :key="electronic.id">
        <template #checkbox>
          <va-checkbox v-model="electronic.selected" :label="electronic.name" />
        </template>
      </va-tree-node>
    </va-tree-category>
  </va-tree-view>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const electronics = ref([
    { id: 1, name: 'Cellphones', selected: false },
    { id: 2, name: 'Camera Body Kits', selected: false },
    { id: 3, name: 'External HDDs', selected: false },
  ])

  const products = ref([
    { id: 4, name: 'Cables', selected: false },
    { id: 5, name: 'Monitors', selected: false },
    { id: 6, name: 'Keyboards', selected: false },
  ])
</script>
