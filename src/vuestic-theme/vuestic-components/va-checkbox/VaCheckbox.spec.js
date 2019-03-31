import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import VaCheckbox from './VaCheckbox'

import { ColorPlugin } from './../../../services/colors'
Vue.use(ColorPlugin)

describe('VaCheckbox', () => {
  it('default', () => {
    const wrapper = shallowMount(VaCheckbox, {
      propsData: { value: false },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('true value', () => {
    const wrapper = shallowMount(VaCheckbox, {
      propsData: { value: true },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
