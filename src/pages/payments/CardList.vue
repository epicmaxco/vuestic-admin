<template>
  <div class="grid md:grid-cols-2 grid-cols-1 gap-4">
    <CardListItem v-for="card in cards" :key="card.id" :card="card" />

    <div
      class="sm:h-[114px] p-4 bg-primary bg-opacity-5 rounded-lg border border-dashed border-primary flex flex-col sm:flex-row items-start sm:items-center gap-4"
    >
      <div class="flex flex-col gap-2 flex-grow">
        <div class="text-lg font-bold leading-relaxed">Important note</div>
        <div class="text-secondary text-sm leading-tight">
          Please carefully read <span class="underline">Product Terms</span> before adding your new payment card
        </div>
      </div>
      <va-button class="flex-none w-full sm:w-auto">Add card</va-button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { PaymentSystemType, CardInfo } from './types'
  import CardListItem from './CardListItem.vue'

  const cards: CardInfo[] = [
    {
      id: '1',
      name: 'Main Card',
      isPrimary: true,
      paymentSystem: PaymentSystemType.Visa,
      cardNumberMasked: '****1679',
      expirationDate: '09/24',
    },
    {
      id: '2',
      name: 'Online Shopping',
      isPrimary: false,
      paymentSystem: PaymentSystemType.MasterCard,
      cardNumberMasked: '****8921',
      expirationDate: '11/23',
    },
    {
      id: '3',
      name: 'Backup Visa',
      isPrimary: false,
      paymentSystem: PaymentSystemType.MasterCard,
      cardNumberMasked: '****4523',
      expirationDate: '12/22',
    },
  ]
</script>
