// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import Vant from 'vant';
import 'vant/lib/index.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./util/flexible.js"
import "./assets/base.styl"
import "@/assets/fonts/iconfont.css"
import "swiper/css/swiper.css"
import "./directive/swiper.js"
import "./filter/index"
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.use(ElementUI);
Vue.use(Vant);

Vue.prototype.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
