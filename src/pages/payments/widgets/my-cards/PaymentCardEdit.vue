<template>
  <va-form ref="form" @submit.prevent="submit">
    <va-input
      v-model="paymentCard.name"
      class="mb-4"
      label="Card Name"
      :rules="[(v) => !!v || 'Card Name field is required']"
    />
    <va-checkbox v-model="paymentCard.isPrimary" label="Primary Card" class="mb-4" />
    <va-select
      v-model="paymentCard.paymentSystem"
      class="mb-4"
      label="Payment System"
      :options="paymentSystemTypeOptions"
      :rules="[(v) => !!v || 'Payment System field is required']"
    />
    <va-input
      v-model="paymentCard.cardNumberMasked"
      class="mb-4"
      label="Card Number"
      :rules="[(v) => !!v || 'Card Number field is required']"
      mask="creditCard"
      placeholder="#### #### #### ####"
    />
    <va-input
      v-model="paymentCard.expirationDate"
      class="mb-4"
      label="Expiration Date"
      :mask="{
        date: true,
        datePattern: ['m', 'y'],
      }"
      :rules="[
        (v) => !!v || 'Expiration Date field is required',
        (v) => /^\d{4}$/.test(v) || 'Expiration Date must be in MM/YY format',
      ]"
    />

    <div class="flex justify-end gap-3">
      <va-button preset="secondary" color="secondary" @click="emits('cancel')">Cancel</va-button>
      <va-button @click="submit">{{ submitText }}</va-button>
    </div>
  </va-form>
</template>

<script setup lang="ts">
  import { useForm } from 'vuestic-ui'
  import { PaymentCard, PaymentSystemType } from '../../types'
  import { defineEmits, watch, ref } from 'vue'

  const { validate } = useForm('form')
  const emits = defineEmits(['save', 'cancel'])

  const props = defineProps<{
    paymentCard: PaymentCard
    submitText: string
  }>()

  const paymentSystemTypeOptions = Object.values(PaymentSystemType)
  const paymentCard = ref<PaymentCard>()

  watch(
    () => props.paymentCard,
    (value) => {
      paymentCard.value = { ...value }
    },
    { deep: true, immediate: true },
  )

  const submit = () => {
    if (validate()) {
      emits('save', paymentCard.value)
    }
  }
</script>
