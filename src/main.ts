import { createApp } from 'vue'
import { createGtm } from 'vue-gtm'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'


const gtmConfig = {
  id: process.env.VUE_APP_GTM_KEY,
  enabled: process.env.NODE_ENV === 'production',
  debug: false,
  vueRouter: router,
}
createApp(App)
  .use(store)
  .use(router)
  .use(createGtm(gtmConfig))
  .mount('#app')
