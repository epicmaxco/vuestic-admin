<template>
  <div class="modals-page">
    <div class="va-row">
      <div class="flex md12">
        <vuestic-widget class="modals-list larger-padding"
                        :header-text="$t('modal.title')">
          <button class="btn btn-danger" @click="showSmallModal()">
            {{'modal.small' | translate }}
          </button>
          <button class="btn btn-info" @click="showMediumModal()">
            {{'modal.medium' | translate }}
          </button>
          <button class="btn btn-warning" @click="showLargeModal()">
            {{'modal.large' | translate }}
          </button>
          <button class="btn btn-success" @click="showStaticModal()">
            {{'modal.static' | translate }}
          </button>
        </vuestic-widget>
      </div>
    </div>

    <!--//Modals-->
    <vuestic-modal :show.sync="show" ref="smallModal" v-bind:small="true"
                   :cancelClass="'none'"
                   :okText="'modal.confirm' | translate"
                   :cancelText="'modal.cancel' | translate">
      <div slot="title">{{'modal.smallTitle' | translate}}</div>
      <div>
        There are three species of zebras: the plains zebra, the mountain zebra
        and the Grévy's zebra. The plains zebra
        and the mountain zebra belong to the subgenus Hippotigris, but Grévy's
        zebra is the sole species of subgenus
        Dolichohippus. The latter resembles an ass, to which it is closely
        related, while the former two are more
        horse-like. All three belong to the genus Equus, along with other living
        equids.
      </div>
    </vuestic-modal>
    <vuestic-modal :show.sync="show" ref="mediumModal"
                   :okText="'modal.confirm' | translate"
                   :cancelText="'modal.cancel' | translate">
      <div slot="title">{{'modal.mediumTitle' | translate}}</div>
      <div>
        There are three species of zebras: the plains zebra, the mountain zebra
        and the Grévy's zebra. The plains zebra
        and the mountain zebra belong to the subgenus Hippotigris, but Grévy's
        zebra is the sole species of subgenus
        Dolichohippus. The latter resembles an ass, to which it is closely
        related, while the former two are more
        horse-like. All three belong to the genus Equus, along with other living
        equids.
      </div>
    </vuestic-modal>
    <vuestic-modal :show.sync="show" v-bind:large="true" ref="largeModal"
                   :okText="'modal.confirm' | translate"
                   :cancelText="'modal.cancel' | translate">
      <div slot="title">{{'modal.largeTitle' | translate}}</div>
      <div>
        There are three species of zebras: the plains zebra, the mountain zebra
        and the Grévy's zebra. The plains zebra
        and the mountain zebra belong to the subgenus Hippotigris, but Grévy's
        zebra is the sole species of subgenus
        Dolichohippus. The latter resembles an ass, to which it is closely
        related, while the former two are more
        horse-like. All three belong to the genus Equus, along with other living
        equids.
      </div>
    </vuestic-modal>
    <vuestic-modal :show.sync="show"
                   v-bind:small="true" v-bind:force="true" ref="staticModal"
                   :cancelClass="'none'"
                   :okText="'modal.close' | translate">
      <div slot="title">{{'modal.staticTitle' | translate}}</div>
      <div>
        {{'modal.staticMessage' | translate}}
      </div>
    </vuestic-modal>
  </div>
</template>

<script>
export default {
  name: 'modals',

  data () {
    return {
      show: true,
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
    },
  },
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
