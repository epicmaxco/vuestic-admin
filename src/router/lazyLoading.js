// lazy loading Components
// https://github.com/vuejs/vue-router/blob/dev/examples/lazy-loading/app.js#L8
export default (name, index = false) => () => import(`components/${name}${index ? '/index' : ''}.vue`)
