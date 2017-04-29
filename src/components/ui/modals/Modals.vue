<template>
  <div class="modals-page">
    <div class="row">
      <widget class="col-sm-12 modals-list larger-padding" header-text="Modals">
        <button class="btn btn-danger" @click="showSmallModal()">
          SMALL
        </button>
        <button class="btn btn-info" @click="showMediumModal()">
          MEDIUM
        </button>
        <button class="btn btn-warning">
          LARGE
        </button>
      </widget>
    </div>

    <!--//Modals-->
    <modal :show.sync="show" ref="smallModal">
      Modal Text
    </modal>
    <modal :show.sync="show" ref="mediumModal">
      <div slot="title">Medium modal</div>
      <div>
        There are three species of zebras: the plains zebra, the mountain zebra and the Grévy's zebra. The plains zebra
        and the mountain zebra belong to the subgenus Hippotigris, but Grévy's zebra is the sole species of subgenus
        Dolichohippus. The latter resembles an ass, to which it is closely related, while the former two are more
        horse-like. All three belong to the genus Equus, along with other living equids.
      </div>
      <div slot="footer">
        <button class="btn btn-primary">REPLY</button>
      </div>
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
      },
      showMediumModal () {
        this.$refs.mediumModal.open()
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
