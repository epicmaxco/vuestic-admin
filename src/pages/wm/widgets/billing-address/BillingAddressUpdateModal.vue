<template>
  <VaModal hide-default-actions model-value size="small" close-button @cancel="emits('close')">
    <h3 class="va-h4 mb-4">Add Billing Address</h3>
    <AddressEdit
      :billing-address="billingAddress"
      submit-text="Save Address"
      @cancel="emits('close')"
      @save="updateCard"
    />
  </VaModal>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import AddressEdit from './BillingAddressEdit.vue'
import { BillingAddress } from '../../types'
import { useToast } from 'vuestic-ui'
import { useBillingAddressesStore } from '../../../../stores/billing-addresses'

const isModalOpen = ref(false)
const { init } = useToast()

const props = defineProps<{
  billingAddress: BillingAddress
}>()

const emits = defineEmits(['close'])
const store = useBillingAddressesStore()
const billingAddress = ref({ ...props.billingAddress })

const updateCard = (address: BillingAddress) => {
  isModalOpen.value = false
  store.update(address)
  init({ message: "You've successfully updated a Billing Address", color: 'success' })
  emits('close')
}
</script>
