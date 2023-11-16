<template>
  <VaCard class="mb-6">
    <VaCardContent>
      <h3 class="h3">Invoices</h3>
      <template v-for="(item, index) in items" :key="item.id">
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

        <VaDivider v-if="index !== items.length - 1" />
      </template>
    </VaCardContent>
  </VaCard>
</template>

<script lang="ts" setup>
import { useToast } from 'vuestic-ui'

const { init } = useToast()

const items = [
  {
    id: '1',
    date: 'March 25, 2022',
    amount: '$6.99',
  },
  {
    id: '2',
    date: 'February 24, 2022',
    amount: '$6.99',
  },
]

const download = () => {
  init({
    message: "Request received. We'll email your invoice once we've completed data collection.",
    color: 'success',
  })
}
</script>
