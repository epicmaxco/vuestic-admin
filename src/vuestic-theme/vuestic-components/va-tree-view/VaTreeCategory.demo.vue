<template>
  <VbDemo>
    <VbCard title="Default">
      <va-tree-category label="Category with icon">
        <va-icon slot="icon" icon="ion ion-md-nutrition"/>
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
    </VbCard>
  </VbDemo>
</template>

<script>

import VaTreeCategory from './VaTreeCategory'
import VaTreeNode from './VaTreeNode'
import VaIcon from '../va-icon/VaIcon'

export default {
  components: { VaIcon, VaTreeNode, VaTreeCategory },
}
</script>
