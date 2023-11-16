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
        <VaAlert v-model="isCloseableAlertVisible" class="w-full" closeable color="info">
          <template #icon>
            <VaBadge :text="t('notificationsPage.notifications.info')" color="info" />
          </template>
          {{ t('notificationsPage.notifications.infoMessage') }}
        </VaAlert>
        <VaAlert v-model="isCloseableAlertVisible" class="w-full" closeable color="warning">
          <template #icon>
            <VaBadge :text="t('notificationsPage.notifications.warning')" color="warning" />
          </template>
          {{ t('notificationsPage.notifications.warningMessage') }}
        </VaAlert>
        <VaAlert v-model="isCloseableAlertVisible" class="w-full" closeable color="danger">
          <template #icon>
            <VaBadge :text="t('notificationsPage.notifications.danger')" color="danger" />
          </template>
          {{ t('notificationsPage.notifications.dangerMessage') }}
        </VaAlert>
        <VaAlert v-model="isCloseableAlertVisible" class="w-full" closeable color="gray">
          <template #icon>
            <VaBadge :text="t('notificationsPage.notifications.gray')" color="gray" />
          </template>
          {{ t('notificationsPage.notifications.warningMessage') }}
        </VaAlert>
        <VaAlert v-model="isCloseableAlertVisible" class="w-full" closeable color="dark">
          <template #icon>
            <VaBadge :text="t('notificationsPage.notifications.dark')" color="dark" />
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
            :label="t('notificationsPage.toasts.durationLabel')"
            class="control-input"
            required
            type="number"
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

<script lang="ts" setup>
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
