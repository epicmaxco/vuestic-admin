<template>
  <div class="modals-page">
    <div class="va-row">
      <div class="flex md12">
        <vuestic-widget
          class="modals-list larger-padding"
          :header-text="$t('modal.title')"
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
        </vuestic-widget>
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
      v-model="showStaticModal"
      size="small"
      :title=" $t('modal.staticTitle') "
      cancelClass="none"
      :okText=" $t('modal.close') "
      :message=" $t('modal.staticMessage') "
      :noOutsideDismiss="true"
    />
  </div>
</template>

<script>
import VaButton from '../../../vuestic-theme/vuestic-components/va-button/VaButton'
export default {
  name: 'modals',
  components: { VaButton },
  data () {
    return {
      show: true,
      showSmallModal: false,
      showMediumModal: false,
      showLargeModal: false,
      showStaticModal: false
    }
  }
}
</script>
