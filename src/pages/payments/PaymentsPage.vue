<template>
  <h1 class="page-title">Payment methods</h1>

  <va-card class="mb-6">
    <va-card-content>
      <CardList />
    </va-card-content>
  </va-card>

  <va-card class="mb-6">
    <va-card-content>
      <AddressList />

      <div class="space-y-2 mt-6">
        <div class="text-lg font-bold mb-2">Tax Location</div>
        <div class="space-y-1">
          <div class="text-sm text-gray-500">United States - 10% VAT</div>
          <div class="text-sm text-primary underline">More Info</div>
        </div>
      </div>
    </va-card-content>
  </va-card>
</template>

<script setup lang="ts">
  import CardList from './widgets/my-cards/PaymentCardList.vue'
  import AddressList from './widgets/billing-address/BillingAddressList.vue'
</script>
