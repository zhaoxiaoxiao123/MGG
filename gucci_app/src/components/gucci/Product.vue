<template>
  <div>
    <!-- 调整布局 -->
    <div style="margin-top:40px"></div>
    <div>
      <div class="search">
        <router-link to="/" slot="right">
          <mt-button class="iconfont icon-sousuo">搜索商品</mt-button>
        </router-link>
      </div>

      <div class="type">
        <router-link to="/">
          <span>新品上市</span>
        </router-link>
        <router-link to="/">
          <span>热销推荐</span>
        </router-link>
        <router-link to="/">
          <span>IP联名系列</span>
        </router-link>
        <router-link to="/">
          <span>上装</span>
        </router-link>
        <router-link to="/">
          <span>下装</span>
        </router-link>
        <router-link to="/">
          <span>裙装</span>
        </router-link>
        <router-link to="/">
          <span>女鞋</span>
        </router-link>
        <router-link to="/">
          <span>包包配饰</span>
        </router-link>
      </div>
      
      <!-- 调整布局 -->
      <div style="background-color: #fff;flex:1"></div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  .type{
    border-top:1px solid #646464;
    border-bottom:1px solid #646464;
    display:flex;
    flex-direction:column;
    align-items:center;
    /* background-color: #fff; */

  }
  .type a:first-child{
    margin-top:30px;
    margin-bottom:15px;
  }
  .type a~a{
    margin:15px 0;
  }
  .type a:last-child{
    margin-bottom:40px;
  }
  .type a{
    font-size:1.2rem;
    font-weight:500;
    text-decoration:none;
    color:#000;
  }
</style>