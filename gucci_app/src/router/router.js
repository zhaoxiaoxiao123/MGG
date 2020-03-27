import Vue from "vue"  //引入vue对象
import Router from "vue-router"  //引入路由
import Home from "../components/Home.vue"
// 引入Login.vue子组件
import Login from "../components/gucci/Login.vue"
// 引入Login.vue子组件
import Product from "../components/gucci/Product.vue"
// 引入chat.vue子组件
import Chat from "../components/gucci/Chat.vue";
import Index from "../components/gucci/Index.vue";
import Cart from "../components/gucci/Cart.vue";

Vue.use(Router)   //注册路由

export default new Router({
  routes: [
    {path:'/',component:Home},
    {path:'/Login',component:Login},
    {path:'/Product',component:Product},
    { path: '/Chat', component: Chat },
    { path: '/Index', component: Index },
    {path:'/Cart',component:Cart}
    
  ]
})