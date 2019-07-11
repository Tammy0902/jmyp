<template>
  <div class="emptycart">
    <div  class="no-goods">
      <div class="empty-cart"></div>
        <p>{{extra}}</p>
        <router-link :to="path" tag="span">{{go}}</router-link>
    </div>
    
  </div>
</template>
<script>
export default {
  name: "emptycart",
  data() {
    return {
      extra: "您的购物车中没有商品，请先去挑选心爱的商品吧！",
      go: "去逛逛",
      path:"/home"
    };
  }
};
</script>

<style scoped>
.emptycart{
  width: 100%;
  height: 100%;
}
.no-goods {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 0.82rem;
  padding-bottom: 0.96rem;

  box-sizing: border-box;
}
.no-goods > div {
  width: 2rem;
  height: 2rem;
  margin-bottom: 0.4rem;
}
.no-goods > .empty-cart{
  width: 2rem;
  height: 2rem;
  background:url(../../../static/images/zh-img1.png) no-repeat;
  background-size: cover;
}
.no-goods > p {
  font-size: 0.28rem;
  text-align: center;
}
.no-goods > span {
  width: 2.5rem;
  height: 0.72rem;
  background: #fe4070;
  color: #fff;
  line-height: 0.72rem;
  text-align: center;
  border-radius: 0.4rem;
  margin-top: 0.4rem;
  font-size: 0.28rem;
}
</style>
