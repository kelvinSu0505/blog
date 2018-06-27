import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import './assets/sass/common/style.sass'

Vue.use(iView);


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})
