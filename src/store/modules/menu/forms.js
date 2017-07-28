import lazyLoading from './lazyLoading'

export default {
  name: 'Forms',
  meta: {
    expanded: false,
    title: 'Forms',
    iconClass: 'vuestic-icon vuestic-icon-forms'
  },
  children: [
    {
      name: 'FormElements',
      path: '/forms/form-elements',
      component: lazyLoading('forms/form-elements/FormElements'),
      meta: {
        title: 'Form Elements'
      }
    },
    {
      name: 'Form Wizards',
      path: '/forms/form-wizard',
      component: lazyLoading('forms/form-wizard/FormWizard'),
      meta: {
        title: 'Form Wizards'
      }
    }
  ]
}

