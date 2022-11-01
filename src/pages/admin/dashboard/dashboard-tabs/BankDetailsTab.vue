<template>
  <div class="pt-2">
    <div class="title text-dark">
      {{ t('dashboard.tabs.bankDetails.detailsFields') }}
    </div>
    <div class="row">
      <div class="flex xs12 md6">
        <va-input v-model="form.bankName" class="mb-3" :label="t('dashboard.tabs.bankDetails.bankName')" />
        <va-input v-model="form.accountName" class="mb-3" :label="t('dashboard.tabs.bankDetails.accountName')" />
        <va-input v-model="form.sortCode" class="mb-3" :label="t('dashboard.tabs.bankDetails.sortCode')" />
      </div>
      <div class="flex xs12 md6">
        <va-input v-model="form.accountNumber" class="mb-3" :label="t('dashboard.tabs.bankDetails.accountNumber')" />
        <va-input v-model="form.notes" class="mb-3" :label="t('dashboard.tabs.bankDetails.notes')" />
      </div>
    </div>
    <div class="row justify-center">
      <va-button @click="sendDetails">
        {{ t('dashboard.tabs.bankDetails.sendDetails') }}
      </va-button>
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
