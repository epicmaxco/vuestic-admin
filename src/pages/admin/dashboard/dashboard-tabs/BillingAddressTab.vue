<template>
  <div class="pt-2">
    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-12 md:col-span-6 flex flex-col">
        <div class="title mb-4" :style="computedStylesTitle">
          {{ t('dashboard.tabs.billingAddress.personalInfo') }}
        </div>
        <va-input v-model="form.name" :label="t('dashboard.tabs.billingAddress.firstName')" />
        <va-input v-model="form.email" :label="t('dashboard.tabs.billingAddress.email')" />
        <va-input v-model="form.address" :label="t('dashboard.tabs.billingAddress.address')" />
      </div>
      <div class="col-span-12 md:col-span-6 flex flex-col">
        <div class="title mb-4" :style="computedStylesTitle">
          {{ t('dashboard.tabs.billingAddress.companyInfo') }}
        </div>
        <va-select
          v-model="form.country"
          class="mb-4"
          :options="countriesList"
          :label="t('dashboard.tabs.billingAddress.country')"
          searchable
          clearable
        />
        <va-select
          v-model="form.city"
          class="mb-4"
          :label="t('dashboard.tabs.billingAddress.city')"
          :options="allowedCitiesList"
          key-by="text"
          track-by="text"
        />
        <va-checkbox v-model="form.connection" :label="t('dashboard.tabs.billingAddress.infiniteConnections')" />
      </div>
    </div>
    <div class="mt-3 flex flex-1 flex-wrap justify-center">
      <va-button @click="submit">
        {{ t('dashboard.tabs.billingAddress.addConnection') }}
      </va-button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, reactive, ref, watch } from 'vue'
  import { useI18n } from 'vue-i18n'

  import { useColors } from 'vuestic-ui'
  import { lineMapData } from '../../../../data/maps/lineMapData'
  import CountriesList from '../../../../data/CountriesList'

  const { colors } = useColors()
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

  const countriesList = computed(() => {
    return CountriesList.filter((item) => citiesList.value.filter(({ country }) => country === item).length)
  })

  const citiesList = computed(() => {
    return lineMapData.cities.map(({ title, country }) => ({ text: title, country }))
  })

  const allowedCitiesList = ref<typeof citiesList['value']>([])

  const computedStylesTitle = computed(() => ({ color: colors.dark }))

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
