import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index.js'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueTheMask from 'vue-the-mask'
import Vuelidate from 'vuelidate'
import MarqueeText from 'vue-marquee-text-component'
import VueScrollTo from 'vue-scrollto'




import 'swiper/css/swiper.css'

Vue.use(VueRouter) 
Vue.use(Vuelidate)
Vue.use(require('vue-cookies'))
Vue.use(VueAwesomeSwiper)
Vue.component('marquee-text', MarqueeText)
Vue.use(VueScrollTo)




new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
