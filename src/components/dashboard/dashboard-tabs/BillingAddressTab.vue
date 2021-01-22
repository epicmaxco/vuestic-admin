<template>
  <div class="pt-2">
    <div class="row">
      <div class="flex xs12 md6">
        <div
          class="title mb-3"
          :style="computedStylesTitle"
        >
          {{$t('dashboard.tabs.billingAddress.personalInfo')}}
        </div>
        <va-input
          :label="$t('dashboard.tabs.billingAddress.firstName')"
          v-model="form.name"
          class="mb-3"
        />
        <va-input
          :label="$t('dashboard.tabs.billingAddress.email')"
          v-model="form.email"
          class="mb-3"
        />
        <va-input
          :label="$t('dashboard.tabs.billingAddress.address')"
          v-model="form.address"
          class="mb-3"
        />
      </div>
      <div class="flex xs12 md6">
        <div
          class="title mb-3"
          :style="computedStylesTitle"
        >
          {{$t('dashboard.tabs.billingAddress.companyInfo')}}
        </div>
        <va-select
          :options="countriesList"
          :label="$t('dashboard.tabs.billingAddress.country')"
          v-model="form.country"
          class="mb-3"
          searchable
        />
        <va-select
          :label="$t('dashboard.tabs.billingAddress.city')"
          v-model="form.city"
          class="mb-3"
          :options="allowedCitiesList"
          key-by="text"
        />
        <va-checkbox
          :label="$t('dashboard.tabs.billingAddress.infiniteConnections')"
          v-model="form.connection"
          class="mb-3"
        />
      </div>
    </div>
    <div class="row justify--center">
      <va-button @click="submit">
        {{$t('dashboard.tabs.billingAddress.addConnection')}}
      </va-button>
    </div>
  </div>
</template>

<script>
import countriesList from '@/data/CountriesList'
import { getLineMapData } from '../../../data/maps/LineMapData'

export default {
  name: 'billing-address-tab',
  data () {
    return {
      form: {
        name: 'John Smith',
        email: 'smith@gmail.com',
        address: '93  Guild Street',
        city: { text: 'London' },
        country: 'United Kingdom',
        connection: true,
      },
      allowedCountriesList: [],
      allowedCitiesList: [],
    }
  },
  watch: {
    'form.country' (value) {
      this.allowedCitiesList = value
        ? this.citiesList.filter(({ country }) => country === value)
        : [...this.citiesList]
    },
    'form.city': {
      deep: true,
      handler ({ country }) {
        this.form.country = this.countriesList.find(item => item === country)
      },
    },
  },
  methods: {
    submit () {
      this.$emit('submit', this.form)
    },
  },
  computed: {
    citiesList () {
      return getLineMapData(this.$themes).cities.map(({ title, country }) => ({ text: title, country }))
    },
    countriesList () {
      return countriesList.filter(item => this.citiesList.filter(({ country }) => country === item).length)
    },
    computedStylesTitle () {
      return {
        color: this.$themes.dark,
      }
    },
  },
  mounted () {
    this.allowedCitiesList = [...this.citiesList]
  },
}
</script>
