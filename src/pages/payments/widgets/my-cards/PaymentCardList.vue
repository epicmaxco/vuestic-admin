<template>
  <div class="grid md:grid-cols-2 grid-cols-1 gap-4">
    <VaSkeletonGroup
      v-if="loading"
      class="min-h-[114px] p-4 rounded-lg border border-dashed border-backgroundBorder flex flex-row items-center gap-6"
    >
      <div class="flex flex-col gap-2 flex-grow">
        <VaSkeleton class variant="text" width="10rem" height="1.5rem" />
        <div class="flex gap-4">
          <VaSkeleton variant="rounded" width="5rem" height="3rem" />
          <VaSkeleton variant="text" :lines="2" />
        </div>
      </div>
    </VaSkeletonGroup>
    <template v-else>
      <CardListItem
        v-for="paymentCard in list"
        :key="paymentCard.id"
        :card="paymentCard"
        @remove="remove(paymentCard)"
        @edit="cardToEdit = paymentCard"
      />
      <div
        class="sm:h-[114px] p-4 bg-primary bg-opacity-5 rounded-lg border border-dashed border-primary flex flex-col sm:flex-row items-start sm:items-center gap-4"
      >
        <div class="flex flex-col gap-2 flex-grow">
          <div class="text-lg font-bold leading-relaxed">Important note</div>
          <div class="text-secondary text-sm leading-tight">
            Please carefully read
            <span class="underline">Product Terms</span> before adding your new payment card
          </div>
        </div>
        <va-button class="flex-none w-full sm:w-auto" @click="showCreate = true">Add card</va-button>
      </div>
    </template>
  </div>
  <PaymentCardCreateModal v-if="showCreate" @close="showCreate = false" />
  <PaymentCardUpdateModal v-if="cardToEdit" :payment-card="cardToEdit" @close="cardToEdit = undefined" />
</template>

<script setup lang="ts">
  import CardListItem from './PaymentCardListItem.vue'
  import { usePaymentCardsStore } from '../../../../stores/payment-cards'
  import { computed, ref } from 'vue'
  import { PaymentCard } from '../../types'
  import { useModal, useToast } from 'vuestic-ui'
  import PaymentCardCreateModal from './PaymentCardCreateModal.vue'
  import PaymentCardUpdateModal from './PaymentCardUpdateModal.vue'

  const store = usePaymentCardsStore()

  const list = computed(() => store.allPaymentCards)
  const loading = computed(() => store.loading)
  const { confirm } = useModal()

  const showCreate = ref<boolean>(false)
  const cardToEdit = ref<PaymentCard>()
  const { init } = useToast()

  store.load()
  const remove = async (card: PaymentCard) => {
    confirm('Are you really sure you want to delete this card?').then((ok) => {
      if (!ok) return
      store.remove(card.id)
      init({ message: 'Payment card has been deleted', color: 'success' })
    })
  }
</script>
