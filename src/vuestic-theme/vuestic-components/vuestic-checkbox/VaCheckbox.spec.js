import { shallowMount } from '@vue/test-utils'
import VaCheckbox from './VuesticCheckbox'

describe('VaCheckbox', () => {
  it('default', () => {
    const wrapper = shallowMount(VaCheckbox, {
      propsData: { value: false }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('true value', () => {
    const wrapper = shallowMount(VaCheckbox, {
      propsData: { value: true }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
