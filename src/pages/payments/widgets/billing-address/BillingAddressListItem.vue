<template>
  <div
    class="min-h-[114px] p-4 rounded-lg border border-dashed border-backgroundBorder flex flex-col sm:flex-row items-start sm:items-center gap-6"
  >
    <div class="flex flex-col gap-2 flex-grow">
      <div class="flex items-center">
        <div class="text-lg font-bold">{{ billingAddress.name }}</div>
        <VaBadge v-if="billingAddress.isPrimary" class="ml-2" color="danger" text="Primary" />
      </div>
      <div class="text-secondary leading-5">
        <div>{{ billingAddress.street }}</div>
        <div>{{ billingAddress.city }}, {{ billingAddress.state }} {{ billingAddress.postalCode }}</div>
        <div>{{ billingAddress.country }}</div>
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
import { BillingAddress } from '../../types'

const emits = defineEmits(['edit', 'remove'])

const props = defineProps<{
  billingAddress: BillingAddress
}>()

const billingAddress = computed(() => props.billingAddress)
</script>
