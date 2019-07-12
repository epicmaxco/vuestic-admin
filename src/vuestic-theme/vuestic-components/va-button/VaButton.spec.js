import Vue from 'vue'
import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import VaButton from './VaButton'

import { ColorThemePlugin } from '../../../services/ColorThemePlugin'
Vue.use(ColorThemePlugin)

describe('VaButton', () => {
  /* 1. Default button */

  it('button without defined props', () => {
    const wrapper = shallowMount(VaButton)

    expect(wrapper.find(VaButton).classes()).toContain('va-button--default')
  })

  /* 2. Button sizes */

  it('normal button', () => {
    const wrapper = shallowMount(VaButton)

    expect(wrapper.find(VaButton).classes()).toContain('va-button--normal')
  })

  it('large button', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: { large: true },
    })
    expect(wrapper.find(VaButton).classes()).toContain('va-button--large')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('small button', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: { small: true },
    })
    expect(wrapper.find(VaButton).classes()).toContain('va-button--small')
    expect(wrapper.html()).toMatchSnapshot()
  })

  /* 3. Button types */

  it('default button', () => {
    const wrapper = shallowMount(VaButton)

    expect(wrapper.is('button')).toBe(true)
  })

  it('a button with defined href', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: {
        href: 'http://epic-spinners.epicmax.co/',
      },
    })
    expect(wrapper.is('a')).toBe(true)
  })

  it('a button with defined target', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: {
        target: '_blank',
      },
    })
    expect(wrapper.is('a')).toBe(true)
  })

  it('a button with defined href and target', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: {
        href: 'http://epic-spinners.epicmax.co/',
        target: '_blank',
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('router-link button with defined to property', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: {
        to: { name: 'charts' },
      },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('router-link button with defined to and active class properties', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: {
        to: { name: 'charts' },
        activeClass: 'va-button--active',
      },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  /* 4. Disabled buttons */

  it('disabled button', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: { disabled: true },
    })

    expect(wrapper.find(VaButton).classes()).toContain('va-button--disabled')
    expect(wrapper.html()).toMatchSnapshot()
  })

  /* 5. Buttons with icons */

  it('button with left icon', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: {
        icon: 'brandico brandico-facebook',
      },
    })
    expect(wrapper.find(VaButton).classes())
      .toContain('va-button--with-left-icon')
  })

  it('button with right icon', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: {
        iconRight: 'iconicstroke iconicstroke-info',
      },
    })
    expect(wrapper.find(VaButton).classes())
      .toContain('va-button--with-right-icon')
  })

  it('button with both icons', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: {
        icon: 'brandico brandico-facebook',
        iconRight: 'iconicstroke iconicstroke-info',
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
