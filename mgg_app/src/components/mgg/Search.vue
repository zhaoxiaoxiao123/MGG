<template>
  <div>
    <!-- 顶部导航栏 -->
    <mt-header title="搜索" fixed>
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <!-- 调整布局 -->
    <div style="margin-top:40px"></div>
    
    <div class="searchDetail">
      <div>
        <mt-field placeholder="手袋" class="iconfont icon-sousuo" v-model="fname"></mt-field>
      </div>
      <router-link :to="{name:'list',params:{fname}}"><mt-button>前往</mt-button></router-link>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      fname:'手袋'
    }
  },
  created(){
    
  }
}
</script>

<style scoped>
  .searchDetail{
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    display: flex;
    padding:10px 20px;
    justify-content: space-between;
    align-items: center;
  }
  .searchDetail .mint-button{
    background-color:transparent;
    border:1px solid #000;
    color:#000;
  }
  .mint-cell{
    width:70%;
    text-align: center;
    line-height: 48px;
    background-color:transparent;
  }
  .mint-cell >>> .mint-field-core {
    background-color: transparent !important;
  }
</style>