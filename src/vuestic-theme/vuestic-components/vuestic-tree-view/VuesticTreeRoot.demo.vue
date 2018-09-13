<template>
  <div
    style="left: 420px; top: 180px; background-color: white; position: absolute"
  >
    <button class="btn btn-primary btn-sm" @click="$refs.treeView.expand()">
      EXPAND ALL
    </button>
    <button class="btn btn-primary btn-sm" @click="$refs.treeView.collapse()">
      COLLAPSE ALL
    </button>

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
