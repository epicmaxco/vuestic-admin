<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 900px;">
      <div class="row">
        <div class="col-lg-12">
          <vuestic-multi-collapse :tabs="tabs"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VuesticMultiCollapse from './VuesticMultiCollapse.vue'

  export default {
    components: { VuesticMultiCollapse },
    data () {
      return {
        tabs: [
          {
            name: 'Expand One',
            description: 'Expand Description One'
          },
          {
            name: 'Expand Two',
            description: 'Expand Description Two'
          },
          {
            name: 'Expand Three',
            description: 'Expand Description Three'
          }
        ]
      }
    },
  }
</script>
