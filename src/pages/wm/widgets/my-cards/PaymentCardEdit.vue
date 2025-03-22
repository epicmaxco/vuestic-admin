<template>
  <VaForm ref="form" @submit.prevent="submit">
    <VaInput
      v-model="paymentCardLocal.name"
      :rules="[(v) => !!v || 'Card Name field is required']"
      class="mb-4"
      label="Card Name"
    />
    <VaCheckbox v-model="paymentCardLocal.isPrimary" class="mb-4" label="Primary Card" />
    <VaSelect
      v-model="paymentCardLocal.paymentSystem"
      :options="paymentSystemTypeOptions"
      :rules="[(v) => !!v || 'Payment System field is required']"
      class="mb-4"
      label="Payment System"
    />
    <VaInput
      v-model="paymentCardLocal.cardNumberMasked"
      :rules="[(v) => !!v || 'Card Number field is required']"
      class="mb-4"
      label="Card Number"
      mask="creditCard"
      placeholder="#### #### #### ####"
    />
    <VaInput
      v-model="paymentCardLocal.expirationDate"
      :mask="{
        date: true,
        datePattern: ['m', 'y'],
      }"
      :rules="[
        (v) => !!v || 'Expiration Date field is required',
        (v) => /^\d{4}$/.test(v) || 'Expiration Date must be in MM/YY format',
      ]"
      class="mb-4"
      label="Expiration Date"
    />

    <div class="flex justify-end gap-3">
      <VaButton color="secondary" preset="secondary" @click="emits('cancel')">Cancel</VaButton>
      <VaButton @click="submit">{{ submitText }}</VaButton>
    </div>
  </VaForm>
</template>

<script lang="ts" setup>
import { useForm } from 'vuestic-ui'
import { PaymentCard, PaymentSystemType } from '../../types'
import { watch, ref } from 'vue'

const { validate } = useForm('form')
const emits = defineEmits(['save', 'cancel'])

const props = defineProps<{
  paymentCard: PaymentCard
  submitText: string
}>()

const paymentSystemTypeOptions = Object.values(PaymentSystemType)
const paymentCardLocal = ref({ ...props.paymentCard })

watch(
  () => props.paymentCard,
  (value) => {
    paymentCardLocal.value = { ...value }
  },
  { deep: true },
)

const submit = () => {
  if (validate()) {
    emits('save', {
      ...paymentCardLocal.value,
      cardNumberMasked: paymentCardLocal.value.cardNumberMasked.replace(/\d{12}(.*)/g, '****$1'),
    })
  }
}
</script>
