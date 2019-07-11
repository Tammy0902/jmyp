<template>
  <div class="headerCom">
    <i class="iconfont goBack" @click="handlegoback()">&#xe605;</i>
    <h3 class="shoppingCart">{{title}}</h3>
    <i class="iconfont goHome" @click="handlegohome()">&#xe600;</i>
  </div>
</template>

<script>
export default {
  name:"headerCom",
  props:{
    title:{
      type:String,
      default:"聚美优品"
    },
  icon:{
      type:String,
      default:""
  }
  },
  methods: {
    handlegoback() {
      if (window.history.length <= 1) {
        this.$router.push({ path: "/" });
        return false;
      } else {
        this.$router.go(-1);
      }
    },
    handlegohome(){
      this.$router.push({ path: "/home" });
    }
  }
  
}
</script>

<style>
.headerCom {
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

.headerCom > .iconfont {
  font-size: 0.32rem;
  color: #999;
}
</style>



