import PaymentCardCreateModal from './PaymentCardCreateModal.vue'

export default {
  components: { PaymentCardCreateModal },
  title: 'PaymentCardCreateModal',
  component: PaymentCardCreateModal,
  tags: ['autodocs'],
}

export const Default = () => ({
  components: { PaymentCardCreateModal },
  data() {
    return {
      showModal: false,
    }
  },
  template: `
    <va-button @click="showModal = !showModal">
      Show modal
    </va-button>
    <PaymentCardCreateModal v-if="showModal" @close="showModal = false"/>
  `,
})
