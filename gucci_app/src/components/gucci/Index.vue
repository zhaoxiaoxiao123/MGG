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

      <mt-swipe :auto="3000" style="width:100%;height:171px">
        <mt-swipe-item><img src="../../assets/index/banner_1.jpg" alt="" style="width:100%;"></mt-swipe-item>
        <mt-swipe-item><img src="../../assets/index/banner_2.jpg" alt="" style="width:100%;"></mt-swipe-item>
      </mt-swipe>
      
      <div class="handbag">
        <img src="../../assets/index/handbag.gif" alt="" style="width:50%">
        <span class="name">手袋</span>
        <span class="title">MGG 1999马衔扣小号手提包</span>
        <router-link to="/">
          <mt-button>点击购买</mt-button>
        </router-link>
      </div>
      
      <div class="dress">
        <img src="../../assets/index/dress_1.jpg" alt="" style="width:100%;margin-bottom:20px">
        <span class="name">2020春夏</span>
        <span class="title">女士服饰</span>
        <router-link to="/">
          <mt-button>点击购买</mt-button>
        </router-link>
      </div>

      <div class="shoes">
        <img src="../../assets/index/shoes.jpg" alt="" style="width:50%">
        <span class="name">运动鞋</span>
        <span class="title">MGG 饼干鞋运动休闲女鞋</span>
        <router-link to="/">
          <mt-button>点击购买</mt-button>
        </router-link>
      </div>
      
      <router-link to="/">
        <div class="history">
        MGG故事
      </div>
      </router-link>
      
      
    </div>

    <!-- 调整布局 -->
    <div style="margin-bottom:40px"></div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .search .mint-button{
   background-color:#fff;
   border-radius:0;
   width:100%;
  }
  .search .mint-button::after{
    background-color: transparent;
  }
  .handbag,.dress,.shoes{
    display:flex;
    flex-direction:column;
    align-items:center;
  }
  .name{
    font-size:0.8rem;
    margin-bottom:10px
  }
  .title{
    font-size:1.2rem;
    margin-bottom:10px;
    width:50%;
    text-align:center;
    margin-bottom: 20px;
  }
  .handbag .mint-button,.dress .mint-button,.shoes .mint-button{
   padding:0 40px;
   margin-bottom:40px;
  }
  .handbag .mint-button::after,.dress .mint-button::after,.shoes .mint-button::after{
    background-color: transparent;
  }
  .history{
    text-align: center;
    background-image:url('../../assets/index/history.jpg');
    background-position:0 0;
    background-size:cover;
    width:100%;
    height:200px;
    line-height:200px;
    color:#fff;
    text-align:center;
  }
</style>