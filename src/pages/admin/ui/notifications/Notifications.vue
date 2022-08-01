<template>
  <div class="notifications">
    <div class="row">
      <div class="flex xs12">
        <va-card>
          <va-card-title>{{ t('notificationsPage.notifications.title') }}</va-card-title>
          <va-card-content>
            <div class="mb-3">
              <va-checkbox v-model="isCloseableAlertVisible" label="Toggle visibility" />
            </div>
            <div class="mb-3">
              <va-alert v-model="isCloseableAlertVisible" closeable>
                <template #icon>
                  <va-badge :text="t('notificationsPage.notifications.success')" />
                </template>
                {{ t('notificationsPage.notifications.successMessage') }}
              </va-alert>
            </div>
            <div class="mb-3">
              <va-alert v-model="isCloseableAlertVisible" color="info" closeable>
                <template #icon>
                  <va-badge color="info" :text="t('notificationsPage.notifications.info')" />
                </template>
                {{ t('notificationsPage.notifications.infoMessage') }}
              </va-alert>
            </div>
            <div class="mb-3">
              <va-alert v-model="isCloseableAlertVisible" color="warning" closeable>
                <template #icon>
                  <va-badge color="warning" :text="t('notificationsPage.notifications.warning')" />
                </template>
                {{ t('notificationsPage.notifications.warningMessage') }}
              </va-alert>
            </div>
            <div class="mb-3">
              <va-alert v-model="isCloseableAlertVisible" color="danger" closeable>
                <template #icon>
                  <va-badge color="danger" :text="t('notificationsPage.notifications.danger')" />
                </template>
                {{ t('notificationsPage.notifications.dangerMessage') }}
              </va-alert>
            </div>
            <div class="mb-3">
              <va-alert v-model="isCloseableAlertVisible" color="gray" closeable>
                <template #icon>
                  <va-badge color="gray" :text="t('notificationsPage.notifications.gray')" />
                </template>
                {{ t('notificationsPage.notifications.warningMessage') }}
              </va-alert>
            </div>
            <div class="mb-3">
              <va-alert v-model="isCloseableAlertVisible" color="dark" closeable>
                <template #icon>
                  <va-badge color="dark" :text="t('notificationsPage.notifications.dark')" />
                </template>
                {{ t('notificationsPage.notifications.dangerMessage') }}
              </va-alert>
            </div>
          </va-card-content>
        </va-card>
      </div>
    </div>

    <div class="row">
      <div class="flex xs12">
        <va-card>
          <va-card-title>{{ t('notificationsPage.toasts.title') }}</va-card-title>
          <va-card-content class="row">
            <div class="flex xs12 md6">
              <va-input
                v-model="toastText"
                :label="t('notificationsPage.toasts.textLabel')"
                class="control-input mb-3"
                required
              />
              <va-input
                v-model="toastDuration"
                type="number"
                :label="t('notificationsPage.toasts.durationLabel')"
                class="control-input mb-3"
                required
              />
              <!-- <va-input
                v-model="toastIcon"
                :label="t('notificationsPage.toasts.iconLabel')"
                class="control-input mb-0"
                required
              /> -->
            </div>
            <div class="flex xs12 md6">
              <div class="row">
                <div class="flex xs12">
                  <toast-position-picker v-model="toastPosition" />
                </div>
                <!-- <div class="flex xs12">
                  <va-checkbox
                    :label="t('notificationsPage.toasts.fullWidthLabel')"
                    :id="'toast-fullwidth'"
                    v-model="isToastFullWidth"
                  />
                </div> -->
              </div>
            </div>
            <div class="flex xs12">
              <!-- There was slot="trigger" -->
              <va-button class="ma-0" color="primary" @click="launchToast">
                {{ t('notificationsPage.toasts.launchToast') }}
              </va-button>
            </div>
          </va-card-content>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { ToastPosition, useToast } from 'vuestic-ui'
  import ToastPositionPicker from './ToastPositionPicker.vue'

  const { t } = useI18n()
  const { init } = useToast()

  const isCloseableAlertVisible = ref(true)

  const toastText = ref('This toast is awesome!')
  const toastDuration = ref(2500)
  const toastPosition = ref<ToastPosition>('bottom-right')

  function launchToast() {
    init({
      message: toastText.value,
      position: toastPosition.value,
      duration: Number(toastDuration.value),
    })
  }
</script>
