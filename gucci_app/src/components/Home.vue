<template>
  <div class="page-tabbar">
    <div class="page-wrap">
      <!-- 顶部导航栏 -->
      <!-- <mt-header title="GUCCI" fixed></mt-header> -->
      <!-- 调整布局 -->
      <!-- 消息面板 -->
      <mt-tab-container v-model="active">
        <mt-tab-container-item id="index">
          <mt-header fixed>
            <h1 slot="left" style="font-size:inherit;
    font-weight: 400">MGG</h1>
          </mt-header>
          <index></index>
        </mt-tab-container-item>
        <mt-tab-container-item id="product" style="background-color: #fff;">
          <mt-header fixed>
            <h1 slot="left" style="font-size:inherit;
    font-weight: 400">分类</h1>
          </mt-header>
          <product></product>
        </mt-tab-container-item>
        <mt-tab-container-item id="cart">
          <mt-header fixed>
            <h1 slot="left" style="font-size:inherit;
    font-weight: 400">购物袋</h1>
          </mt-header>
          <cart></cart>
        </mt-tab-container-item>
        <mt-tab-container-item id="chat">
          <chat></chat>
        </mt-tab-container-item>
        <mt-tab-container-item id="me">
          <mt-header fixed>
            <h1 slot="left" style="font-size:inherit;
    font-weight: 400">我的账户</h1>
          </mt-header>
          <login ></login>
        </mt-tab-container-item>
      </mt-tab-container>
      <!-- 底部导航栏 -->
      <mt-tabbar v-model="active" style="position:fixed;bottom:0">
        <mt-tab-item id="index" @click="change('index')">
          <img src="" alt="">
          首页
        </mt-tab-item>
        <mt-tab-item id="product" @click="change('product')">
          <img src="" alt="">
          分类
        </mt-tab-item>
        <mt-tab-item id="cart" @click="change('cart')">
          <img src="" alt="">
          购物袋
        </mt-tab-item>
        <mt-tab-item id="chat" @click="change('chat')">
          <img src="" alt="">
          客服
        </mt-tab-item>
        <mt-tab-item id="me" @click="change('me')">
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
      active:'me'
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
  method:{
    change(id){
      this.active=id;
    }
  }
}
</script>

<style scoped>
  .mint-header{
    background-color: #fff;
    color:#000;
  }

  /* 底部导航栏 */
  .mint-tabbar{
    background-color: #000;
  }
  .mint-tab-item >>> .mint-tab-item-label{
    color:#b8bbbf;
  }
</style>
