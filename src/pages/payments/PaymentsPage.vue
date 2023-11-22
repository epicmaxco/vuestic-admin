<template>
  <h1 class="page-title">Payment methods</h1>

  <VaCard class="mb-6">
    <VaCardContent>
      <div class="text-2xl font-bold leading-5 mb-6">My Cards</div>

      <PaymentCardList />
    </VaCardContent>
  </VaCard>

  <VaCard class="mb-6">
    <VaCardContent>
      <div class="text-2xl font-bold leading-5 mb-6">Billing Address</div>

      <BillingAddressList />

      <div class="space-y-2 mt-6">
        <div class="text-lg font-bold mb-2">Tax Location</div>
        <div class="space-y-1">
          <div class="text-sm text-gray-500">United States - 10% VAT</div>
          <div class="text-sm text-primary underline">More Info</div>
        </div>
      </div>
    </VaCardContent>
  </VaCard>
</template>

<script lang="ts" setup>
import PaymentCardList from './widgets/my-cards/PaymentCardList.vue'
import BillingAddressList from './widgets/billing-address/BillingAddressList.vue'
</script>
