<template>
  <va-tree-view v-model:checked="selectedNodes" :nodes="nodes" selectable />
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const nodes = [
    {
      id: 1,
      label: 'Electronics',
      children: [
        { id: 2, label: 'Cellphones' },
        {
          id: 3,
          label: 'Camera Body Kits',
        },
        { id: 6, label: 'External HDDs' },
      ],
    },
    {
      id: 7,
      label: 'Products',
      children: [
        {
          id: 8,
          label: 'Cables',
          children: [
            {
              id: 9,
              label: 'Audio',
            },
            {
              id: 10,
              label: 'Video',
            },
            {
              id: 11,
              label: 'Optical',
            },
          ],
        },
        {
          id: 12,
          label: 'Monitors',
        },
        {
          id: 13,
          label: 'Keyboards',
        },
      ],
    },
    {
      id: 14,
      label: 'Apparel',
      children: [
        {
          id: 15,
          label: 'Jackets',
        },
        {
          id: 16,
          label: 'Pants',
        },
        {
          id: 17,
          label: 'Skirts',
        },
      ],
    },
  ]
  const selectedNodes = ref([])
</script>
