<template>
  <div
    style="left: 420px; top: 180px; background-color: white; position: absolute"
  >
    <vuestic-tree-node>
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
    </vuestic-tree-node>
  </div>
</template>

<script>
import VuesticTreeNode from './VuesticTreeNode.vue'

import VaCheckbox from '../va-checkbox/VaCheckbox'

export default {
  components: {
    VuesticTreeNode,
    VaCheckbox,
  },
  data () {
    return {
      checkboxValue: false,
    }
  },
}
</script>
