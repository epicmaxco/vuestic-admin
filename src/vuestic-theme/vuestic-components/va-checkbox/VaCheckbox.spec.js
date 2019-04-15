import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import VaCheckbox from './VaCheckbox'

import { ColorThemePlugin } from '../../../services/ColorThemePlugin'
Vue.use(ColorThemePlugin)

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
