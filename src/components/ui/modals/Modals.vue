<template>
  <div class="modals">
    <div class="row">
      <div class="flex md12">
        <va-card
          class="modals-list larger-padding"
          :title="$t('modal.title')"
        >
          <va-button color="danger" @click="showSmallModal = true">
            {{ $t('modal.small') }}
          </va-button>
          <va-button color="info" @click="showMediumModal = true">
            {{ $t('modal.medium') }}
          </va-button>
          <va-button color="warning" @click="showLargeModal = true">
            {{ $t('modal.large') }}
          </va-button>
          <va-button color="success" @click="showStaticModal = true">
            {{ $t('modal.static') }}
          </va-button>
        </va-card>
      </div>
    </div>
    <div class="row">
      <div class="flex md12">
        <va-card
          class="modals-list larger-padding"
          :title="$t('modal.titlePosition')"
        >
          <va-button color="danger" @click="showTopModal = true">
            {{ $t('modal.top') }}
          </va-button>
          <va-button color="info" @click="showRightModal = true">
            {{ $t('modal.right') }}
          </va-button>
          <va-button color="warning" @click="showBottomModal = true">
            {{ $t('modal.bottom') }}
          </va-button>
          <va-button color="success" @click="showLeftModal = true">
            {{ $t('modal.left') }}
          </va-button>
        </va-card>
      </div>
    </div>

    <!--//Modals-->
    <va-modal
      v-model="showSmallModal"
      size="small"
      :title=" $t('modal.smallTitle')"
      :message=" $t('modal.message') "
      :okText=" $t('modal.confirm') "
      :cancelText=" $t('modal.cancel') "
    />
    <va-modal
      v-model="showMediumModal"
      :title=" $t('modal.mediumTitle') "
      :okText=" $t('modal.confirm') "
      :cancelText=" $t('modal.cancel') "
      :message=" $t('modal.message') "
    />
    <va-modal
      v-model="showLargeModal"
      size="large"
      :title=" $t('modal.largeTitle') "
      :message=" $t('modal.message') "
      :okText=" $t('modal.confirm') "
      :cancelText=" $t('modal.cancel') "
    />
    <va-modal
      v-model="showTopModal"
      position="top"
      :title=" $t('modal.top')"
      :message=" $t('modal.message') "
      :okText=" $t('modal.confirm') "
      :cancelText=" $t('modal.cancel') "
    />
    <va-modal
      v-model="showRightModal"
      position="right"
      :title=" $t('modal.right') "
      :okText=" $t('modal.confirm') "
      :cancelText=" $t('modal.cancel') "
      :message=" $t('modal.message') "
    />
    <va-modal
      v-model="showBottomModal"
      position="bottom"
      :title=" $t('modal.bottom') "
      :message=" $t('modal.message') "
      :okText=" $t('modal.confirm') "
      :cancelText=" $t('modal.cancel') "
    />
    <va-modal
      v-model="showLeftModal"
      position="left"
      :title=" $t('modal.left') "
      cancelClass="none"
      :okText=" $t('modal.close') "
      :message=" $t('modal.staticMessage') "
    />
    <va-modal
      v-model="showStaticModal"
      :title=" $t('modal.staticTitle') "
      cancelClass="none"
      :okText=" $t('modal.close') "
      :message=" $t('modal.staticMessage') "
      noOutsideDismiss
      noEscDismiss
    />
  </div>
</template>

<script>
export default {
  name: 'modals',
  data () {
    return {
      show: true,
      showSmallModal: false,
      showMediumModal: false,
      showLargeModal: false,
      showTopModal: false,
      showRightModal: false,
      showBottomModal: false,
      showLeftModal: false,
      showStaticModal: false,
    }
  },
}
</script>
