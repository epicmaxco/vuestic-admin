<template>
  <div
    style="left: 420px; top: 180px; background-color: white; position: absolute"
  >
    <va-button @click="$refs.treeView.expand()">
      EXPAND ALL
    </va-button>
    <va-button @click="$refs.treeView.collapse()">
      COLLAPSE ALL
    </va-button>

    <va-tree-root
      ref="treeView"
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
  </div>
</template>

<script>
import VaTreeRoot from './VaTreeRoot.vue'
import VaTreeNode from './VaTreeNode'
import VaTreeCategory from './VaTreeCategory'

export default {
  components: { VaTreeCategory, VaTreeNode, VaTreeRoot },
}
</script>
