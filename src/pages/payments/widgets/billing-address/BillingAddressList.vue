<template>
  <div class="grid md:grid-cols-2 grid-cols-1 gap-4">
    <VaSkeletonGroup
      v-if="loading"
      class="min-h-[114px] p-4 rounded-lg border border-dashed border-backgroundBorder flex flex-row items-center gap-6"
    >
      <div class="flex flex-col gap-2 flex-grow">
        <VaSkeleton class variant="text" width="10rem" height="1.5rem" />
        <div class="flex gap-4">
          <VaSkeleton variant="rounded" width="5rem" height="3rem" />
          <VaSkeleton variant="text" :lines="2" />
        </div>
      </div>
    </VaSkeletonGroup>
    <template v-else>
      <CardListItem
        v-for="billingAddress in list"
        :key="billingAddress.id"
        :billing-address="billingAddress"
        @remove="remove(billingAddress)"
        @edit="addressToEdit = billingAddress"
      />
      <div
        class="sm:min-h-[114px] p-4 bg-primary bg-opacity-5 rounded-lg border border-dashed border-primary flex flex-col sm:flex-row items-start sm:items-center gap-4"
      >
        <div class="flex flex-col gap-2 flex-grow">
          <div class="text-lg font-bold leading-relaxed">Important note</div>
          <div class="text-secondary text-sm leading-tight">
            Please ensure the provided billing address matches the information on file with your financial institution
            to avoid any processing delays.
          </div>
        </div>
        <va-button class="flex-none w-full sm:w-auto" @click="showCreate = true">New address</va-button>
      </div>
    </template>
  </div>
  <AddressCreateModal v-if="showCreate" @close="showCreate = false" />
  <AddressUpdateModal v-if="addressToEdit" :billing-address="addressToEdit" @close="addressToEdit = undefined" />
</template>

<script setup lang="ts">
  import CardListItem from './BillingAddressListItem.vue'
  import { computed, ref } from 'vue'
  import { useModal, useToast } from 'vuestic-ui'
  import AddressCreateModal from './BillingAddressCreateModal.vue'
  import AddressUpdateModal from './BillingAddressUpdateModal.vue'
  import { useBillingAddressesStore } from '../../../../stores/billing-addresses'
  import { BillingAddress } from '../../types'

  const store = useBillingAddressesStore()

  const list = computed(() => store.allBillingAddresses)
  const loading = computed(() => store.loading)
  const { confirm } = useModal()

  const showCreate = ref<boolean>(false)
  const addressToEdit = ref<BillingAddress>()
  const { init } = useToast()

  store.load()
  const remove = async (card: BillingAddress) => {
    confirm('Are you really sure you want to delete this address?').then((ok) => {
      if (!ok) return
      store.remove(card.id)
      init({ message: 'Billing Address has been deleted', color: 'success' })
    })
  }
</script>
