<template>
  <div class="list">
    <div class="search">
      <div style="display:flex;align-items:center">
        <router-link to="/">
          <mt-button solt="left" icon="back" style="width:auto"></mt-button>
        </router-link>
        <span slot="left">MGG</span>
      </div>
      <router-link to="/Search" slot="right">
        <mt-button class="iconfont icon-sousuo">搜索商品</mt-button>
      </router-link>
    </div>
    <!-- 调整布局 -->
    <div style="margin-top:82px"></div>

    <div class="listContent">
      <div class="listItem" v-for="(item,i) of list" :key="i">
        <div>
          <img :src="'http://127.0.0.1:5500/'+item.lpic" alt="">
        </div>
        <span>{{item.lname}}</span>
        <span>￥{{item.lprice|formatPrice}}</span>
        <mt-button @click="addCart(item.lid,item.lname,item.lprice,item.lpic)">加入购物袋</mt-button>
      </div>
    </div> 
    
  </div>
</template>

<script>
export default {
  data(){
    return{
      list:[],
      active:''
    }
  },
  async created(){
    await this.loadMore(); 
  },
  methods:{
    loadMore(){
      let fname=this.$route.params.fname;
      this.axios.get("list",{params:{fname}}).then(res=>{
        this.list=res.data;
      })
    },
    
    addCart(lid,lname,price,lpic){
      // console.log(lid,lname,price,lpic);
      // 创建变量obj  保存传递的参数
      var obj = {lid,lname,price,lpic}
      // 创建变量url  服务器访问地址
      var url = "addcart"
      // 发送ajax请求
      this.axios.get(url,{params:obj})
      .then(res=>{
        if(res.data.code==-2){
          this.$toast("请登录");
          this.$router.push('/');
          this.$store.commit('changeActive','me')
        }else{
          // this.$toast("添加成功");
          this.$router.push('/');
          this.$store.commit('changeActive','cart')
        }
      })
    }
  }
}
</script>

<style scoped>
  .listContent{
    display:flex;
    flex-wrap: wrap;
    background-color: #fff;
  }
  .listItem{
    display:flex;
    flex-direction: column;
    width:50%;
    align-items: center;
    background-color: #e8e8e8;
    border-bottom:2px solid #fff;
    box-sizing: border-box;
    font-size: 0.9rem;
  }
  .listItem:nth-child(odd){
    border-right: 2px solid #fff;
  }
  .listItem>div{
    width:89px;
    height:99px;
    margin-top: 40px;
  }
  .listItem>div>img{
    width:100%;
    height:100%;
  }
  .listItem>span:nth-child(2){
    width:80%;
    text-align: center;
    margin-top: 10px;
    color:rgb(49,49,49);
  }
  .listItem>span:nth-child(3){
    margin-top: 30px;
    margin-bottom: 10px;
    color:rgb(153,153,153)
  }
  .listItem .mint-button{
    background-color: #fff;
    color:black;
    font-size: 0.9rem;
    border:2px solid #000;
    margin-bottom: 10px;
  }
</style>