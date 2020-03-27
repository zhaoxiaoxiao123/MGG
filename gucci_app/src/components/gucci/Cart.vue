<template>
  <div>
    <!-- 调整布局 -->
    <div style="margin-top:40px"></div>
    <div class="cart">
      <h4 class="title">您的购物袋为空</h4>
      <router-link to="/" style="width:100%;text-align:center">
        <mt-button style="width:70%">继续购物</mt-button>
      </router-link>
    </div>

    <div class="browse">
      <h4>最近浏览</h4>
      <span style="font-style:italic;margin-bottom:20px;">您浏览过的精品</span>
      <div style="width:90%;height:1px;background-color:#646464;"></div>
      <mt-swipe :auto="3000" style="width:100%;height:300px;margin-top:60px;">
        <mt-swipe-item>
          <div class="goods">
            <img src="../../assets/index/goods_2.jpg" alt="">
            <span>chic气质宽松喇叭袖短款毛针织衫</span>
            <span class="price">￥549.00</span>
          </div>
        </mt-swipe-item>
        <mt-swipe-item>
          <div class="goods">
            <img src="../../assets/index/goods_3.jpg" alt="">
            <span>度假风网纱印花A字修身半身裙</span>
            <span class="price">￥599.00</span>
          </div>
        </mt-swipe-item>
        <mt-swipe-item>
          <div class="goods">
            <img src="../../assets/index/goods_1.jpg" alt="">
            <span>撞色印花蝙蝠袖宽松白色长袖上衣衬衫</span>
            <span class="price">￥699.00</span>
          </div>
        </mt-swipe-item>
      </mt-swipe>
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
  .cart{
    display:flex;flex-direction:column;align-items:center;
    width:100%;
    height:300px;
    background-image:url('../../assets/index/cart.jpg');
    background-size:cover;
  }
  .title{
    font-size:1.2rem;font-weight:400;color:#fff;
    margin-top:90px;
  }
  .browse,.goods{
    display:flex;flex-direction:column;align-items:center;
  }
  .goods img{
    width:40%;
    height:180px;
    padding:5px;
  }
  .browse .price{
    margin-top: 20px;
  }
</style>