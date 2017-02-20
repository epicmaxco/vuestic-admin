import lazyLoading from './lazyLoading'

export default {
  name: 'Forms',
  meta: {
    expanded: false,
    title: 'Forms',
    iconClass: 'fa fa-edit'
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
      name: 'Form Wizard',
      path: '/forms/form-wizard',
      component: lazyLoading('forms/form-wizard/FormWizard'),
      meta: {
        title: 'Form Wizard'
      }
    }
  ]
}

