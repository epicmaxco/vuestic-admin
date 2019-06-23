<template>
  <div class="pt-2">
    <div class="va-row">
      <div class="flex xs12 md6">
        <div class="title text-dark mb-3">
          {{$t('dashboard.tabs.billingAddress.personalInfo')}}
        </div>
        <va-input
          :label="$t('dashboard.tabs.billingAddress.firstName')"
          v-model="form.name"
        />
        <va-input
          :label="$t('dashboard.tabs.billingAddress.email')"
          v-model="form.email"
        />
        <va-input
          :label="$t('dashboard.tabs.billingAddress.address')"
          v-model="form.address"
        />
      </div>
      <div class="flex xs12 md6">
        <div class="title text-dark mb-3">
          {{$t('dashboard.tabs.billingAddress.companyInfo')}}
        </div>
        <va-input
          :label="$t('dashboard.tabs.billingAddress.city')"
          v-model="form.city"
        />
        <va-input
          :label="$t('dashboard.tabs.billingAddress.country')"
          v-model="form.country"
        />
        <va-checkbox
          :label="$t('dashboard.tabs.billingAddress.infiniteConnections')"
          v-model="form.connection"
        />
      </div>
    </div>
    <div class="va-row justify--center">
      <va-button>
        Add Connection
      </va-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'billing-address-tab',
  data () {
    return {
      form: {
        name: 'John Smith',
        email: 'smith@gmail.com',
        address: '93  Guild Street',
        city: 'London',
        country: 'United Kingdom',
        connection: true,
      },
    }
  },
}
</script>
