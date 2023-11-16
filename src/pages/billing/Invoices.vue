<template>
  <VaCard class="mb-6">
    <VaCardContent>
      <h2 class="block-title">Invoices</h2>
      <template v-for="(item, index) in items" :key="item.id">
        <div class="flex items-center justify-between md:justify-items-stretch">
          <div class="flex items-center w-48">
            {{ item.date }}
          </div>
          <div class="w-20">
            {{ item.amount }}
          </div>
          <div>
            <VaButton preset="primary">Download</VaButton>
          </div>
        </div>

        <VaDivider v-if="index !== items.length - 1" />
      </template>
    </VaCardContent>
  </VaCard>
</template>

<script setup lang="ts">
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
</script>
