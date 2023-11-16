<template>
  <div class="notifications grid grid-cols-12 gap-6">
    <VaCard class="col-span-12">
      <VaCardTitle>{{ t('notificationsPage.notifications.title') }}</VaCardTitle>
      <VaCardContent class="flex flex-col gap-4">
        <VaCheckbox v-model="isCloseableAlertVisible" label="Toggle visibility" />
        <VaAlert v-model="isCloseableAlertVisible" class="w-full" closeable>
          <template #icon>
            <VaBadge :text="t('notificationsPage.notifications.success')" />
          </template>
          {{ t('notificationsPage.notifications.successMessage') }}
        </VaAlert>
        <VaAlert v-model="isCloseableAlertVisible" class="w-full" color="info" closeable>
          <template #icon>
            <VaBadge color="info" :text="t('notificationsPage.notifications.info')" />
          </template>
          {{ t('notificationsPage.notifications.infoMessage') }}
        </VaAlert>
        <VaAlert v-model="isCloseableAlertVisible" class="w-full" color="warning" closeable>
          <template #icon>
            <VaBadge color="warning" :text="t('notificationsPage.notifications.warning')" />
          </template>
          {{ t('notificationsPage.notifications.warningMessage') }}
        </VaAlert>
        <VaAlert v-model="isCloseableAlertVisible" class="w-full" color="danger" closeable>
          <template #icon>
            <VaBadge color="danger" :text="t('notificationsPage.notifications.danger')" />
          </template>
          {{ t('notificationsPage.notifications.dangerMessage') }}
        </VaAlert>
        <VaAlert v-model="isCloseableAlertVisible" class="w-full" color="gray" closeable>
          <template #icon>
            <VaBadge color="gray" :text="t('notificationsPage.notifications.gray')" />
          </template>
          {{ t('notificationsPage.notifications.warningMessage') }}
        </VaAlert>
        <VaAlert v-model="isCloseableAlertVisible" class="w-full" color="dark" closeable>
          <template #icon>
            <VaBadge color="dark" :text="t('notificationsPage.notifications.dark')" />
          </template>
          {{ t('notificationsPage.notifications.dangerMessage') }}
        </VaAlert>
      </VaCardContent>
    </VaCard>

    <VaCard class="col-span-12">
      <VaCardTitle>{{ t('notificationsPage.toasts.title') }}</VaCardTitle>
      <VaCardContent class="grid grid-cols-12 gap-6">
        <div class="py-3 col-span-12 md:col-span-6 flex flex-col gap-4">
          <VaInput
            v-model="toastText"
            :label="t('notificationsPage.toasts.textLabel')"
            class="control-input"
            required
          />
          <VaInput
            v-model="toastDuration"
            type="number"
            :label="t('notificationsPage.toasts.durationLabel')"
            class="control-input"
            required
          />
        </div>
        <div class="flex items-center col-span-12 md:col-span-6">
          <ToastPositionPicker v-model="toastPosition" />
        </div>
        <div class="flex col-span-12">
          <!-- There was slot="trigger" -->
          <VaButton color="primary" @click="launchToast">
            {{ t('notificationsPage.toasts.launchToast') }}
          </VaButton>
        </div>
      </VaCardContent>
    </VaCard>
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
