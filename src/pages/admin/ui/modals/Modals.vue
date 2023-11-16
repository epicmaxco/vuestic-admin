<template>
  <div class="modals grid grid-cols-12 gap-6">
    <VaCard class="modals-list larger-padding col-span-12">
      <VaCardTitle>{{ t('modal.title') }}</VaCardTitle>
      <VaCardContent>
        <VaButton class="mr-2 mb-2" color="danger" @click="showSmallModal = true">
          {{ t('modal.small') }}
        </VaButton>
        <VaButton class="mr-2 mb-2" color="info" @click="showMediumModal = true">
          {{ t('modal.medium') }}
        </VaButton>
        <VaButton class="mr-2 mb-2" color="warning" @click="showLargeModal = true">
          {{ t('modal.large') }}
        </VaButton>
        <VaButton class="mr-2 mb-2" color="success" @click="showStaticModal = true">
          {{ t('modal.static') }}
        </VaButton>
        <VaButton class="mb-2 mr-2" color="secondary" @click="showFullscreenModal = true">
          {{ t('modal.fullscreen') }}
        </VaButton>
      </VaCardContent>
    </VaCard>

    <VaCard class="modals-list larger-padding col-span-12">
      <VaCardTitle>{{ t('modal.titleOptions') }}</VaCardTitle>
      <VaCardContent>
        <VaButton class="mb-2 mr-2" color="danger" @click="showBlurredModal = true">
          {{ t('modal.blurred') }}
        </VaButton>
        <VaModal
          v-model="showAnchorModal"
          :cancel-text="t('modal.cancel')"
          :message="t('modal.message')"
          :ok-text="t('modal.confirm')"
          :title="t('modal.withAnchorSlot')"
          anchor-class="inline-flex"
        >
          <template #anchor="{ show }">
            <VaButton class="mb-2 mr-2" @click="show">
              {{ t('modal.withAnchorSlot') }}
            </VaButton>
          </template>
        </VaModal>
      </VaCardContent>
    </VaCard>

    <!--//Modals-->
    <VaModal
      v-model="showSmallModal"
      :cancel-text="t('modal.cancel')"
      :message="t('modal.message')"
      :ok-text="t('modal.confirm')"
      :title="t('modal.smallTitle')"
      size="small"
    />
    <VaModal
      v-model="showMediumModal"
      :cancel-text="t('modal.cancel')"
      :message="t('modal.message')"
      :ok-text="t('modal.confirm')"
      :title="t('modal.mediumTitle')"
    />
    <VaModal
      v-model="showLargeModal"
      :cancel-text="t('modal.cancel')"
      :message="t('modal.message')"
      :ok-text="t('modal.confirm')"
      :title="t('modal.largeTitle')"
      size="large"
    />
    <VaModal
      v-model="showFullscreenModal"
      :cancel-text="t('modal.cancel')"
      :message="t('modal.message')"
      :ok-text="t('modal.confirm')"
      :title="t('modal.fullscreen')"
      fullscreen
    />
    <VaModal
      v-model="showStaticModal"
      :cancel-text="t('modal.cancel')"
      :message="t('modal.staticMessage')"
      :ok-text="t('modal.confirm')"
      :title="t('modal.staticTitle')"
      no-dismiss
    />
    <VaModal
      v-model="showBlurredModal"
      :cancel-text="t('modal.cancel')"
      :message="t('modal.message')"
      :ok-text="t('modal.confirm')"
      :title="t('modal.blurred')"
      blur
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const showSmallModal = ref(false)
const showMediumModal = ref(false)
const showLargeModal = ref(false)
const showFullscreenModal = ref(false)
const showStaticModal = ref(false)

const showBlurredModal = ref(false)
const showAnchorModal = ref(false)
</script>
