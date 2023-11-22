<template>
  <div class="w-20 h-12 bg-backgroundElement rounded flex justify-center items-center align-bottom">
    <img v-if="props.type === 'mastercard'" alt="Mastercard Logo" src="./mastercard.png" />
    <img v-if="props.type === 'visa'" alt="Visa Logo" src="./visa.png" />
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import { PaymentSystemType } from '../types'

const props = defineProps<{
  type: PaymentSystemType
}>()
</script>
