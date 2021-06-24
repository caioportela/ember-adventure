import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

window.renderVueApp = (elementId) => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount(elementId)
}

window.renderVueApp('#app')
