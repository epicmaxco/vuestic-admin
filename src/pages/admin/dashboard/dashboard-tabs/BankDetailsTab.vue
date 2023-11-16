<template>
  <div class="pt-2">
    <div class="title text-dark">
      {{ t('dashboard.tabs.bankDetails.detailsFields') }}
    </div>
    <div class="py-3 grid grid-cols-12 gap-6">
      <div class="col-span-12 md:col-span-6 flex flex-col">
        <VaInput v-model="form.bankName" class="mb-4" :label="t('dashboard.tabs.bankDetails.bankName')" />
        <VaInput v-model="form.accountName" class="mb-4" :label="t('dashboard.tabs.bankDetails.accountName')" />
        <VaInput v-model="form.sortCode" class="mb-4" :label="t('dashboard.tabs.bankDetails.sortCode')" />
      </div>
      <div class="col-span-12 md:col-span-6 h-[min-content] flex flex-col">
        <VaInput v-model="form.accountNumber" class="mb-4" :label="t('dashboard.tabs.bankDetails.accountNumber')" />
        <VaInput v-model="form.notes" class="mb-4" :label="t('dashboard.tabs.bankDetails.notes')" />
      </div>
    </div>
    <div class="flex flex-1 flex-wrap justify-center">
      <VaButton @click="sendDetails">
        {{ t('dashboard.tabs.bankDetails.sendDetails') }}
      </VaButton>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useColors, useToast } from 'vuestic-ui'

  const { colors } = useColors()
  const { t } = useI18n()
  const { init: initToast } = useToast()

  const form = ref({
    bankName: 'Raiffeisen Bank',
    accountName: 'GoalSaver',
    sortCode: '6558912',
    accountNumber: '000876432',
    notes: '',
  })

  function sendDetails() {
    const color = colors.primary
    initToast({ message: `Details sent!`, color })
  }
</script>
