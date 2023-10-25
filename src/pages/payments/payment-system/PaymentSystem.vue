<template>
  <div class="w-20 h-12 bg-backgroundElement rounded flex justify-center items-center align-bottom">
    <img v-if="props.type === 'mastercard'" src="./mastercard.png" alt="Mastercard Logo" />
    <img v-if="props.type === 'visa'" src="./visa.png" alt="Visa Logo" />
  </div>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue'
  import { PaymentSystemType } from '../types'

  const props = defineProps<{
    type: PaymentSystemType
  }>()
</script>
