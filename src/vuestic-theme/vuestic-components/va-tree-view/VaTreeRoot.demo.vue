<template>
  <VbDemo>
    <VbCard>
      <va-button @click="$refs.treeView.expand()">
        EXPAND ALL
      </va-button>
      <va-button @click="$refs.treeView.collapse()">
        COLLAPSE ALL
      </va-button>

      <va-tree-root ref="treeView">
        <va-tree-category
          label="Category text"
          isOpen
        >
          <va-tree-node>
            Node text
          </va-tree-node>
          <va-tree-category
            label="Category text"
            isOpen
          >
            <va-tree-node>
              Node text
            </va-tree-node>
          </va-tree-category>
        </va-tree-category>
      </va-tree-root>
    </VbCard>
    <VbCard title="Color">
      <va-tree-root
        color="info"
      >
        <va-tree-category
          label="Category text"
          isOpen
        >
          <va-tree-node>
            Node text
          </va-tree-node>
          <va-tree-node>
            Node text
          </va-tree-node>
        </va-tree-category>
      </va-tree-root>
    </VbCard>
  </VbDemo>
</template>

<script>
import VaTreeRoot from './VaTreeRoot.vue'
import VaTreeNode from './VaTreeNode'
import VaTreeCategory from './VaTreeCategory'
import VaButton from '../va-button/VaButton'

export default {
  components: { VaButton, VaTreeCategory, VaTreeNode, VaTreeRoot },
}
</script>
