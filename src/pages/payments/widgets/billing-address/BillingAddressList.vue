<template>
  <div class="grid md:grid-cols-2 grid-cols-1 gap-4">
    <template v-if="loading">
      <div
        v-for="i in 4"
        :key="i"
        class="min-h-[114px] p-4 rounded-lg border border-dashed border-backgroundBorder flex flex-row items-center gap-6"
      >
        <div class="flex flex-col gap-2 flex-grow">
          <VaSkeleton class height="1.5rem" variant="text" width="10rem" />
          <div class="flex gap-4">
            <VaSkeleton height="3rem" variant="rounded" width="5rem" />
            <VaSkeleton :lines="2" variant="text" />
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <CardListItem
        v-for="billingAddress in list"
        :key="billingAddress.id"
        :billing-address="billingAddress"
        @edit="addressToEdit = billingAddress"
        @remove="remove(billingAddress)"
      />
      <div
        class="sm:min-h-[114px] p-4 rounded-lg border border-dashed border-primary flex flex-col sm:flex-row items-start sm:items-center gap-4"
        :style="{ backgroundColor: colorToRgba(getColor('primary'), 0.07) }"
      >
        <div class="flex flex-col gap-2 flex-grow">
          <div class="text-lg font-bold leading-relaxed">Important note</div>
          <div class="text-secondary text-sm leading-tight">
            Please ensure the provided billing address matches the information on file with your financial institution
            to avoid any processing delays.
          </div>
        </div>
        <VaButton class="flex-none w-full sm:w-auto" @click="showCreate = true">New address</VaButton>
      </div>
    </template>
  </div>
  <AddressCreateModal v-if="showCreate" @close="showCreate = false" />
  <AddressUpdateModal v-if="addressToEdit" :billing-address="addressToEdit" @close="addressToEdit = undefined" />
</template>

<script lang="ts" setup>
import CardListItem from './BillingAddressListItem.vue'
import { computed, ref } from 'vue'
import { useModal, useToast } from 'vuestic-ui'
import AddressCreateModal from './BillingAddressCreateModal.vue'
import AddressUpdateModal from './BillingAddressUpdateModal.vue'
import { useBillingAddressesStore } from '../../../../stores/billing-addresses'
import { BillingAddress } from '../../types'
import { useColors } from 'vuestic-ui'

const store = useBillingAddressesStore()

const list = computed(() => store.allBillingAddresses)
const loading = computed(() => store.loading)
const { confirm } = useModal()

const showCreate = ref<boolean>(false)
const addressToEdit = ref<BillingAddress>()
const { init } = useToast()

store.load()
const remove = async (card: BillingAddress) => {
  confirm({
    message: 'Are you really sure you want to delete this address?',
    size: 'small',
    maxWidth: '380px',
  }).then((ok) => {
    if (!ok) return
    store.remove(card.id)
    init({ message: 'Billing Address has been deleted', color: 'success' })
  })
}

const { getColor, colorToRgba } = useColors()
</script>
