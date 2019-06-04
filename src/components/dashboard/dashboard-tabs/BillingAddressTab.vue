<template>
  <div class="billing-tab pt-2">
    <div class="va-row">
      <div class="flex xs12 md6">
        <div class="title text-dark mb-3">
          Personal Info
        </div>
        <va-input
          label="First name & Last Name"
          v-model="form.name"
        />
        <va-input
          label="Email"
          v-model="form.email"
        />
        <va-input
          label="Address"
          v-model="form.address"
        />
      </div>
      <div class="flex xs12 md6">
        <div class="title text-dark mb-3">
          Company Info
        </div>
        <va-input
          label="City"
          v-model="form.city"
        />
        <va-input
          label="Country"
          v-model="form.country"
        />
        <va-checkbox
          label="Infinite connections"
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
