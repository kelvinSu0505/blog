import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import './assets/sass/common/style.sass'
import animate from 'animate.css'
import VCharts from 'v-charts'

Vue.use(animate)
Vue.use(iView)
Vue.use(VCharts)

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router:router,
    render: h =>h(App),
})
