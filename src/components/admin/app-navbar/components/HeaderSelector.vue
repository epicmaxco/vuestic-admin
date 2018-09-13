<template>
  <span class="header-selector"
       @click="$emit('update:isOpen', !isOpen)">
    <vuestic-icon-collapsed v-if="isOpen" />
    <vuestic-icon-expanded v-if="!isOpen"/>
  </span>
</template>

<script>
  import VuesticIconCollapsed from '../../../../vuestic-theme/vuestic-components/vuestic-icon/VuesticIconCollapsed'
  import VuesticIconExpanded from '../../../../vuestic-theme/vuestic-components/vuestic-icon/VuesticIconExpanded'

  export default {
    name: 'header-selector',
    components: {
      VuesticIconCollapsed,
      VuesticIconExpanded
    },
    props: {
      isOpen: {
        type: Boolean,
        required: true
      },
    }
  }
</script>

<style lang="scss">
  .header-selector {
    @include flex-center();
    cursor: pointer;
  }

</style>
