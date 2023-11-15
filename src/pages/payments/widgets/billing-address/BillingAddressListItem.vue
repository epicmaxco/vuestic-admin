<template>
  <div
    class="min-h-[114px] p-4 rounded-lg border border-dashed border-backgroundBorder flex flex-col sm:flex-row items-start sm:items-center gap-6"
  >
    <div class="flex flex-col gap-2 flex-grow">
      <div class="flex items-center">
        <div class="text-lg font-bold">{{ billingAddress.name }}</div>
        <va-badge v-if="billingAddress.isPrimary" text="Primary" color="danger" class="ml-2" />
      </div>
      <div class="text-secondary leading-5">
        <div>{{ billingAddress.street }}</div>
        <div>{{ billingAddress.city }}, {{ billingAddress.state }} {{ billingAddress.postalCode }}</div>
        <div>{{ billingAddress.country }}</div>
      </div>
    </div>
    <div class="w-full sm:w-auto flex-none flex sm:block">
      <va-button class="mr-2 flex-grow" preset="primary" @click="emits('edit')">Edit</va-button>
      <va-button preset="primary" icon="mso-delete" @click="emits('remove')" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { BillingAddress } from '../../types'

  const emits = defineEmits(['edit', 'remove'])

  const props = defineProps<{
    billingAddress: BillingAddress
  }>()

  const billingAddress = computed(() => props.billingAddress)
</script>
