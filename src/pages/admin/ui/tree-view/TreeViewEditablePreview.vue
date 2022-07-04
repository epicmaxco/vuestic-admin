<template>
  <va-tree-root>
    <va-tree-category label="Electronics">
      <va-tree-node v-for="electronic in electronics" :key="electronic.id">
        <va-input v-model="electronic.name" class="mb-0" />
      </va-tree-node>
    </va-tree-category>

    <va-tree-category is-open label="Products">
      <va-tree-node v-for="product in products" :key="product.id">
        <div class="flex row align--center">
          <va-input v-model="product.name" class="mb-0" />
          <va-icon
            name="ion_md_close"
            color="info"
            class="ml-2 pa-1 shrink"
            style="cursor: pointer"
            @click="removeProduct(product)"
          />
        </div>
      </va-tree-node>
      <va-tree-node>
        <va-button class="mb-2" @click="addProduct()"> Add new product </va-button>
      </va-tree-node>
    </va-tree-category>
  </va-tree-root>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const electronics = ref([
    { id: 1, name: 'Cellphones' },
    { id: 2, name: 'Camera Body Kits' },
    { id: 3, name: 'External HDDs' },
  ])

  const products = ref([
    { id: 4, name: 'Cables' },
    { id: 5, name: 'Monitors' },
    { id: 6, name: 'Keyboards' },
  ])

  function addProduct() {
    products.value.push({
      id: Math.floor(Math.random() * 100000),
      name: 'New product',
    })
  }

  function removeProduct(product: { id: number }) {
    products.value = products.value.filter((productToFilter) => productToFilter.id !== product.id)
  }
</script>
