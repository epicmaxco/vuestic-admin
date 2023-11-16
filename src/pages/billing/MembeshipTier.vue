<template>
  <VaCard class="mb-6">
    <VaCardContent>
      <h2 class="block-title">Membership tier</h2>
      <template v-for="(item, index) in items" :key="item.id">
        <div class="flex items-center justify-between md:justify-items-stretch">
          <div
            class="flex grow flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-1 justify-between items-start md:items-center"
          >
            <div class="flex items-center md:w-48">
              <div class="font-bold">{{ item.name }}</div>
              <VaBadge v-if="item.type === 'current'" class="ml-2" color="success" text="Selected" />
            </div>
            <div class="md:w-48">
              <p class="mb-1">{{ item.padletsTotal }} padlets</p>
              <p>{{ item.uploadLimit }}&nbsp;/upload</p>
            </div>
            <div class="md:w-48">
              <template v-if="item.priceMonth">
                <p class="mb-1">{{ item.priceMonth }}&nbsp;/month</p>
                <p>{{ item.priceYear }}&nbsp;/year</p>
              </template>
              <p v-else>Free</p>
            </div>
          </div>
          <div class="md:w-48 flex justify-end">
            <div v-if="item.type === 'current'" class="font-bold">{{ item.padletsUsed }} padlets used</div>
            <VaButton v-else-if="item.type === 'upgrade'">Upgrade</VaButton>
            <VaButton v-else preset="primary">Downgrade</VaButton>
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
      name: 'Platinum',
      type: 'upgrade',
      padletsUsed: 0,
      padletsTotal: 'Unlimited',
      priceMonth: '$9.99',
      priceYear: '$99.99',
      uploadLimit: '500MB',
    },
    {
      id: '2',
      name: 'Gold',
      type: 'current',
      padletsUsed: 19,
      padletsTotal: '20',
      priceMonth: '$6.99',
      priceYear: '$69.99',
      uploadLimit: '100MB',
    },
    {
      id: '3',
      name: 'Neon',
      type: 'downgrade',
      padletsUsed: 0,
      padletsTotal: '3',
      priceMonth: null,
      priceYear: null,
      uploadLimit: '20MB',
    },
  ]
</script>
