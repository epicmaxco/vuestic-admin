<template>
  <VaCard class="mb-6">
    <VaCardContent>
      <h2 class="page-sub-title">Invoices</h2>
      <template v-for="(item, index) in invoices" :key="item.id">
        <div class="flex items-center justify-between md:justify-items-stretch">
          <div class="flex items-center w-48">
            {{ formatDate(item.created) }}
          </div>
          <div class="w-20">
            {{ formatCurrency(item.amount_due, item.currency) }}
          </div>
          <div>
            <VaButton preset="primary" @click="download(item.id)">Download</VaButton>
          </div>
        </div>

        <VaDivider v-if="index !== invoices.length - 1" />
      </template>
    </VaCardContent>
    <VaCardActions vertical class="flex flex-wrap content-center mt-4">
      <VaButton v-if="store.hasMore && !store.loading" preset="primary" @click="store.loadMore"> Load more</VaButton>
      <VaButton v-if="store.loading" preset="secondary" disabled> Loading...</VaButton>
    </VaCardActions>
  </VaCard>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useToast } from 'vuestic-ui'
import { useI18n } from 'vue-i18n'
import { storeToRefs } from 'pinia'
import { useInvoicesStore } from '../../stores/invoices' // Import the Pinia store for invoices

const { init } = useToast()
const { locale } = useI18n()
const store = useInvoicesStore() // Initialize the Pinia store

// Compute the list of invoices to display based on the user's selection
const { invoices } = storeToRefs(store)

// Format the invoice date
const formatDate = (timestamp: number) => {
  const date = new Date(timestamp * 1000) // Stripe uses Unix timestamps
  return date.toLocaleDateString(locale.value, { year: 'numeric', month: 'long', day: 'numeric' })
}

// Format the currency display
const formatCurrency = (amount: number, currency: string) => {
  return new Intl.NumberFormat(locale.value, { style: 'currency', currency }).format(amount / 100)
}

// Download the invoice (placeholder)
const download = (invoiceId: string) => {
  store.loadMore()
  init({ message: `Download invoice ${invoiceId} (not implemented)`, color: 'info' })
}

// Load the invoices when the component is mounted
onMounted(() => {
  store.clear()
  store.load()
})
</script>
