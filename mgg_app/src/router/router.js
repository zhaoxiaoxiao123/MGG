import Vue from "vue"  //引入vue对象
import Router from "vue-router"  //引入路由
import Home from "../components/Home.vue"
// 引入Login.vue子组件
import Login from "../components/mgg/Login.vue"
// 引入Login.vue子组件
import Product from "../components/mgg/Product.vue"
// 引入chat.vue子组件
import Chat from "../components/mgg/Chat.vue";
import Index from "../components/mgg/Index.vue";
import Cart from "../components/mgg/Cart.vue";
import Search from "../components/mgg/Search.vue";
import List from "../components/mgg/List.vue";
import Method from "../components/mgg/Method.vue"

Vue.use(Router)   //注册路由

export default new Router({
  routes: [
    {path:'/',component:Home},
    {path:'/Login',component:Login},
    {path:'/Product',component:Product},
    { path: '/Chat', component: Chat },
    { path: '/Index', component: Index },
    { path: '/Cart', component: Cart },
    { path: '/Search', component: Search },
    { path: '/List/:fname', component: List, name: 'list' },
    {path:'/Method',component:Method}
  ]
})