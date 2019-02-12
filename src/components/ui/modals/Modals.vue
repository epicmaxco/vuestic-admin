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
    <va-modal
      v-model="isShowSmallModal"
      size="small"
      :title="'modal.smallTitle' | translate"
      :message="'modal.message' | translate"
      :okText="'modal.confirm' | translate"
      :cancelText="'modal.cancel' | translate"
    />
    <va-modal
      v-model="isShowMediumModal"
      :title="'modal.mediumTitle' | translate"
      :okText="'modal.confirm' | translate"
      :cancelText="'modal.cancel' | translate"
      :message="'modal.message' | translate"
    />
    <va-modal
      v-model="isShowLargeModal"
      size="large"
      :title="'modal.largeTitle' | translate"
      :message="'modal.message' | translate"
      :okText="'modal.confirm' | translate"
      :cancelText="'modal.cancel' | translate"
    />
    <va-modal
      v-model="isShowStaticModal"
      size="small"
      :title="'modal.staticTitle' | translate"
      cancelClass="none"
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
