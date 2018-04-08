import lazyLoading from './lazyLoading'

export default {
  name: 'Forms',
  meta: {
    expanded: false,
    title: 'menu.forms',
    iconClass: 'vuestic-icon vuestic-icon-forms'
  },
  children: [
    {
      name: 'FormElements',
      path: '/forms/form-elements',
      component: lazyLoading('forms/form-elements/FormElements'),
      meta: {
        title: 'menu.formElements'
      }
    },
    {
      name: 'FormWizards',
      path: '/forms/form-wizard',
      component: lazyLoading('forms/form-wizard/FormWizard'),
      meta: {
        title: 'menu.formWizards'
      }
    },
    {
      name: 'MediumEditor',
      path: '/forms/medium-editor',
      component: lazyLoading('forms/medium-editor/MediumEditor'),
      meta: {
        title: 'Medium Editor'
      }
    }
  ]
}

