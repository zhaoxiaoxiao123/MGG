<template>
  <div id="app">
    <!-- 显示组件的容器 -->
    <router-view></router-view>
  </div>
</template>

<style>
  #app{
     padding-top:0px;
     padding-bottom:0px;
     overflow-x:hidden;
     /* background-color:lightgray; */
   }
   body{
     background-color:rgb(230,230,230);
     margin:0;
   }
   .is-active{
     background-color:transparent;
   }
</style>
