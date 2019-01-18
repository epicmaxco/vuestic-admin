<template>
  <div class="modals-page">
    <div class="va-row">
      <div class="flex md12">
        <vuestic-widget class="modals-list larger-padding"
                        :header-text="$t('modal.title')">
          <button class="btn btn-danger" @click="isShowSmallModal = true">
            {{'modal.small' | translate }}
          </button>
          <button class="btn btn-info" @click="isShowMediumModal = true">
            {{'modal.medium' | translate }}
          </button>
          <button class="btn btn-warning" @click="isShowLargeModal = true">
            {{'modal.large' | translate }}
          </button>
          <button class="btn btn-success" @click="isShowStaticModal = true">
            {{'modal.static' | translate }}
          </button>
        </vuestic-widget>
      </div>
    </div>

    <!--//Modals-->
    <vuestic-modal
      v-model="isShowSmallModal"
      size="small"
      :title="'modal.smallTitle' | translate"
      message="There are three species of zebras: the plains zebra, the mountain zebra
      and the Grévy's zebra. The plains zebra
      and the mountain zebra belong to the subgenus Hippotigris, but Grévy's
      zebra is the sole species of subgenus
      Dolichohippus. The latter resembles an ass, to which it is closely
      related, while the former two are more
      horse-like. All three belong to the genus Equus, along with other living
      equids."
      :okText="'modal.confirm' | translate"
      :cancelText="'modal.cancel' | translate"
    />
    <vuestic-modal
      v-model="isShowMediumModal"
      :title="'modal.mediumTitle' | translate"
      :okText="'modal.confirm' | translate"
      :cancelText="'modal.cancel' | translate"
      message="There are three species of zebras: the plains zebra, the mountain zebra
        and the Grévy's zebra. The plains zebra
        and the mountain zebra belong to the subgenus Hippotigris, but Grévy's
        zebra is the sole species of subgenus
        Dolichohippus. The latter resembles an ass, to which it is closely
        related, while the former two are more
        horse-like. All three belong to the genus Equus, along with other living
        equids."
    />
    <vuestic-modal
      v-model="isShowLargeModal"
      size="large"
      :title="'modal.largeTitle' | translate"
      message="There are three species of zebras: the plains zebra, the mountain zebra
        and the Grévy's zebra. The plains zebra
        and the mountain zebra belong to the subgenus Hippotigris, but Grévy's
        zebra is the sole species of subgenus
        Dolichohippus. The latter resembles an ass, to which it is closely
        related, while the former two are more
        horse-like. All three belong to the genus Equus, along with other living
        equids."
      :okText="'modal.confirm' | translate"
      :cancelText="'modal.cancel' | translate"
    />
    <vuestic-modal
      v-model="isShowStaticModal"
      size="small"
      :title="'modal.staticTitle' | translate"
      :cancelClass="'none'"
      :okText="'modal.close' | translate"
      :message="'modal.staticMessage' | translate"
      :noOutsideDismiss="true"
    />
  </div>
</template>

<script>
export default {
  name: 'modals',

  data () {
    return {
      show: true,
      isShowSmallModal: false,
      isShowMediumModal: false,
      isShowLargeModal: false,
      isShowStaticModal: false
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
