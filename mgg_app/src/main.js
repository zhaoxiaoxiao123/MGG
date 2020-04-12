import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import bus from './bus'
import filter from './filter/filter.js'

Vue.prototype.bus = bus;
Vue.prototype.filter = filter;

// 功能一：引入和配置mint-ui组件库
import MintUI from "mint-ui";
import "mint-ui/lib/style.css"
Vue.use(MintUI)
// 功能二：引入图标字体中样式文件
import "./font/iconfont.css"
// 功能三：引入axios组件
import axios from "axios"
axios.defaults.baseURL="http://127.0.0.1:5500/"
//发送请求保存session信息
axios.defaults.withCredentials=true
//将axios放入vue的原型对象中
Vue.prototype.axios = axios

// 引入socket
// import VueSocketio from "vue-socket.io";
// import socketio from "socket.io-client";
// Vue.use(VueSocketio,socketio('http://127.0.0.1:5000/'));
// 引入公共样式
import "./common/common.css"

import Vuex from "vuex"
Vue.use(Vuex)
//创建存储对象
const store = new Vuex.Store({
  state:{  //全局共享数据
    active:'index'
  },
  mutations:{  //所有修改全局共享数据函数
    changeActive(state,id) { 
      state.active = id;
    }
  },
  getters:{   //所有获取全局共享数据函数
    getActive(state){
      return state.active;
    }
  }
})


Vue.config.productionTip = false



new Vue({
  linkActiveClass: 'is-active',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
