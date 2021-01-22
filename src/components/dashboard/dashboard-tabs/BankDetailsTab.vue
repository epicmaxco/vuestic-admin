<template>
  <div class="pt-2">
    <div class="title text-dark mb-1" :style="{color: $themes.primary}">
      {{$t('dashboard.tabs.bankDetails.detailsFields')}}
    </div>
    <div class="row">
      <div class="flex xs12 md6">
        <va-input
          :label="$t('dashboard.tabs.bankDetails.bankName')"
          v-model="form.bankName"
          class="mb-3"
        />
        <va-input
          :label="$t('dashboard.tabs.bankDetails.accountName')"
          v-model="form.accountName"
          class="mb-3"
        />
        <va-input
          :label="$t('dashboard.tabs.bankDetails.sortCode')"
          v-model="form.sortCode"
          class="mb-3"
        />
      </div>
      <div class="flex xs12 md6">
        <va-input
          :label="$t('dashboard.tabs.bankDetails.accountNumber')"
          v-model="form.accountNumber"
          class="mb-3"
        />
        <va-input
          :label="$t('dashboard.tabs.bankDetails.notes')"
          v-model="form.notes"
          class="mb-3"
        />
      </div>
    </div>
    <div class="row justify--center">
      <va-button @click="sendDetails">
        {{ $t('dashboard.tabs.bankDetails.sendDetails') }}
      </va-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bank-details-tab',
  data () {
    return {
      form: {
        bankName: 'Raiffeisen Bank',
        accountName: 'GoalSaver',
        sortCode: '6558912',
        accountNumber: '000876432',
        notes: '',
      },
    }
  },
  methods: {
    sendDetails () {
      this.showToast('Saved!')
    },
  },
}
</script>
