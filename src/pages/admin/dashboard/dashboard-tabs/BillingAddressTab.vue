<template>
  <div class="pt-2">
    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-12 md:col-span-6 flex flex-col">
        <div :style="computedStylesTitle" class="title mb-4">
          {{ t('dashboard.tabs.billingAddress.personalInfo') }}
        </div>
        <VaInput v-model="form.name" :label="t('dashboard.tabs.billingAddress.firstName')" />
        <VaInput v-model="form.email" :label="t('dashboard.tabs.billingAddress.email')" />
        <VaInput v-model="form.address" :label="t('dashboard.tabs.billingAddress.address')" />
      </div>
      <div class="col-span-12 md:col-span-6 flex flex-col">
        <div :style="computedStylesTitle" class="title mb-4">
          {{ t('dashboard.tabs.billingAddress.companyInfo') }}
        </div>
        <VaSelect
          v-model="form.country"
          :label="t('dashboard.tabs.billingAddress.country')"
          :options="countriesList"
          class="mb-4"
          clearable
          searchable
        />
        <VaSelect
          v-model="form.city"
          :label="t('dashboard.tabs.billingAddress.city')"
          :options="allowedCitiesList"
          class="mb-4"
          key-by="text"
          track-by="text"
        />
        <VaCheckbox v-model="form.connection" :label="t('dashboard.tabs.billingAddress.infiniteConnections')" />
      </div>
    </div>
    <div class="mt-3 flex flex-1 flex-wrap justify-center">
      <VaButton @click="submit">
        {{ t('dashboard.tabs.billingAddress.addConnection') }}
      </VaButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
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

const allowedCitiesList = ref<(typeof citiesList)['value']>([])

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
