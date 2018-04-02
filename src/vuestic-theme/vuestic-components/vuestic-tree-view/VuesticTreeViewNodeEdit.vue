<template>
  <div class="vuestic-tree-view-node-edit"
       :class="{'vuestic-tree-view-node-edit--selected': selected}"
  >
    <vuestic-div-checkbox v-model="selected"/>
    <span class="vuestic-tree-view-node-edit__label">
      {{ vuesticTreeNode.label }}
    </span>
  </div>
</template>

<script>
  import VuesticTreeNode from './VuesticTreeNode'
  import VuesticDivCheckbox from './vuestic-div-checkbox/VuesticDivCheckbox'

  export default {
    name: 'vuestic-tree-view-node-edit',
    components: {
      VuesticDivCheckbox
    },
    props: {
      /**
       * @type VuesticTreeNode
       */
      vuesticTreeNode: {
        type: VuesticTreeNode,
        required: true
      }
    },
    computed: {
      selected: {
        get () {
          return this.vuesticTreeNode.selected
        },
        set (selected) {
          this.vuesticTreeNode.selected = selected
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../sass/variables";

  .vuestic-tree-view-node-edit {
    &__label {
      margin-left: 5px;
      padding: 2px 0;
      .vuestic-tree-view-node-edit--selected {
        background-color: $vue-light-green;
      }
    }

  }
</style>

