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

    <vuestic-tree-root
      ref="treeView"
    >
      <vuestic-tree-category
        label="Category text"
        isOpen
      >
        <vuestic-tree-node>
          Node text
        </vuestic-tree-node>
        <vuestic-tree-node>
          Node text
        </vuestic-tree-node>
      </vuestic-tree-category>
    </vuestic-tree-root>
  </div>
</template>

<script>
import VuesticTreeRoot from './VuesticTreeRoot.vue'
import VuesticTreeNode from './VuesticTreeNode'
import VuesticTreeCategory from './VuesticTreeCategory'

export default {
  components: { VuesticTreeCategory, VuesticTreeNode, VuesticTreeRoot },
}
</script>
