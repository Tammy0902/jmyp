<template>
  <div id="header">
    <i class="iconfont goBack">&#xe605;</i>
    <h3 class="shoppingCart">{{title}}</h3>
    <i class="iconfont goHome">&#xe600;</i>
  </div>
</template>

<script>
export default {
  name:"heade",
  props:{
    title:{
      type:String,
      default:"聚美优品"
    }
  }
};
</script>

<style>
#header {
  width: 100%;
  height: 0.82rem;
  font-size: 0.32rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.26rem;
  box-sizing: border-box;
  border-bottom: 1px solid #eee;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 1;
}

#header > .iconfont {
  font-size: 0.32rem;
  color: #999;
}
</style>



