<template>
  <div
    class="min-h-[114px] p-4 rounded-lg border border-dashed border-backgroundBorder flex flex-col sm:flex-row items-start sm:items-center gap-6"
  >
    <div class="flex flex-col gap-2 flex-grow">
      <div class="flex items-center">
        <div class="text-lg font-bold">{{ card.name }}</div>
        <VaBadge v-if="card.isPrimary" class="ml-2" color="danger" text="Primary" />
      </div>
      <div class="flex gap-4 items-center">
        <PaymentSystem :type="card.paymentSystem" />
        <div>
          <div class="text-[15px] font-bold mb-2 capitalize">{{ card.paymentSystem }} {{ card.cardNumberMasked }}</div>
          <div class="text-secondary">Card expires at {{ expirationDateString }}</div>
        </div>
      </div>
    </div>
    <div class="w-full sm:w-auto flex-none flex sm:block">
      <VaButton class="mr-2 flex-grow" preset="primary" @click="emits('edit')">Edit</VaButton>
      <VaButton icon="mso-delete" preset="primary" aria-label="Remove" @click="emits('remove')" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import PaymentSystem from '../../payment-system/PaymentSystem.vue'
import { PaymentCard } from '../../types'

const emits = defineEmits(['edit', 'remove'])

const props = defineProps<{
  card: PaymentCard
}>()

const card = computed(() => props.card)

const expirationDateString = computed(() => {
  const e = props.card.expirationDate
  return `${e[0]}${e[1]}/${e[2]}${e[3]}`
})
</script>
