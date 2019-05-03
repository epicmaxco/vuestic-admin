<template>
  <VbDemo>
    <VbCard>
      <va-tree-node>
        <va-checkbox
          slot="checkbox"
          v-model="checkboxValue"
        />
        <va-icon slot="icon" icon="ion ion-md-nutrition"/>
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
