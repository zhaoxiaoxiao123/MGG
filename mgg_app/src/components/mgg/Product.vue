<template>
  <div>
    <!-- 调整布局 -->
    <div style="margin-top:91.72px"></div>
    <div>
      <div class="type">
        <router-link :to="{name:'list',params:{fname:'新品上市'}}">
          <span>新品上市</span>
        </router-link>
        <router-link :to="{name:'list',params:{fname:'热销推荐'}}">
          <span>热销推荐</span>
        </router-link>
        <router-link :to="{name:'list',params:{fname:'IP联名系列'}}">
          <span>IP联名系列</span>
        </router-link>
        <router-link :to="{name:'list',params:{fname:'上装'}}">
          <span>上装</span>
        </router-link>
        <router-link :to="{name:'list',params:{fname:'下装'}}">
          <span>下装</span>
        </router-link>
        <router-link :to="{name:'list',params:{fname:'2020春夏'}}">
          <span>裙装</span>
        </router-link>
        <router-link :to="{name:'list',params:{fname:'运动鞋'}}">
          <span>女鞋</span>
        </router-link>
        <router-link :to="{name:'list',params:{fname:'手袋'}}">
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
  // beforeCreate () {
  //   document.querySelector('body').setAttribute('style', 'background:#fff')
  // },
  // beforeDestroy () {
  //   document.querySelector('body').removeAttribute('style')
  // },
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