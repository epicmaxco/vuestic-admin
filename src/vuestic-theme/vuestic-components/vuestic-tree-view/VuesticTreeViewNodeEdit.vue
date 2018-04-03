<template>
  <div class="vuestic-tree-view-node-edit"
       :class="{'vuestic-tree-view-node-edit--selected': selected}"
  >
    <div class="vuestic-tree-view-node-edit__checkbox">
      <vuestic-div-checkbox
        v-model="selected"
      />
    </div>
    <div class="vuestic-tree-view-node-edit__icon" v-if="showIcon">
      <span class="icon">
        <i :class="iconClass" aria-hidden="true"/>
      </span>
    </div>
    <div class="vuestic-tree-view-node-edit__label">
      {{ vuesticTreeNode.label }}
    </div>
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
      },
      showIcon: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      iconClass () {
        return this.vuesticTreeNode.icon || 'ion ion-md-document'
      },
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
    display: flex;
    &__checkbox {
      margin-right: 0.75rem;
    }
    &__icon {
      margin-right: 0.375rem;
    }
    &__label {
      word-wrap: break-word;
      overflow: hidden;
    }
    &--selected #{&}__label {
      background-color: $vue-light-green;
    }
  }
</style>

