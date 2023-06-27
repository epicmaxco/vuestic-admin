<template>
  <div class="tree-view-advanced-preview">
    <div class="tree-view-advanced-preview__buttons">
      <va-button class="mr-2" @click="expandAll">EXPAND ALL</va-button>
      <va-button @click="collapseAll">COLLAPSE ALL</va-button>
    </div>

    <va-tree-view ref="treeView" v-model:expanded="expanded" :nodes="nodes">
      <template #icon-toggle="{ expanded }">
        <div class="tree-view-advanced-preview__icon-square">
          <va-icon color="backgroundPrimary" :name="expanded ? 'remove' : 'add'" />
        </div>
      </template>
    </va-tree-view>
  </div>
</template>

<script setup>
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
  const expanded = ref([1])

  const calcExpandableNodeIds = (nodes) => {
    const expandableNodes = []
    const canExpandNode = (node) => !!node.children
    const checkNodes = (nodes) => {
      for (const node of nodes) {
        if (canExpandNode(node)) {
          expandableNodes.push(node.id)
          checkNodes(node.children)
        }
      }
    }
    checkNodes(nodes)

    return expandableNodes
  }
  const expandAll = () => {
    expanded.value = calcExpandableNodeIds(nodes)
  }
  const collapseAll = () => {
    expanded.value = []
  }
</script>

<style lang="scss">
  .tree-view-advanced-preview {
    &__buttons {
      margin-bottom: 1rem;
      display: flex;
    }

    &__icon-square {
      display: flex;
      justify-content: center;
      align-items: center;
      aspect-ratio: 1 / 1;
      background-color: var(--va-primary);
      border-radius: 5px;
      margin-right: 5px;
    }
  }
</style>
