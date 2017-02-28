<template>
  <div class="google-maps-page">
    <div class="row">
      <widget class="col-sm-12">
        <google-maps></google-maps>
      </widget>
    </div>
  </div>
</template>

<script>
  import GoogleMaps from './GoogleMaps'
  import Widget from 'components/common/widget/Widget'

  export default {
    name: 'google-maps-page',
    components: {
      GoogleMaps,
      Widget
    }
  }
</script>

<style lang="scss">

</style>
