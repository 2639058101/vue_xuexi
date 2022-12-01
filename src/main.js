import Vue from 'vue'
import App from './App.vue'

import router from '@/router'

Vue.config.productionTip = false

import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name,TypeNav)

import Paigination from '@/components/Paigination'
Vue.component(Paigination.name,Paigination)

import Carousel from '@/components/Carousel'
Vue.component(Carousel.name,Carousel)

import store from '@/store/index.js'

import './mock/mockServe'

import 'swiper/css/swiper.css'

new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate(){
    Vue.prototype.$bus=this
  }
}).$mount('#app')
