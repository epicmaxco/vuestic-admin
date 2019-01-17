import { shallowMount } from '@vue/test-utils'
import VaButton from './VaButton'

describe('VaButton', () => {
  // 1. Button types

  // True
  it('default button', () => {
    const wrapper = shallowMount(VaButton)

    expect(wrapper.props('tag')).toBe('button')
  })
  // True
  it('outline button', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: {
        outline: true
      }
    })
    expect(wrapper.props('outline')).toBe(true)
  })
  // True
  it('flat button', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: {
        flat: true
      }
    })
    expect(wrapper.props('flat')).toBe(true)
  })
  // False, this type of button doesn't exist
  it('rounded button', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: {
        rounded: true
      }
    })
    expect(wrapper.props('rounded')).toBe(true)
  })

  // 2. Button sizes

  // True
  it('large button', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: { large: true }
    })
    expect(wrapper.props('large')).toBe(true)
  })
  // True
  it('small button', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: { small: true }
    })
    expect(wrapper.props('small')).toBe(true)
  })
  // False, this button size doesn't supported
  it('micro button', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: { micro: true }
    })
    expect(wrapper.props('micro')).toBe(true)
  })

  // 3. Button colors

  // True
  it('success button', () => {
    let cmp = shallowMount(VaButton)

    expect(cmp.find(VaButton).classes()).toContain('va-button--success')
  })
  // True
  it('info button', () => {
    let cmp = shallowMount(VaButton, {
      propsData: { color: 'info' }
    })
    expect(cmp.find(VaButton).classes()).toContain('va-button--info')
  })
  // True
  it('danger button', () => {
    let cmp = shallowMount(VaButton, {
      propsData: { color: 'danger' }
    })

    expect(cmp.find(VaButton).classes()).toContain('va-button--danger')
  })
  // True
  it('warning button', () => {
    let cmp = shallowMount(VaButton, {
      propsData: { color: 'warning' }
    })

    expect(cmp.find(VaButton).classes()).toContain('va-button--warning')
  })
  // True
  it('gray button', () => {
    let cmp = shallowMount(VaButton, {
      propsData: { color: 'gray' }
    })

    expect(cmp.find(VaButton).classes()).toContain('va-button--gray')
  })
  // True
  it('dark button', () => {
    let cmp = shallowMount(VaButton, {
      propsData: { color: 'dark' }
    })

    expect(cmp.find(VaButton).classes()).toContain('va-button--dark')
  })
  // False, color property doesn't support this value
  it('purple button', () => {
    let cmp = shallowMount(VaButton, {
      propsData: { color: 'purple' }
    })

    expect(cmp.find(VaButton).classes()).toContain('va-button--purple')
  })

  // 4. Button tags

  // True
  it('a button', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: {
        href: 'http://epic-spinners.epicmax.co/'
      }
    })
    expect(wrapper.is('a')).toBe(true)
  })
  // True
  it('router-link button 1', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: {
        to: { name: 'charts' }
      }
    })
    expect(wrapper.is('router-link')).toBe(true)
  })
  // False, router-link tag will be generated
  it('router-link button 2', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: {
        to: { name: 'charts' }
      }
    })
    expect(wrapper.is('a')).toBe(true)
  })

  // 5. Disabled buttons

  // True
  it('disabled button', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: {
        disabled: true
      }
    })

    expect(wrapper.props('disabled')).toBe(true)
  })

  // 6. Buttons with icons

  // True
  it('icon left', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: {
        icon: 'brandico brandico-facebook'
      }
    })
    expect(wrapper.props('icon')).toBe('brandico brandico-facebook')
  })
  // False, icon property placed icon in left side
  it('icon left 2', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: {
        iconLeft: 'brandico brandico-facebook'
      }
    })
    expect(wrapper.props('iconLeft')).toBe('brandico brandico-facebook')
  })
  // False
  it('icon right', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: {
        iconRight: 'iconicstroke iconicstroke-info'
      }
    })
    expect(wrapper.props('iconRight')).toBe('iconicstroke iconicstroke-info')
  })
})
