<template>
  <div
    style="left: 420px; top: 180px; background-color: white; position: absolute"
  >
    <vuestic-tree-node>
      <vuestic-div-checkbox
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

  import VuesticDivCheckbox from './vuestic-div-checkbox/VuesticDivCheckbox.vue'

  export default {
    components: {
      VuesticDivCheckbox,
      VuesticTreeNode,
    },
    data () {
      return {
        checkboxValue: false,
      }
    },
  }
</script>
