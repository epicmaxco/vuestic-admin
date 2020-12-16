import Vue from 'vue'

// add translations directly to the application
Vue.i18n.add('br', require('./pt_br.json'))
Vue.i18n.add('en', require('./en.json'))
Vue.i18n.add('es', require('./es.json'))
Vue.i18n.add('cn', require('./cn.json'))
Vue.i18n.add('ir', require('./ir.json'))

// set the start locale to use
Vue.i18n.set('en')

// set fallback for non-translated strings
Vue.i18n.fallback('en')
