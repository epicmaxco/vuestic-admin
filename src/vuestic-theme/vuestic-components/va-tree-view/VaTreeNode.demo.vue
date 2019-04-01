<template>
  <div
    style="left: 420px; top: 180px; background-color: white; position: absolute"
  >
    <va-tree-node>
      <va-checkbox
        slot="checkbox"
        v-model="checkboxValue"
      />
      <div slot="icon" class="icon">
        <span aria-hidden="true"
              class="ion ion-md-nutrition"
        />
      </div>
      Some text
    </va-tree-node>
  </div>
</template>

<script>
import VaTreeNode from './VaTreeNode.vue'

import VaCheckbox from '../va-checkbox/VaCheckbox'

export default {
  components: {
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
