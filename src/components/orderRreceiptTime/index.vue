<template>
  <div class="receiving-way">
    <i class="iconfont icon-calendar"></i>
    <div>工作日/双休/节假日均可收货</div>
    <i class="iconfont icon-right"></i>
  </div>
</template>

<script>
export default {
  name: "orderRreceiptTime"
  
};
</script>

<style scoped>
.receiving-way {
  width: 100%;
  height: 0.9rem;
  font-size: 0.28rem;
  background: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0 0.2rem;
  box-sizing: border-box;
  margin-top: 0.14rem;
  align-items: center;
}
.receiving-way div {
  width: 90%;
  margin-left: 0.2rem;
}
</style>
