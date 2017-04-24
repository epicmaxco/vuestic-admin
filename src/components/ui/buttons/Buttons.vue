<template>
  <div class="buttons-page-page">
    <div class="row">
      <widget class="col-sm-12"  header-text="Primary & Secondary Buttons">
        <div class="row">
          <div class="col-sm-3">
            <button class="btn btn-primary">
              BUTTON
            </button>
          </div>
          <div class="col-sm-3">
            <button class="btn btn-primary hover">
              HOVER
            </button>
          </div>
          <div class="col-sm-3">
            <button class="btn btn-primary focus">
              PRESSED
            </button>
          </div>
          <div class="col-sm-3">
            <button class="btn btn-primary" disabled>
              DISABLED
            </button>
          </div>
        </div>
      </widget>
    </div>
  </div>
</template>

<script>
  import Widget from 'components/common/widget/Widget'

  export default {
    name: 'buttons',
    components: {
      Widget
    }
  }
</script>

<style lang="scss">

</style>
