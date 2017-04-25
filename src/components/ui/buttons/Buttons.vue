<template>
  <div class="buttons-page">
    <div class="row">
      <widget class="col-sm-12 primary-secondary-buttons" header-text="Primary & Secondary Buttons">
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

        <div class="row">
          <div class="col-sm-3">
            <button class="btn btn-secondary">
              BUTTON
            </button>
          </div>
          <div class="col-sm-3">
            <button class="btn btn-secondary hover">
              HOVER
            </button>
          </div>
          <div class="col-sm-3">
            <button class="btn btn-secondary focus">
              PRESSED
            </button>
          </div>
          <div class="col-sm-3">
            <button class="btn btn-secondary" disabled>
              DISABLED
            </button>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12">
            <button class="btn btn-primary btn-sm">
              SMALL
            </button>
            <button class="btn btn-primary btn-micro">
              MICRO
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
  .buttons-page {
    .primary-secondary-buttons {
      .btn-micro {
        margin-top: 4px;
        margin-left: 20px;
      }
    }
  }
</style>
