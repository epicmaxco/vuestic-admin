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
        <button class="btn btn-warning" @click="showLargeModal()">
          LARGE
        </button>
        <button class="btn btn-success" @click="showStaticModal()">
          STATIC
        </button>
      </widget>
    </div>

    <!--//Modals-->
    <modal :show.sync="show" ref="smallModal" v-bind:small="true" :cancelClass="'none'">
      <div slot="title">Small modal</div>
      <div>
        There are three species of zebras: the plains zebra, the mountain zebra and the Grévy's zebra. The plains zebra
        and the mountain zebra belong to the subgenus Hippotigris, but Grévy's zebra is the sole species of subgenus
        Dolichohippus. The latter resembles an ass, to which it is closely related, while the former two are more
        horse-like. All three belong to the genus Equus, along with other living equids.
      </div>
    </modal>
    <modal :show.sync="show" ref="mediumModal">
      <div slot="title">Medium modal</div>
      <div>
        There are three species of zebras: the plains zebra, the mountain zebra and the Grévy's zebra. The plains zebra
        and the mountain zebra belong to the subgenus Hippotigris, but Grévy's zebra is the sole species of subgenus
        Dolichohippus. The latter resembles an ass, to which it is closely related, while the former two are more
        horse-like. All three belong to the genus Equus, along with other living equids.
      </div>
    </modal>
    <modal :show.sync="show" v-bind:large="true" ref="largeModal">
      <div slot="title">Large Modal</div>
      <div>
        There are three species of zebras: the plains zebra, the mountain zebra and the Grévy's zebra. The plains zebra
        and the mountain zebra belong to the subgenus Hippotigris, but Grévy's zebra is the sole species of subgenus
        Dolichohippus. The latter resembles an ass, to which it is closely related, while the former two are more
        horse-like. All three belong to the genus Equus, along with other living equids.
      </div>
    </modal>
    <modal :show.sync="show" v-bind:small="true" v-bind:force="true" ref="staticModal" :cancelClass="'none'" :okText="'CLOSE'">
      <div slot="title">Static Modal</div>
      <div>
        This is a static modal, backdrop click will not close it.
      </div>
    </modal>
  </div>
</template>

<script>
  import Widget from '../../vuestic-components/vuestic-widget/VuesticWidget'
  import Modal from '../../vuestic-components/vuestic-modal/VuesticModal'

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
      },
      showLargeModal () {
        this.$refs.largeModal.open()
      },
      showStaticModal () {
        this.$refs.staticModal.open()
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
