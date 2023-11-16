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
          anchor-class="inline-flex"
          :title="t('modal.withAnchorSlot')"
          :message="t('modal.message')"
          :ok-text="t('modal.confirm')"
          :cancel-text="t('modal.cancel')"
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
      size="small"
      :title="t('modal.smallTitle')"
      :message="t('modal.message')"
      :ok-text="t('modal.confirm')"
      :cancel-text="t('modal.cancel')"
    />
    <VaModal
      v-model="showMediumModal"
      :title="t('modal.mediumTitle')"
      :ok-text="t('modal.confirm')"
      :cancel-text="t('modal.cancel')"
      :message="t('modal.message')"
    />
    <VaModal
      v-model="showLargeModal"
      size="large"
      :title="t('modal.largeTitle')"
      :message="t('modal.message')"
      :ok-text="t('modal.confirm')"
      :cancel-text="t('modal.cancel')"
    />
    <VaModal
      v-model="showFullscreenModal"
      :title="t('modal.fullscreen')"
      :ok-text="t('modal.confirm')"
      :cancel-text="t('modal.cancel')"
      :message="t('modal.message')"
      fullscreen
    />
    <VaModal
      v-model="showStaticModal"
      :title="t('modal.staticTitle')"
      :ok-text="t('modal.confirm')"
      :cancel-text="t('modal.cancel')"
      :message="t('modal.staticMessage')"
      no-dismiss
    />
    <VaModal
      v-model="showBlurredModal"
      :title="t('modal.blurred')"
      :message="t('modal.message')"
      :ok-text="t('modal.confirm')"
      :cancel-text="t('modal.cancel')"
      blur
    />
  </div>
</template>

<script setup lang="ts">
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
