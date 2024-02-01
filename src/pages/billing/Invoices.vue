<template>
  <VaCard class="mb-6">
    <VaCardContent>
      <h2 class="page-sub-title">Invoices</h2>
      <template v-for="(item, index) in itemsInView" :key="item.id">
        <div class="flex items-center justify-between md:justify-items-stretch">
          <div class="flex items-center w-48">
            {{ item.date }}
          </div>
          <div class="w-20">
            {{ item.amount }}
          </div>
          <div>
            <VaButton preset="primary" @click="download">Download</VaButton>
          </div>
        </div>

        <VaDivider v-if="index !== itemsInView.length - 1" />
      </template>
    </VaCardContent>
    <VaCardActions vertical class="flex flex-wrap content-center mt-4">
      <VaButton v-if="numberOfInvoicesInVIew < maxNumberOfInvoices" preset="primary" @click="increaseNumberOfInvoices()"
        >Show more
      </VaButton>
      <VaButton v-else preset="primary" @click="numberOfInvoicesInVIew = minNumberOfInvoices">Show less </VaButton>
    </VaCardActions>
  </VaCard>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useToast } from 'vuestic-ui'
import { useI18n } from 'vue-i18n'

const { init } = useToast()
const { locale } = useI18n()

const minNumberOfInvoices = 7
const maxNumberOfInvoices = 20

const numberOfInvoicesInVIew = ref(minNumberOfInvoices)

const increaseNumberOfInvoices = (step = 10) => {
  numberOfInvoicesInVIew.value = Math.min(numberOfInvoicesInVIew.value + step, maxNumberOfInvoices)
}

function getRandomDateInBetween(start: string, end: string): Date {
  const startDate = Date.parse(start)
  const endDate = Date.parse(end)

  return new Date(Math.floor(Math.random() * (endDate - startDate + 1) + startDate))
}

function getLanguageCode(): string {
  const countryCodeToLanguageCodeMapping: Record<any, string> = {
    br: 'pt',
    cn: 'zh-CN',
    gb: 'en-GB',
    ir: 'fa',
  }

  return countryCodeToLanguageCodeMapping[locale.value] || 'en-GB'
}

function getRandomDateString(): string {
  const startDate = '2020-01-01'
  const endDate = '2023-12-01'

  const dateFormatOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  return getRandomDateInBetween(startDate, endDate).toLocaleDateString(getLanguageCode(), dateFormatOptions)
}

const allItems = Array.from({ length: maxNumberOfInvoices }, (_, i) => ({
  id: i,
  date: getRandomDateString(),
  amount: `$${(Math.random() * 100).toFixed(2)}`,
}))

const itemsInView = computed(() => {
  return allItems.slice(0, numberOfInvoicesInVIew.value)
})

const download = () => {
  init({
    message: "Request received. We'll email your invoice once we've completed data collection.",
    color: 'success',
  })
}
</script>
