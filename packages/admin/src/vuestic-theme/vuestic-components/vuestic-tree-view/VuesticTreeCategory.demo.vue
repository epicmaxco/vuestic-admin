<template>
  <div
    style="left: 420px; top: 180px; width: 400px; background-color: white; position: absolute">
    <vuestic-tree-category label="Category with icon">
      <div slot="icon" class="icon">
        <span aria-hidden="true" class="ion ion-md-nutrition"/>
      </div>
      <vuestic-tree-node>
        One
      </vuestic-tree-node>
      <vuestic-tree-node>
        Two
      </vuestic-tree-node>
      <vuestic-tree-node>
        Three
      </vuestic-tree-node>
    </vuestic-tree-category>

    <vuestic-tree-category label="Category open" isOpen>
      <vuestic-tree-node>
        One
      </vuestic-tree-node>
      <vuestic-tree-node>
        Two
      </vuestic-tree-node>
      <vuestic-tree-node>
        Three
      </vuestic-tree-node>
    </vuestic-tree-category>
  </div>
</template>

<script>

import VuesticTreeCategory from './VuesticTreeCategory'
import VuesticTreeNode from './VuesticTreeNode'

export default {
  components: { VuesticTreeNode, VuesticTreeCategory },
}
</script>
