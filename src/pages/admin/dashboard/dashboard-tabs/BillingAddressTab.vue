<template>
  <div class="pt-2">
    <div class="row">
      <div class="flex sm12 md6">
        <div class="title mb-3" :style="computedStylesTitle">
          {{ t('dashboard.tabs.billingAddress.personalInfo') }}
        </div>
        <va-input v-model="form.name" :label="t('dashboard.tabs.billingAddress.firstName')" />
        <va-input v-model="form.email" :label="t('dashboard.tabs.billingAddress.email')" />
        <va-input v-model="form.address" :label="t('dashboard.tabs.billingAddress.address')" />
      </div>
      <div class="flex sm12 md6">
        <div class="title mb-3" :style="computedStylesTitle">
          {{ t('dashboard.tabs.billingAddress.companyInfo') }}
        </div>
        <va-select
          v-model="form.country"
          :options="countriesList"
          :label="t('dashboard.tabs.billingAddress.country')"
          searchable
          clearable
          class="mb-3"
        />
        <va-select
          v-model="form.city"
          :label="t('dashboard.tabs.billingAddress.city')"
          :options="allowedCitiesList"
          key-by="text"
          track-by="text"
          class="mb-3"
        />
        <va-checkbox v-model="form.connection" :label="t('dashboard.tabs.billingAddress.infiniteConnections')" />
      </div>
    </div>
    <div class="row justify--center mb-3">
      <va-button @click="submit">
        {{ t('dashboard.tabs.billingAddress.addConnection') }}
      </va-button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, reactive, ref, watch } from 'vue'
  import { useGlobalConfig } from 'vuestic-ui'
  import { useI18n } from 'vue-i18n'
  import { lineMapData } from '../../../../data/maps/LineMapData'
  import CountriesList from '../../../../data/CountriesList'

  const { getGlobalConfig } = useGlobalConfig()
  const { t } = useI18n()

  const emit = defineEmits<{
    (e: 'submit', data: typeof form): void
  }>()

  const form = reactive({
    name: 'John Smith',
    email: 'smith@gmail.com',
    address: '93  Guild Street',
    city: { text: 'London' },
    country: 'United Kingdom',
    connection: true,
  })

  const theme = computed(() => getGlobalConfig().colors!)

  const countriesList = computed(() => {
    return CountriesList.filter((item) => citiesList.value.filter(({ country }) => country === item).length)
  })

  const citiesList = computed(() => {
    return lineMapData.cities.map(({ title, country }) => ({ text: title, country }))
  })

  const allowedCitiesList = ref<typeof citiesList['value']>([])

  const computedStylesTitle = computed(() => ({ color: theme.value.dark }))

  watch(
    () => form.country,
    (newCountry, oldCountry) => {
      allowedCitiesList.value = form.country
        ? citiesList.value.filter(({ country }) => country === form.country)
        : [...citiesList.value]

      if (newCountry !== oldCountry) {
        const city = allowedCitiesList.value.find(({ country }) => country === newCountry)?.text || ''
        form.city = { text: city }
      }
    },
    { immediate: true },
  )

  function submit() {
    emit('submit', form)
  }
</script>

<style lang="scss" scoped>
  .va-input-wrapper {
    margin-bottom: 1rem;
  }
</style>
