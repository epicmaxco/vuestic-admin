<template>
  <VbDemo>
    <VbCard title="Default">
      <va-tree-category
        label="Category with icon"
        icon="ion ion-md-nutrition"
      >
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
    <VbCard>
      <va-tree-category
        label="Category with icon"
        icon="ion ion-md-nutrition"
      >
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
      <va-tree-category label="Category with checkbox">
        <va-checkbox v-model="value" slot="checkbox"/>
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
      <va-tree-category label="Category without icon">
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
    <VbCard title="Colors">
      <va-tree-category label="Category with icon" color="info">
        <va-icon slot="icon" name="ion ion-md-nutrition"/>
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
import VaCheckbox from '../va-checkbox/VaCheckbox'

export default {
  components: { VaCheckbox, VaIcon, VaTreeNode, VaTreeCategory },
  data () {
    return {
      value: false,
    }
  },
}
</script>
