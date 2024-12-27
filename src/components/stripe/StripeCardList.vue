<template>
  <div class="grid md:grid-cols-2 grid-cols-1 gap-4">
    <template v-if="loading">
      <div
        v-for="i in 4"
        :key="i"
        class="min-h-[114px] p-4 rounded-lg border border-dashed border-backgroundBorder flex flex-row items-center gap-6"
      >
        <div class="flex flex-col gap-2 flex-grow">
          <VaSkeleton height="1.5rem" variant="text" width="10rem" />
          <div class="flex gap-4">
            <VaSkeleton height="3rem" variant="rounded" width="5rem" />
            <VaSkeleton :lines="2" variant="text" />
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <CardListItem
        v-for="paymentCard in list"
        :key="paymentCard.id"
        :card="paymentCard"
        :billing-details="paymentCard.billingDetails"
        :class="{ 'border-primary': selectedCardId === paymentCard.id }"
        @click="selectCard(paymentCard.id)"
      >
        <slot name="card-actions" :card="paymentCard"></slot>
      </CardListItem>
      <slot></slot>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, computed, ref } from 'vue'

const emits = defineEmits(['select'])

import CardListItem from './StripeCardItem.vue'

import { useStripePaymentCardsStore } from '../../stores/stripe-cards'

const store = useStripePaymentCardsStore()

const selectedCardId = ref<string | null>(null)

const list = computed(() => store.paymentCards)
const loading = computed(() => store.loading)

// Select card function
const selectCard = (cardId: string) => {
  selectedCardId.value = cardId
  emits('select', cardId)
}

// Fetch cards on component mount
onMounted(() => {
  store.load()
})
</script>
