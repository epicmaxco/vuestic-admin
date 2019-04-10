<template>
  <div
    style="left: 420px; top: 180px; width: 400px; background-color: white; position: absolute">
    <va-tree-category label="Category with icon">
      <div slot="icon" class="icon">
        <span aria-hidden="true" class="ion ion-md-nutrition"/>
      </div>
      <va-tree-node>
        One
      </va-tree-node>
      <va-tree-node>
        Two
      </va-tree-node>
      <va-tree-node>
        Three
      </va-tree-node>
    </va-tree-category>

    <va-tree-category label="Category open" isOpen>
      <va-tree-node>
        One
      </va-tree-node>
      <va-tree-node>
        Two
      </va-tree-node>
      <va-tree-node>
        Three
      </va-tree-node>
    </va-tree-category>
  </div>
</template>

<script>

import VaTreeCategory from './VaTreeCategory'
import VaTreeNode from './VaTreeNode'

export default {
  components: { VaTreeNode, VaTreeCategory },
}
</script>
