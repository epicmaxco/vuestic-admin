<template>
  <div class="modals-page">
    <div class="row">
      <widget class="col-sm-12 modals-list larger-padding" header-text="Modals">
        <button class="btn btn-danger">
          MINI
        </button>
        <button class="btn btn-info">
          DETAILED
        </button>
      </widget>
    </div>
  </div>
</template>

<script>
  import Widget from 'components/common/widget/Widget'

  export default {
    name: 'modals',
    components: {
      Widget
    }
  }
</script>

<style lang="scss">
  .modals-page {
    .modals-list {
      .btn {
        margin-right: 20px;
        margin-bottom: 25px;
      }
    }
  }
</style>
