<template>
  <div>
    <div>
      
      <!-- 调整布局 -->
      <div style="margin-top:91.72px"></div>

      <mt-swipe :auto="3000" style="width:100%;height:171px">
        <mt-swipe-item><img src="../../assets/index/banner_1.jpg" alt="" style="width:100%;"></mt-swipe-item>
        <mt-swipe-item><img src="../../assets/index/banner_2.jpg" alt="" style="width:100%;"></mt-swipe-item>
      </mt-swipe>
      
      <div class="handbag" v-for="(item,i) of list" :key="i">
         <img :src="'http://127.0.0.1:5500/'+item.fpic" alt="" style="width:50%"> {{item.fname}}
        <span class="name">{{item.fname}}</span>
        <span class="title">{{item.fdes}}</span>
        <!-- <router-link :to="'/List/?'+item.fid"> -->
          <mt-button @click="listf(item.fname)">点击购买</mt-button>
        <!-- </router-link> -->
      </div>
      
      <router-link to="/Method">
        <div class="history">
        MGG穿搭攻略
      </div>
      </router-link>
      
      
    </div>

    <!-- 调整布局 -->
    <div style="margin-bottom:40px"></div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      // list:[{fname:'aa',fdes:'aaa'},{fname:'aa',fdes:'aaa'}]
	  list:[]
    }
  },
  
  created(){
    this.loadMore();
	console.log(this.list)
  },

  methods:{
    loadMore(){
      this.axios.get("http://127.0.0.1:5500/family").then(res=>{
        this.list=res.data;
        console.log(res.data)
      })
    },
    listf(fname){
      this.$router.push({name:'list',params:{fname}})
    }
  }
}
</script>

<style scoped>
  .handbag,.dress,.shoes{
    display:flex;
    flex-direction:column;
    align-items:center;
  }
  .name{
    font-size:0.9rem;
    margin-bottom:10px
  }
  .title{
    font-size:1.2rem;
    margin-bottom:10px;
    width:50%;
    text-align:center;
    margin-bottom: 20px;
  }
  .handbag .mint-button{
   padding:0 40px;
   margin-bottom:40px;
  }
  .handbag .mint-button::after{
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