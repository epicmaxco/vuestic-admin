<template>
  <div class="form-wizard">
    <div class="row">
      <div class="col-md-12">
        <widget class="chart-widget" header-text="Simple Wizard">
          <vuestic-wizard
            :steps="steps">
            <div slot="page1">
              <h4>Step 1</h4>
              <p>This is step 1</p>
            </div>
            <div slot="page2">
              <h4>Step 2</h4>
              <p>This is step 2</p>
            </div>
            <div slot="page3">
              <h4>Step 3</h4>
              <p>This is step 3</p>
            </div>
          </vuestic-wizard>
        </widget>
      </div>
    </div>
  </div>
</template>

<script>
  import Widget from 'components/common/widget/Widget'
  import VuesticWizard from 'components/common/vuestic-wizard/VuesticWizard'

  export default {
    name: 'form-wizard',
    components: {
      Widget,
      VuesticWizard
    },
    data () {
      return {
        steps: [
          {
            label: 'Step 1. Choose activity',
            slot: 'page1'
          },
          {
            label: 'Step 2. Personal data',
            slot: 'page2'
          },
          {
            label: 'Step 3. Completed',
            slot: 'page3'
          }
        ]
      }
    }
  }
</script>

<style lang="scss">

</style>
