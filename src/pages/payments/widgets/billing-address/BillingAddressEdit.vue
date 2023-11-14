<template>
  <va-form ref="form" @submit.prevent="submit">
    <va-input
      v-model="localBillingAddress.name"
      class="mb-4"
      label="Name"
      :rules="[(v) => !!v || 'Name field is required']"
    />
    <va-checkbox v-model="localBillingAddress.isPrimary" label="Primary Address" class="mb-4" />
    <va-input
      v-model="localBillingAddress.street"
      class="mb-4"
      label="Street"
      :rules="[(v) => !!v || 'Street field is required']"
    />
    <va-input
      v-model="localBillingAddress.city"
      class="mb-4"
      label="City"
      :rules="[(v) => !!v || 'City field is required']"
    />
    <va-input
      v-model="localBillingAddress.state"
      class="mb-4"
      label="State"
      :rules="[(v) => !!v || 'State field is required']"
    />
    <va-input
      v-model="localBillingAddress.postalCode"
      class="mb-4"
      label="Postal Code"
      :rules="[(v) => !!v || 'Postal Code field is required']"
    />
    <va-input
      v-model="localBillingAddress.country"
      class="mb-4"
      label="Country"
      :rules="[(v) => !!v || 'Country field is required']"
    />
    <div class="flex justify-end gap-3">
      <va-button preset="secondary" color="secondary" @click="emits('cancel')">Cancel</va-button>
      <va-button @click="submit">{{ submitText }}</va-button>
    </div>
  </va-form>
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
