import Vue from 'vue'

// add translations directly to the application
Vue.i18n.add('br', require('./pt_br.json'))
Vue.i18n.add('gb', require('./en.json'))
Vue.i18n.add('es', require('./es.json'))

// set the start locale to use
Vue.i18n.set('br')

// set fallback for non-translated strings
Vue.i18n.fallback('br')
