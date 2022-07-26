<template>
  <div class="pt-2">
    <div class="title text-dark">
      {{ t('dashboard.tabs.bankDetails.detailsFields') }}
    </div>
    <div class="row">
      <div class="flex xs12 md6">
        <va-input v-model="form.bankName" :label="t('dashboard.tabs.bankDetails.bankName')" />
        <va-input v-model="form.accountName" :label="t('dashboard.tabs.bankDetails.accountName')" />
        <va-input v-model="form.sortCode" :label="t('dashboard.tabs.bankDetails.sortCode')" />
      </div>
      <div class="flex xs12 md6">
        <va-input v-model="form.accountNumber" :label="t('dashboard.tabs.bankDetails.accountNumber')" />
        <va-input v-model="form.notes" :label="t('dashboard.tabs.bankDetails.notes')" />
      </div>
    </div>
    <div class="row justify--center">
      <va-button @click="sendDetails">
        {{ t('dashboard.tabs.bankDetails.sendDetails') }}
      </va-button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useGlobalConfig, useToast } from 'vuestic-ui'

  const { getGlobalConfig } = useGlobalConfig()
  const { t } = useI18n()
  const { init: initToast } = useToast()

  const form = ref({
    bankName: 'Raiffeisen Bank',
    accountName: 'GoalSaver',
    sortCode: '6558912',
    accountNumber: '000876432',
    notes: '',
  })

  const theme = computed(() => getGlobalConfig().colors!)

  function sendDetails() {
    const color = theme.value?.primary
    initToast({ message: `Details sent!`, color })
  }
</script>

<style lang="scss" scoped>
  .va-input-wrapper {
    margin-bottom: 1rem;
  }
</style>
