<template>
  <VaForm ref="form" @submit.prevent="submit">
    <VaInput
      v-model="localBillingAddress.name"
      class="mb-4"
      label="Name"
      :rules="[(v) => !!v || 'Name field is required']"
    />
    <VaCheckbox v-model="localBillingAddress.isPrimary" label="Primary Address" class="mb-4" />
    <VaInput
      v-model="localBillingAddress.street"
      class="mb-4"
      label="Street"
      :rules="[(v) => !!v || 'Street field is required']"
    />
    <VaInput
      v-model="localBillingAddress.city"
      class="mb-4"
      label="City"
      :rules="[(v) => !!v || 'City field is required']"
    />
    <VaInput
      v-model="localBillingAddress.state"
      class="mb-4"
      label="State"
      :rules="[(v) => !!v || 'State field is required']"
    />
    <VaInput
      v-model="localBillingAddress.postalCode"
      class="mb-4"
      label="Postal Code"
      :rules="[(v) => !!v || 'Postal Code field is required']"
    />
    <VaInput
      v-model="localBillingAddress.country"
      class="mb-4"
      label="Country"
      :rules="[(v) => !!v || 'Country field is required']"
    />
    <div class="flex justify-end gap-3">
      <VaButton preset="secondary" color="secondary" @click="emits('cancel')">Cancel</VaButton>
      <VaButton @click="submit">{{ submitText }}</VaButton>
    </div>
  </VaForm>
</template>

<script setup lang="ts">
  import { useForm } from 'vuestic-ui'
  import { BillingAddress } from '../../types'
  import { watch, ref } from 'vue'

  const { validate } = useForm('form')
  const emits = defineEmits(['save', 'cancel'])

  const props = defineProps<{
    billingAddress: BillingAddress
    submitText: string
  }>()

  const localBillingAddress = ref<BillingAddress>({ ...props.billingAddress })

  watch(
    () => props.billingAddress,
    (value) => {
      localBillingAddress.value = { ...value }
    },
    { deep: true },
  )

  const submit = () => {
    if (validate()) {
      emits('save', localBillingAddress.value)
    }
  }
</script>
