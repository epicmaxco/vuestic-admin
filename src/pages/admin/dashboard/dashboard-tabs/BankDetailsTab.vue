<template>
  <div class="pt-2">
    <div class="title text-dark mb-3" :style="{color: theme.primary}">
      {{$t('dashboard.tabs.bankDetails.detailsFields')}}
    </div>
    <div class="row">
      <div class="xs12 md6">
        <va-input
          :label="$t('dashboard.tabs.bankDetails.bankName')"
          v-model="form.bankName"
        />
        <va-input
          :label="$t('dashboard.tabs.bankDetails.accountName')"
          v-model="form.accountName"
        />
        <va-input
          :label="$t('dashboard.tabs.bankDetails.sortCode')"
          v-model="form.sortCode"
        />
      </div>
      <div class="xs12 md6">
        <va-input
          :label="$t('dashboard.tabs.bankDetails.accountNumber')"
          v-model="form.accountNumber"
        />
        <va-input
          :label="$t('dashboard.tabs.bankDetails.notes')"
          v-model="form.notes"
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
import { useTheme } from 'vuestic-ui'

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
  computed: {
    theme() {
      return useTheme().getTheme()
    }
  },
  methods: {
    sendDetails () {
      // TODO: show toast does not exists
      this.showToast('Saved!')
    },
  },
}
</script>
