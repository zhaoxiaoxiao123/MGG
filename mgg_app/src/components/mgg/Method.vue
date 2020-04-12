<template>
  <div>
    <div class="search">
      <div style="display:flex;align-items:center">
        <router-link to="/">
          <mt-button solt="left" icon="back" style="width:auto"></mt-button>
        </router-link>
        <span slot="left">MGG</span>
      </div>
      <div style="height:41px;color:#9B9B9B;text-align:center;line-height:41px">穿搭攻略</div>
    </div>
    <!-- 调整布局 -->
    <div style="margin-top:82px"></div>
    
    <div class="history">
      <div class="hItem" v-for="(item,i) of list" :key="i">
        <img :src="'http://127.0.0.1:5500/'+item.pic" alt="">
        <span>{{item.title}}</span>
        <span>{{item.des}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      list:[]
    }
  },
  created(){
    this.loadmore()
  },
  beforeCreate () {
    document.querySelector('body').setAttribute('style', 'background:#fff')
  },
  beforeDestroy () {
      document.querySelector('body').removeAttribute('style')
  },
  methods:{
    loadmore(){
      this.axios.get('method').then(res=>{
        this.list=res.data.data;
      })
    }
  }
}
</script>

<style scoped>
  .search{
    border-bottom: 1px solid #9B9B9B;
  }
  .history{
    padding:0 20px;
    background-color: #fff;
  }
  .hItem{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 40px;
  }
  .hItem>img{
    width:100%;
    margin-bottom: 10px;
  }
  .hItem>span:nth-child(2){
    color:#1B1B1b;
    border-bottom: 1px solid #999;
    font-size: 0.9rem;
    padding-bottom: 5px;
  }
  .hItem>span:last-child{
    color:#4B4B4B;
    font-size: 1.2rem;
    margin-top: 5px;
    font-weight:bold;
  }
</style>