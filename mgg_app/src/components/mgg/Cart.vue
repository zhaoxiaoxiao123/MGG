<template>
  <div>
    <!-- 调整布局 -->
    <div style="margin-top:40px"></div>
    <!-- 购物车列表为空 -->
    <div v-show="list.length==0">
      <div class="cart">
        <h4 class="title">您的购物袋为空</h4>
        <router-link to="/" style="width:100%;text-align:center">
          <mt-button style="width:70%" @click="change">继续购物</mt-button>
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
    </div>
    
    <!-- 购物车列表为不空 -->
    <div v-show="list.length!=0">
      <div class="carItem" v-for="(item,i) of list" :key="i">
        <div class="img">
          <input type="checkbox" v-model="item.cb" @change="selectItem" :id="item.id" class="iItem">
          <label :for="item.id"></label>
          <img :src="'http://127.0.0.1:5500/'+item.pic" alt="" style="width:80px;height:100px">
        </div>
        <div class="carItemc">
          <span style="font-size:1.2rem">{{item.pname}}</span>
          <span>￥ {{item.price.toFixed(2)|formatPrice}}</span>
          <span class="count">数量：{{item.count}}</span>
        </div>
        <span style="font-size:1.4rem;color:rgb(100,100,100)" @click="del(item.id)">x</span>
      </div>
      
      <!-- 调整布局 -->
      <div style="height:92px"></div>

      <div class="total">
        <div>
          <input type="checkbox" v-model="allcb" @change="selectAll" class="iAll" id="iAll">
          <label for="iAll">全选</label>
        </div>
        <div>
          <span style="margin-right:10px;">￥{{this.total.toFixed(2)|formatPrice}}</span>
          <mt-button @click="delm">删除选中商品</mt-button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return {
      list:[],
      allcb:false
    }
  },
  computed:{
    total(){
      var total=0;
      for(var item of this.list){
        total+=item.price*item.count;
      }
      return total;
    }
  },
  async created(){
    await this.loadmore();
  },
  methods:{
    change(){
      this.$emit('changeA','index');   //子传父
    },
    selectAll(){  //全选按钮状态修改操作
      for(var item of this.list){
        item.cb=this.allcb;
      }
    },
    selectItem(){  //商品状态修改操作
      var sum=0;
      for(var item of this.list){
        if(item.cb) sum++;
      }
      this.allcb=this.list.length==sum?true:false;
    },
    del(id){  //删除一条商品
      this.$messagebox.confirm('是否删除指定商品')
      .then(res=>{
        this.axios.get('del',{params:{id}})
        .then(res=>{
          if(res.data.code==1){
            this.loadmore();
            this.$toast("删除成功");
          }
        })
      })
    },
    delm(){ //删除选中商品
      var str='';
      for(var item of this.list){
        if(item.cb) str+=item.id+',';
      }
      if(!str) {
        this.$messagebox("消息","请选择删除的商品");
        return;
      }
      var id=str.slice(0,-1);
      this.axios.get('delm',{params:{id}}).then(res=>{
        this.loadmore();
        this.$toast('删除成功');
      })
    },
    loadmore(){
      this.axios.get('findcart').then(res=>{
        var rows=res.data.data;
        if(rows){
          for(var item of rows){
          item.cb=false;
        }
        this.list=rows;
        }
      })
    }
  }
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
  
  /* 购物车列表不为空 */
  .carItem{
    display:flex;
    padding:8px 10px;
    border-bottom: 1px solid rgb(180,180,180);
  }
  .carItemc{
    display:flex;
    flex-direction: column;
    margin-right: 10px;
    /* justify-content: center; */
  }
  .carItemc span{
    margin-bottom: 15px;
  }
  .carItem>.img{
    display:flex;
    flex-direction: column;
    margin-right: 20px;
  }
  .carItemc .bc{
    display:flex;
    align-items: center;
  }
  .carItemc .count{
    color:rgb(100,100,100);
    font-size:0.9rem;
  }

  .total{
    display:flex;
    justify-content: space-between;
    align-items: center;
    width:100%;
    padding:5px 10px;
    position:fixed;
    bottom:40px;
    background-color: #fff;
    font-size: 1rem;
  }
  .mint-button{
    margin-right:20px;
    padding:12px 20px;
    font-size: 0.9rem;
  }
  input[type="checkbox"]+label::before{
    content:'';
    display:inline-block;
    width:1rem;
    height:1rem;
    line-height:1rem;
    text-align: center;
  }
  input[type="checkbox"]:checked + label::before {
    content: "\2713";
  }
  input[class="iItem"]+label::before{
    background-color: #fff;
  }
  input[class="iAll"]+label::before{
    background-color: #e6e6e6;
    margin-right: 4px;
  }
  input {  /*现在把原来的复选框隐藏*/
    position: absolute;
    clip: rect(0, 0, 0, 0);
  }
</style>