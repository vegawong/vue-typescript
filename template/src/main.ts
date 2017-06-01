import 'styles/app.scss'
import Vue from 'vue'
import store from 'store'
import * as App from './App.vue'
import router from 'router'
import svgicon = require('vue-svgicon')

// import all icons
import 'components/icons'

Vue.use(svgicon, {
    tagName: 'icon'
})

new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App }
})
