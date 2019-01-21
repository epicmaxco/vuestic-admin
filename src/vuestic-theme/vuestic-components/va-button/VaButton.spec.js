import { shallowMount } from '@vue/test-utils'
import VaButton from './VaButton'

describe('VaButton', () => {
  /* 1. Button types */

  it('default button', () => {
    const wrapper = shallowMount(VaButton)

    expect(wrapper.find(VaButton).classes()).toContain('va-button--default')
  })

  it('outline button', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: { outline: true }
    })
    expect(wrapper.find(VaButton).classes()).toContain('va-button--outline')
  })

  it('outline button snapshot', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: { outline: true }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('flat button', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: { flat: true }
    })
    expect(wrapper.find(VaButton).classes()).toContain('va-button--flat')
  })

  it('flat button snapshot', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: { flat: true }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  /* 2. Button sizes */

  it('normal button', () => {
    const wrapper = shallowMount(VaButton)

    expect(wrapper.find(VaButton).classes()).toContain('va-button--normal')
  })

  it('large button', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: { large: true }
    })
    expect(wrapper.find(VaButton).classes()).toContain('va-button--large')
  })

  it('large button snapshot', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: { large: true }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('small button', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: { small: true }
    })
    expect(wrapper.find(VaButton).classes()).toContain('va-button--small')
  })

  it('small button snapshot', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: { small: true }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  /* 3. Button colors */

  it('info button', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: { color: 'info' }
    })
    expect(wrapper.find(VaButton).classes()).toContain('va-button--info')
  })

  it('info button snapshot', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: { color: 'info' }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('danger button', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: { color: 'danger' }
    })

    expect(wrapper.find(VaButton).classes()).toContain('va-button--danger')
  })

  it('danger button snapshot', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: { color: 'danger' }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('warning button', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: { color: 'warning' }
    })

    expect(wrapper.find(VaButton).classes()).toContain('va-button--warning')
  })

  it('warning button snapshot', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: { color: 'warning' }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  /* 4. Button tags */

  it('default button', () => {
    const wrapper = shallowMount(VaButton)

    expect(wrapper.is('button')).toBe(true)
  })

  it('a button', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: {
        href: 'http://epic-spinners.epicmax.co/'
      }
    })
    expect(wrapper.is('a')).toBe(true)
  })

  it('a button 2 ', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: {
        target: '_blank'
      }
    })
    expect(wrapper.is('a')).toBe(true)
  })

  it('a button snapshot', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: {
        href: 'http://epic-spinners.epicmax.co/',
        target: '_blank'
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('router-link button 1', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: {
        to: { name: 'charts' }
      }
    })
    expect(wrapper.is('router-link')).toBe(true)
  })

  it('router-link button 2', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: {
        to: { name: 'charts' },
        activeClass: 'va-button--active'
      }
    })
    expect(wrapper.is('router-link')).toBe(true)
  })

  it('router-link button snapshot', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: {
        to: { name: 'charts' },
        append: true,
        activeClass: 'va-button--active'
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  /* 5. Disabled buttons */

  it('disabled button', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: { disabled: true }
    })

    expect(wrapper.find(VaButton).classes()).toContain('va-button--disabled')
  })

  it('disabled snapshot', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: { disabled: true }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  /* 6. Buttons with icons */

  it('icon left button', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: {
        icon: 'brandico brandico-facebook'
      }
    })
    expect(wrapper.find(VaButton).classes()).toContain('va-button--with-left-icon')
  })

  it('icon right button', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: {
        iconRight: 'iconicstroke iconicstroke-info'
      }
    })
    expect(wrapper.find(VaButton).classes()).toContain('va-button--with-right-icon')
  })

  it('both icon button snapshot', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: {
        icon: 'brandico brandico-facebook',
        iconRight: 'iconicstroke iconicstroke-info'
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
