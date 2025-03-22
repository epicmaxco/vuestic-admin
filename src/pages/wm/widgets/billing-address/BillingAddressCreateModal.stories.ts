import BillingAddressCreateModal from './BillingAddressCreateModal.vue'

export default {
  components: { BillingAddressCreateModal },
  title: 'BillingAddressCreateModal',
  component: BillingAddressCreateModal,
  tags: ['autodocs'],
}

export const Default = () => ({
  components: { BillingAddressCreateModal },
  data() {
    return {
      showModal: false,
    }
  },
  template: `
    <va-button @click="showModal = !showModal">
      Show modal
    </va-button>
    <BillingAddressCreateModal v-if="showModal" @close="showModal = false"/>
  `,
})
