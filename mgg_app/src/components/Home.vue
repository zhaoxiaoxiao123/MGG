<template>
  <div class="page-tabbar">
    <div class="page-wrap">
      <!-- 顶部导航栏 -->
      <!-- <mt-header title="GUCCI" fixed></mt-header> -->
      <!-- 调整布局 -->
      <!-- 消息面板 -->
      <mt-tab-container v-model="active">
        <mt-tab-container-item id="index">
          <div class="search">
            <h1 slot="left">MGG</h1>
            <router-link to="/Search" slot="right">
              <mt-button class="iconfont icon-sousuo">搜索商品</mt-button>
            </router-link>
          </div>
          <index></index>
        </mt-tab-container-item>
        <mt-tab-container-item id="product" style="background-color: #fff;">
          <div class="search">
            <h1 slot="left">分类</h1>
            <router-link to="/Search" slot="right">
              <mt-button class="iconfont icon-sousuo">搜索商品</mt-button>
            </router-link>
          </div>
          <product></product>
        </mt-tab-container-item>
        <mt-tab-container-item id="cart">
          <mt-header fixed>
            <h1 slot="left">购物袋</h1>
          </mt-header>
          <cart @changeA="change" :active="active"></cart>
        </mt-tab-container-item>
        <mt-tab-container-item id="chat">
          <chat></chat>
        </mt-tab-container-item>
        <mt-tab-container-item id="me">
          <mt-header fixed>
            <h1 slot="left">我的账户</h1>
          </mt-header>
          <login @changeA="change"></login>
        </mt-tab-container-item>
      </mt-tab-container>
      <!-- 底部导航栏 -->
      <mt-tabbar v-model="active">
        <mt-tab-item id="index" >
          <img src="" alt="">
          首页
        </mt-tab-item>
        <mt-tab-item id="product" >
          <img src="" alt="">
          分类
        </mt-tab-item>
        <mt-tab-item id="cart" >
          <img src="" alt="">
          购物袋
        </mt-tab-item>
        <mt-tab-item id="chat" >
          <img src="" alt="">
          客服
        </mt-tab-item>
        <mt-tab-item id="me" >
          <img src="" alt="">
          我的
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>

<script>
// 引入子组件
import Product from '../components/gucci/Product';
import Chat from '../components/gucci/Chat';
import Login from '../components/gucci/Login';
import Index from "../components/gucci/Index";
import Cart from "../components/gucci/Cart";
export default {
  data(){
    return{
      active:this.$store.getters.getActive
    }
  },
  // 注册子组件
  components:{
    "product":Product,
    "chat":Chat,
    "login":Login,
    "index":Index,
    "cart":Cart
  },
  created(){
    // this.bus.$on("change",this.change.bind(this))
    // this.bus.$on("add_task",this.add.bind(this))
  },
  methods:{
    change(id){
      this.active=id;
    }
  }
}
</script>

<style scoped>
  .page-wrap h1{
    font-size:1.2rem;
    font-weight: 400
  }
  /* 底部导航栏 */
  .mint-tabbar{
    background-color: #000;
    position:fixed;
    bottom:0;
    height: 40px;
    justify-content: center;
    align-items: center;
  }
  .mint-tab-item >>> .mint-tab-item-label{
    color:#b8bbbf;
  }
  .mint-tab-item {
    padding: 14px 0;
  }
</style>
