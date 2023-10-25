<template>
  <div
    class="min-h-[114px] p-4 rounded-lg border border-dashed border-backgroundBorder flex flex-col sm:flex-row items-start sm:items-center gap-6"
  >
    <div class="flex flex-col gap-2 flex-grow">
      <div class="flex items-center">
        <div class="text-lg font-bold">{{ card.name }}</div>
        <va-badge v-if="card.isPrimary" text="Primary" color="danger" class="ml-2" />
      </div>
      <div class="flex gap-4 items-center">
        <PaymentSystem :type="card.paymentSystem" />
        <div>
          <div class="text-[15px] font-bold mb-2 capitalize">{{ card.paymentSystem }} {{ card.cardNumberMasked }}</div>
          <div class="text-secondary">Card expires at {{ card.expirationDate }}</div>
        </div>
      </div>
    </div>
    <div class="w-full sm:w-auto flex-none flex sm:block">
      <va-button class="mr-2 flex-grow" preset="primary" @click="emits('edit')">Edit</va-button>
      <va-button preset="primary" icon="mso-delete" @click="emits('remove')" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { defineProps, computed, defineEmits } from 'vue'
  import PaymentSystem from '../../payment-system/PaymentSystem.vue'
  import { PaymentCard } from '../../types'

  const emits = defineEmits(['edit', 'remove'])

  const props = defineProps<{
    card: PaymentCard
  }>()

  const card = computed(() => props.card)
</script>
