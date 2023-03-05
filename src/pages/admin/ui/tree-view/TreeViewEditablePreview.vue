<template>
  <va-tree-view v-model:expanded="expandedNodes" :nodes="nodes">
    <template #content="node">
      <div v-if="!node.hasChildren" class="tree-node-editable flex flex-1 flex-wrap items-center">
        <va-input v-model="node.label" class="mb-0" />
        <va-icon name="md_close" color="info" class="ml-2 cursor-pointer" @click="removeProduct(node)" />
      </div>
    </template>
  </va-tree-view>
  <va-button class="mb-2" @click="addProduct()"> Add new product </va-button>
</template>

<script setup lang="ts">
  import { reactive } from 'vue'

  const expandedNodes = reactive([1, 2])
  const electronics = reactive([
    { id: 3, label: 'Cellphones' },
    { id: 4, label: 'Camera Body Kits' },
    { id: 5, label: 'External HDDs' },
  ])

  let products = reactive([
    { id: 6, label: 'Cables' },
    { id: 7, label: 'Monitors' },
    { id: 8, label: 'Keyboards' },
  ])

  const nodes = [
    {
      label: 'Electronics',
      id: 1,
      children: electronics,
    },
    {
      label: 'Products',
      id: 2,
      children: products,
    },
  ]

  function addProduct() {
    products.push({
      id: Math.floor(Math.random() * 100000),
      label: 'New product',
    })
  }

  function removeProduct(product: { id: number }) {
    products.splice(
      products.findIndex((prod) => prod.id === product.id),
      1,
    )
  }
</script>

<style lang="scss" scoped>
  .tree-node-editable {
    .va-input {
      width: auto;
    }
  }
</style>
