import VaButtonSelect from './VaButtonSelect.vue'

export default {
  title: 'VaButtonSelect',
  component: VaButtonSelect,
  tags: ['autodocs'],
}

export const Default = () => ({
  components: { VaButtonSelect },
  data: () => ({ value: 'Annual', options: ['Monthly', 'Annual'] }),
  template: `
    <VaButtonSelect v-model="value" :options="options" />
  `,
})
