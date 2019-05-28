<template>
  <VbDemo>
    <VbCard title="default">
      <va-tree-node>
        Some text
      </va-tree-node>
    </VbCard>
    <VbCard title="with icon">
      <va-tree-node icon="ion ion-md-nutrition">
        Some text
      </va-tree-node>
    </VbCard>
    <VbCard title="with right icon">
      <va-tree-node icon-right="ion ion-md-nutrition">
        Some text
      </va-tree-node>
    </VbCard>
    <VbCard title="highlighted">
      <va-tree-node highlighted>
        Some text
      </va-tree-node>
    </VbCard>
    <VbCard title="with checkbox">
      <va-tree-node>
        <va-checkbox
          slot="checkbox"
          v-model="checkboxValue"
        />
        Some text
      </va-tree-node>
    </VbCard>
  </VbDemo>
</template>

<script>
import VaTreeNode from './VaTreeNode.vue'
import VaCheckbox from '../va-checkbox/VaCheckbox'
import VaIcon from '../va-icon/VaIcon'

export default {
  components: {
    VaIcon,
    VaTreeNode,
    VaCheckbox,
  },
  data () {
    return {
      checkboxValue: false,
    }
  },
}
</script>
