<template>
  <div class="go-buy">
    <div class="store_nav">
      <ul>
        <li>
          <i class="iconfont icon-store"></i>
          <span>店铺</span>
        </li>
        <li>
          <i class="iconfont icon-bag">
            <span class="num_sup">0</span>
          </i>
          <span>购物车</span>
        </li>
      </ul>
    </div>
    <div class="addCart">加入购物车</div>
    <router-link class="go-payment" tag="div" to="/order">去购买</router-link>
  </div>
</template>

<script>
export default {
  name: "goodspageFooter"
};
</script>

<style scoped>
.go-buy {
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  position: fixed;
  left: 0;
  bottom: 0;
  text-align: center;
  font-size: 0.32rem;
  background:#fff;
}
.go-buy .iconfont {
  font-size: 0.5rem;
  width: 0.8rem;
}
.go-buy > .store_nav ul {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 0.16rem;
  box-sizing: border-box;
}
.go-buy > .store_nav > ul > li {
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #eee;
  box-sizing: border-box;
  color: #999;
  font-size: 0.28rem;
}
.go-buy > .store_nav > ul > li > i {
  position: relative;
}
.go-buy .num_sup {
  width: 0.34rem;
  height: 0.34rem;
  border-radius: 50%;
  background: #fe4070;
  color: #fff;
  position: absolute;
  right: 0;
  top: 0;
  line-height: 0.34rem;
  font-size: 0.2rem;
  z-index: 1;
  text-align: center;
}
.go-buy div {
  width: 33.3%;
  height: 1rem;
}
.go-buy .addCart {
  background: #ffcfdf;
  color: #fe4070;
  line-height: 1rem;
}
.go-payment {
  background: #fe4070;
  color: #fff;
  line-height: 1rem;
}
</style>
