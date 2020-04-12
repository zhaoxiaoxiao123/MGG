<template>
  <div>
    <!-- 调整布局 -->
    <div style="margin-top:40px"></div>
    <h3>客服会话</h3>
    <div id="msg"></div>
    <div id="msgbar">
      <mt-field placeholder="111"></mt-field>
      <mt-button>发送</mt-button>
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
  #msgbar{
    width:100%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
  }
  .mint-cell{
    min-height:16px;
    width:260px;
    color:#000;
  }
  #msgbar >>> .mint-field-core{
    border-radius:5px;
    font-size:14px;
  }
  .mint-button--default{
    background-color: green;
    color: #fff;
    box-shadow:0;
  }
  .mint-button{
    font-size: 14px;
    height: 24px;
    border-radius:3px;
  }
</style>