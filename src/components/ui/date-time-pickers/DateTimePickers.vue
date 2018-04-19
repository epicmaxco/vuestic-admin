<template>
  <div class="sets-list row">
    <div class="col-md-12">
      <div class="row">
        <div class="col-lg-12">
          <vuestic-widget :headerText="$t('treeView.basic')">
            <vuestic-date-picker/>
          </vuestic-widget>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VuesticWidget
    from '../../../vuestic-theme/vuestic-components/vuestic-widget/VuesticWidget.vue'
  import VuesticDatePicker from '../../../vuestic-theme/vuestic-components/vuestick-datepicker/VuesticDatePicker.vue'

  export default {
    name: 'tree-view',
    components: {
      VuesticDatePicker,
      VuesticWidget
    },
    data () {
      return {
        treeViewData: {}
      }
    }
  }
</script>

<style lang="scss">

</style>
