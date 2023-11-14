<template>
  <va-modal hide-default-actions model-value size="small" @cancel="emits('close')">
    <h3 class="va-h4 mb-4">Add Billing Address</h3>
    <BillingAddressEdit
      :billing-address="billingAddress"
      submit-text="Add Address"
      @save="update"
      @cancel="emits('close')"
    />
  </va-modal>
</template>

<script setup lang="ts">
  import { ref, reactive } from 'vue'
  import BillingAddressEdit from './BillingAddressEdit.vue'
  import { BillingAddress } from '../../types'
  import { useToast } from 'vuestic-ui'
  import { useBillingAddressesStore } from '../../../../stores/billing-addresses'

  const isModalOpen = ref(false)

  const emits = defineEmits(['close'])
  const store = useBillingAddressesStore()
  const { init } = useToast()

  const billingAddress = reactive({
    id: Math.ceil(Math.random() * 100) + '',
    name: '',
    isPrimary: false,
    street: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
  } satisfies BillingAddress)

  const update = (address: BillingAddress) => {
    isModalOpen.value = false
    store.create(address)
    init({ message: "You've successfully created a new Billing Address", color: 'success' })
    emits('close')
  }
</script>
