<template>
  <div id="login">
    <div class="col">
      <span class="text">手机号码</span>
      <div class="row">
        <mt-field placeholder="请输入11位手机号码" v-model="phone"></mt-field>
        <span class="text">使用微信绑定的手机号</span>
      </div>
    </div>
    <div class="col" style="margin-bottom: 40px">
      <span class="text">手机验证码</span>
      <div class="row">
        <mt-field placeholder="请输入短信验证码" v-model="captcha"></mt-field>
        <span class="text">获取验证码</span>
      </div>
    </div>
    <mt-button size="large" @click="login">登录</mt-button>
  </div>
</template>
<script>
export default {
  data(){
    return {
      phone:'15053163566',
      captcha:'123456'
    }
  },
  methods:{
    login(){
      // 1.创建正则表达式验证手机号和验证码
      var reg1=/^1[3-9][0-9]{9}$/;
      var reg2 = /^[0-9]{6}$/;
      // 2.获取手机号和验证码
      var p = this.phone;
      var c = this.captcha;
      // 3.验证手机号如格式不正确，提示错误信息
      if(!reg1.test(p)){
        this.$messagebox("消息","手机号格式不正确");
        return;
      }
      // 4.验证验证码如格式不正确，提示错误信息
      if(!reg2.test(c)){
        this.$messagebox("消息","验证码格式不正确");
        return;
      }
      // 5.创建url变量，保存请求服务器的地址
      var url = 'login';
      // 6.创建obj变量，保存请求时参数
      var obj = {phone:p,captcha:c}
      // 7.发送ajax请求
      this.axios.get(url,{params:obj})
      .then(res=>{
          console.log(res.data.code)
          if(res.data.code==-1){
             this.$messagebox("消息","手机号或验证码有误");
          }else{
            this.$toast("登录成功");
            this.$router.push("/product")
          }
      })
    }
  }
}
</script>
<style scoped>
  #login{
    margin-top: 50px;
    margin-left: 30px;
    margin-right: 30px;
  }
  .col{
    display:flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  .row{
    display:flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
  }
  .text{
    font-size: 10px;
  }
  .mint-field{
    width: 55%;
    margin-right: 10px;
  }
  .row >>> .mint-field-core {
    font-size: 10px;
  }
  .mint-button{
    border-radius: 0px;
    font-size: 10px;
    height: 48px;
    margin-bottom: 40px;
  }
  .mint-button--default{
    background-color: #000;
    color: #fff;
  }
</style>