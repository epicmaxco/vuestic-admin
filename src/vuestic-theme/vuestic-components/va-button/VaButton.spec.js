import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import VaButton from './VaButton'

describe('VaButton', () => {
  /* 1. Button types */

  it('button without defined props', () => {
    const wrapper = shallowMount(VaButton)

    expect(wrapper.find(VaButton).classes()).toContain('va-button--default')
  })

  it('outline button', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: { outline: true }
    })
    expect(wrapper.find(VaButton).classes()).toContain('va-button--outline')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('flat button', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: { flat: true }
    })
    expect(wrapper.find(VaButton).classes()).toContain('va-button--flat')
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
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('small button', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: { small: true }
    })
    expect(wrapper.find(VaButton).classes()).toContain('va-button--small')
    expect(wrapper.html()).toMatchSnapshot()
  })

  /* 3. Button colors */

  it('info button', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: { color: 'info' }
    })
    expect(wrapper.find(VaButton).classes()).toContain('va-button--info')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('danger button', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: { color: 'danger' }
    })

    expect(wrapper.find(VaButton).classes()).toContain('va-button--danger')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('warning button', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: { color: 'warning' }
    })

    expect(wrapper.find(VaButton).classes()).toContain('va-button--warning')
    expect(wrapper.html()).toMatchSnapshot()
  })

  /* 4. Button tags */

  it('default button', () => {
    const wrapper = shallowMount(VaButton)

    expect(wrapper.is('button')).toBe(true)
  })

  it('a button with defined href', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: {
        href: 'http://epic-spinners.epicmax.co/'
      }
    })
    expect(wrapper.is('a')).toBe(true)
  })

  it('a button with defined target', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: {
        target: '_blank'
      }
    })
    expect(wrapper.is('a')).toBe(true)
  })

  it('a button with defined href and target', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: {
        href: 'http://epic-spinners.epicmax.co/',
        target: '_blank'
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('router-link button with defined to property', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: {
        to: { name: 'charts' }
      },
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('router-link button with defined to and active class properties', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: {
        to: { name: 'charts' },
        activeClass: 'va-button--active'
      },
      stubs: {
        RouterLink: RouterLinkStub
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
    expect(wrapper.html()).toMatchSnapshot()
  })

  /* 6. Buttons with icons */

  it('button with left icon', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: {
        icon: 'brandico brandico-facebook'
      }
    })
    expect(wrapper.find(VaButton).classes()).toContain('va-button--with-left-icon')
  })

  it('button with right icon', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: {
        iconRight: 'iconicstroke iconicstroke-info'
      }
    })
    expect(wrapper.find(VaButton).classes()).toContain('va-button--with-right-icon')
  })

  it('button with both icons', () => {
    const wrapper = shallowMount(VaButton, {
      propsData: {
        icon: 'brandico brandico-facebook',
        iconRight: 'iconicstroke iconicstroke-info'
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
