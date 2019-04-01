<template>
  <va-tree-root>
    <va-tree-category label="Products">
      <va-tree-node v-for="product in products" :key="product.id">
        <va-checkbox
          slot="checkbox"
          v-model="product.selected"
        />
        {{ product.name }}
      </va-tree-node>
    </va-tree-category>
    <va-tree-category isOpen label="Electronics">
      <va-tree-node v-for="electronic in electronics" :key="electronic.id">
        <va-checkbox
          slot="checkbox"
          v-model="electronic.selected"
        />
        {{ electronic.name }}
      </va-tree-node>
    </va-tree-category>
  </va-tree-root>
</template>

<script>
export default {
  name: 'tree-view-selectable-preview',
  data () {
    return {
      electronics: [
        { id: 1, name: 'Cellphones', selected: false },
        { id: 2, name: 'Camera Body Kits', selected: false },
        { id: 3, name: 'External HDDs', selected: false },
      ],
      products: [
        { id: 4, name: 'Cables', selected: false },
        { id: 5, name: 'Monitors', selected: false },
        { id: 6, name: 'Keyboards', selected: false },
      ],
    }
  },
}
</script>
