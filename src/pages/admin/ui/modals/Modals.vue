<template>
  <div class="modals">
    <div class="row">
      <div class="flex md12">
        <va-card class="modals-list larger-padding">
          <va-card-title>{{ t('modal.title') }}</va-card-title>
          <va-card-content>
            <va-button class="mr-2 mb-2" color="danger" @click="showSmallModal = true">
              {{ t('modal.small') }}
            </va-button>
            <va-button class="mr-2 mb-2" color="info" @click="showMediumModal = true">
              {{ t('modal.medium') }}
            </va-button>
            <va-button class="mr-2 mb-2" color="warning" @click="showLargeModal = true">
              {{ t('modal.large') }}
            </va-button>
            <va-button class="mr-2 mb-2" color="success" @click="showStaticModal = true">
              {{ t('modal.static') }}
            </va-button>
            <va-button class="mb-2 mr-2" color="secondary" @click="showFullscreenModal = true">
              {{ t('modal.fullscreen') }}
            </va-button>
          </va-card-content>
        </va-card>
      </div>
    </div>
    <div class="row">
      <div class="flex md12">
        <va-card class="modals-list larger-padding">
          <va-card-title>{{ t('modal.titleOptions') }}</va-card-title>
          <va-card-content>
            <va-button class="mb-2 mr-2" color="danger" @click="showBlurredModal = true">
              {{ t('modal.blurred') }}
            </va-button>
            <va-modal
              v-model="showAnchorModal"
              anchor-class="modal-anchor"
              :title="t('modal.withAnchorSlot')"
              :message="t('modal.message')"
              :ok-text="t('modal.confirm')"
              :cancel-text="t('modal.cancel')"
            >
              <template #anchor="{ show }">
                <va-button class="mb-2 mr-2" @click="show">
                  {{ t('modal.withAnchorSlot') }}
                </va-button>
              </template>
            </va-modal>
          </va-card-content>
        </va-card>
      </div>
    </div>

    <!--//Modals-->
    <va-modal
      v-model="showSmallModal"
      size="small"
      :title="t('modal.smallTitle')"
      :message="t('modal.message')"
      :ok-text="t('modal.confirm')"
      :cancel-text="t('modal.cancel')"
    />
    <va-modal
      v-model="showMediumModal"
      :title="t('modal.mediumTitle')"
      :ok-text="t('modal.confirm')"
      :cancel-text="t('modal.cancel')"
      :message="t('modal.message')"
    />
    <va-modal
      v-model="showLargeModal"
      size="large"
      :title="t('modal.largeTitle')"
      :message="t('modal.message')"
      :ok-text="t('modal.confirm')"
      :cancel-text="t('modal.cancel')"
    />
    <va-modal
      v-model="showFullscreenModal"
      :title="t('modal.fullscreen')"
      :ok-text="t('modal.confirm')"
      :cancel-text="t('modal.cancel')"
      :message="t('modal.message')"
      fullscreen
    />
    <va-modal
      v-model="showStaticModal"
      :title="t('modal.staticTitle')"
      :ok-text="t('modal.confirm')"
      :cancel-text="t('modal.cancel')"
      :message="t('modal.staticMessage')"
      no-dismiss
    />
    <va-modal
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

<style lang="scss">
  .modal-anchor {
    display: inline-flex;
  }
</style>
