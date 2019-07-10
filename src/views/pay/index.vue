<template>
  <div class="pay">
    <Header title="收银台" />
    <div class="order-sum">
      <div>订单金额</div>
      <div>￥10</div>
    </div>
    <div class="pay-way">
      <div>选择支付方式</div>
      <div class="alipay">
        <i class="iconfont icon-zfb"></i>
        <p>支付宝</p>
        <span></span>
      </div>
      <div class="wetChat">
        <i class="iconfont icon-wetchat"></i>
        <p>
          微信支付
          <b>亿万用户的选择，更快更安全</b>
        </p>
        <span></span>
      </div>
      <div class="huabei">
        <i class="iconfont icon-huabei"></i>
        <p>
          花呗分期
          <b>购满150元才可用花呗分期哦~</b>
        </p>
        <span></span>
      </div>
      <div class="goods-pay">
        <i class="iconfont icon-sendgoods"></i>
        <p>
          货到付款
          <b>您购买的商品不支持货到付款</b>
        </p>
        <span></span>
      </div>
    </div>
    <div class="go-pay">去支付</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.pay {
  width: 100%;
  height: 100%;
  padding-top: 0.82rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f5f5f5;
}
.pay .order-sum {
  width: 100%;
  height: 0.86rem;
  line-height: 0.86rem;
  box-sizing: border-box;
  padding: 0 0.4rem;
  display: flex;
  justify-content: space-between;
  background: #fff;
  font-size: 0.32rem;
  margin: 0.16rem 0;
}

.pay-way {
  width: 100%;
  min-height: 5.48rem;
  box-sizing: border-box;
}
.pay-way .iconfont {
  font-size: 0.6rem;
  margin-right: 0.4rem;
  width: 0.5rem;
  height: 0.5rem;
}
.pay-way div {
  width: 100%;
  height: 1.08rem;
  font-size: 0.32rem;
  background: #fff;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
  padding: 0 0.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.pay-way span {
  width: 0.4rem;
  height: 0.4rem;
  border: 1px solid #ccc;
  border-radius: 50%;
}
.pay-way p {
  width: 5.54rem;
}
.pay-way b {
  display: block;
  font-size: 0.24rem;
  color: #999;
  line-height: 0.4rem;
}

.go-pay {
  width: 4.78rem;
  height: 0.7rem;
  background: #fe4070;
  border-radius: 0.4rem;
  text-align: center;
  line-height: 0.7rem;
  color: #fff;
  font-size: 0.32rem;
  margin-top: 0.45rem;
}
.alipay .iconfont {
  color: #3eb6e1;
}
.wetChat .iconfont {
  color: #8dc81b;
}
.huabei .iconfont {
  color: #3eb6e1;
}
.goods-pay .iconfont {
  color: #f4b00c;
}
</style>
