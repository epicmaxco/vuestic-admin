import CardListItem from './CardListItem.vue'

export default {
  title: 'CardListItem',
  component: CardListItem,
  tags: ['autodocs'],
}

export const Default = () => ({
  components: { CardListItem },
  template: `
    <CardListItem/>
  `,
})
