<template>
  <div class="adress">
    <i class="iconfont icon-location"></i>
    <div class="adress-msg">
      <p>收货人：*y 13455678903</p>
      <p>地址:广东省-深圳市-宝安区 深圳西部硅谷</p>
    </div>
    <i class="iconfont icon-right"></i>
  </div>
</template>

<script>
export default {
  name: "orderAdress"
};
</script>

<style scoped>
.adress {
  width: 100%;
  height: 1.36rem;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.28rem;
  padding: 0 0.2rem;
  box-sizing: border-box;
}

.adress-msg {
  width: 85%;
}
</style>
