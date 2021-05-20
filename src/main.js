// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App'
import router from './router'
import Swiper, {Navigation, Pagination} from 'swiper'
import store from './store'

//注册全局组件标签
Vue.component(Button.name, Button)   //<mt-button>

Vue.config.productionTip = false
Swiper.use([Navigation, Pagination])

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,   //使用上vue-router
  store   //使用上vuex
})
