import VuesticLogo from './VuesticLogo.vue'

export default {
  title: 'VuesticLogo',
  component: VuesticLogo,
  tags: ['autodocs'],
}

export const Default = () => ({
  components: { VuesticLogo },
  template: `<VuesticLogo start="#6B7AFE" end="#083CC6" />`,
})

export const White = () => ({
  components: { VuesticLogo },
  template: `<div class="bg-primary">
    <VuesticLogo start="#FFF"/>
  </div>`,
})

export const Blue = () => ({
  components: { VuesticLogo },
  template: `<VuesticLogo start="#0E41C9"/>`,
})

export const Height = () => ({
  components: { VuesticLogo },
  template: `<VuesticLogo start="#6B7AFE" end="#083CC6" :height="48"/>`,
})
