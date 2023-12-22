import Typography from './Typography.vue'

export default {
  title: 'Typography',
  component: Typography,
  tags: ['autodocs'],
}

export const Default = () => ({
  components: { Typography },
  template: `
    <Typography/>
  `,
})
