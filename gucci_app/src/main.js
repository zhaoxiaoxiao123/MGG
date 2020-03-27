import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store'

// 功能一：引入和配置mint-ui组件库
import MintUI from "mint-ui";
import "mint-ui/lib/style.css"
Vue.use(MintUI)
// 功能二：引入图标字体中样式文件
import "./font/iconfont.css"
// 功能三：引入axios组件
import axios from "axios"
axios.defaults.baseURL="http://127.0.0.1:5000/"
axios.defaults.withCredentails=true
Vue.prototype.axios=axios
// 引入socket
// import VueSocketio from "vue-socket.io";
// import socketio from "socket.io-client";
// Vue.use(VueSocketio,socketio('http://127.0.0.1:5000/'));
// 引入公共样式
import "./common/common.css"


Vue.config.productionTip = false



new Vue({
  linkActiveClass: 'is-active',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
