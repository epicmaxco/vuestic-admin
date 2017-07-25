<template>
  <div class="tabs">
    <vuestic-tabs :names="['Overview', 'Data Visualization', 'Users & Members', 'Setup Profile']">
      <div slot="Overview">
        Overview
      </div>
      <div slot="Data Visualization">
        Data Visualisation
      </div>
      <div slot="Users & Members">
        Users & Members
      </div>
      <div slot="Setup Profile">
        Setup Profile
      </div>
    </vuestic-tabs>
  </div>
</template>

<script>
  import VuesticTabs from '../../common/vuestic-tabs/VuesticTabs.vue'

  export default {
    name: 'tabs',
    components: {
      VuesticTabs
    }
  }
</script>

<style lang="scss">

</style>
