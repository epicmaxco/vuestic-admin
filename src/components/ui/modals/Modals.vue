<template>
  <div class="modals-page">
    <div class="row">
      <widget class="col-sm-12 modals-list larger-padding" header-text="Modals">
        <button class="btn btn-danger" @click="showSmallModal()">
          SMALL
        </button>
        <button class="btn btn-info">
          DETAILED
        </button>
      </widget>
    </div>

    <!--//Modals-->
    <modal :show.sync="show" ref="smallModal">
      Modal Text
    </modal>
  </div>
</template>

<script>
  import Widget from 'components/common/widget/Widget'
  import Modal from 'components/common/modal/Modal'

  export default {
    name: 'modals',
    components: {
      Widget,
      Modal
    },
    data () {
      return {
        show: true
      }
    },
    methods: {
      showSmallModal () {
        this.$refs.smallModal.open()
      }
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
