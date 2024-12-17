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
        @remove="remove(paymentCard)"
      />
      <div
        class="sm:h-[114px] p-4 rounded-lg border border-dashed border-primary flex flex-col sm:flex-row items-start sm:items-center gap-4"
        :style="{ backgroundColor: colorToRgba(getColor('primary'), 0.07) }"
      >
        <div class="flex flex-col gap-2 flex-grow">
          <div class="text-lg font-bold leading-relaxed">Important note</div>
          <div class="text-secondary text-sm leading-tight">
            Please carefully read Product Terms before adding your new payment card
          </div>
        </div>
        <VaButton class="flex-none w-full sm:w-auto" @click="showCreate = true">Add card</VaButton>
      </div>
    </template>
  </div>
  <PaymentCardCreateModal v-if="showCreate" @close="showCreate = false" />
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue'
import { useColors, useToast, useModal } from 'vuestic-ui'

import CardListItem from './PaymentStripeCardListItem.vue'
import PaymentCardCreateModal from './PaymentStripeCardCreateModal.vue'

import type { PaymentCard } from '../../types'
import { useStripePaymentCardsStore } from '../../../../stores/stripe-cards'

// State for cards and loading indicator
const showCreate = ref<boolean>(false)

const store = useStripePaymentCardsStore()

const list = computed(() => store.paymentCards)
const loading = computed(() => store.loading)

// Toast and modal utilities
const { init } = useToast()
const { confirm } = useModal()
const { getColor, colorToRgba } = useColors()

// Fetch cards from the backend
const remove = async (card: PaymentCard) => {
  confirm({
    message: 'Are you really sure you want to delete this card?',
    size: 'small',
    maxWidth: '380px',
  })
    .then((ok) => {
      if (!ok) return
      return store.remove(card.id)
    })
    .then(() => {
      init({ message: 'Payment card has been deleted', color: 'success' })
    })
}

// Fetch cards on component mount
onMounted(() => {
  store.load()
})
</script>
