import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

/**
 * Automatically load all the components into the application
 */
const files = require.context('./components', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
