<template>
  <div class="notifications grid grid-cols-12 gap-6">
    <va-card class="col-span-12">
      <va-card-title>{{ t('notificationsPage.notifications.title') }}</va-card-title>
      <va-card-content class="flex flex-col gap-4">
        <va-checkbox v-model="isCloseableAlertVisible" label="Toggle visibility" />
        <va-alert v-model="isCloseableAlertVisible" class="w-full" closeable>
          <template #icon>
            <va-badge :text="t('notificationsPage.notifications.success')" />
          </template>
          {{ t('notificationsPage.notifications.successMessage') }}
        </va-alert>
        <va-alert v-model="isCloseableAlertVisible" class="w-full" color="info" closeable>
          <template #icon>
            <va-badge color="info" :text="t('notificationsPage.notifications.info')" />
          </template>
          {{ t('notificationsPage.notifications.infoMessage') }}
        </va-alert>
        <va-alert v-model="isCloseableAlertVisible" class="w-full" color="warning" closeable>
          <template #icon>
            <va-badge color="warning" :text="t('notificationsPage.notifications.warning')" />
          </template>
          {{ t('notificationsPage.notifications.warningMessage') }}
        </va-alert>
        <va-alert v-model="isCloseableAlertVisible" class="w-full" color="danger" closeable>
          <template #icon>
            <va-badge color="danger" :text="t('notificationsPage.notifications.danger')" />
          </template>
          {{ t('notificationsPage.notifications.dangerMessage') }}
        </va-alert>
        <va-alert v-model="isCloseableAlertVisible" class="w-full" color="gray" closeable>
          <template #icon>
            <va-badge color="gray" :text="t('notificationsPage.notifications.gray')" />
          </template>
          {{ t('notificationsPage.notifications.warningMessage') }}
        </va-alert>
        <va-alert v-model="isCloseableAlertVisible" class="w-full" color="dark" closeable>
          <template #icon>
            <va-badge color="dark" :text="t('notificationsPage.notifications.dark')" />
          </template>
          {{ t('notificationsPage.notifications.dangerMessage') }}
        </va-alert>
      </va-card-content>
    </va-card>

    <va-card class="col-span-12">
      <va-card-title>{{ t('notificationsPage.toasts.title') }}</va-card-title>
      <va-card-content class="grid grid-cols-12 gap-6">
        <div class="py-3 col-span-12 md:col-span-6 flex flex-col gap-4">
          <va-input
            v-model="toastText"
            :label="t('notificationsPage.toasts.textLabel')"
            class="control-input"
            required
          />
          <va-input
            v-model="toastDuration"
            type="number"
            :label="t('notificationsPage.toasts.durationLabel')"
            class="control-input"
            required
          />
        </div>
        <div class="flex items-center col-span-12 md:col-span-6">
          <toast-position-picker v-model="toastPosition" />
        </div>
        <div class="flex col-span-12">
          <!-- There was slot="trigger" -->
          <va-button color="primary" @click="launchToast">
            {{ t('notificationsPage.toasts.launchToast') }}
          </va-button>
        </div>
      </va-card-content>
    </va-card>
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
