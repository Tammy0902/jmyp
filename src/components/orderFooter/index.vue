<template>
  <div class="summary">
    <div class="total">
      <div>
        合计
        <span>￥10</span>
      </div>
      <div class="num-total">
        共
        <i>2</i>件商品
      </div>
    </div>
    <div class="clearing">提交订单</div>
  </div>
</template>

<script>
export default {
  name: "orderFooter"
};
</script>

<style>
.summary {
  width: 100%;
  height: 1rem;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.2rem;
  box-sizing: border-box;
  position: fixed;
  left: 0;
  bottom: 0;
  border-top: 1px solid #eee;
}
.total {
  width: 2.4rem;
  font-size: 0.28rem;
}
.total span {
  font-size: 0.36rem;
  color: #fe4070;
}
.total .num-total {
  color: #999;
}
.clearing {
  width: 2.5rem;
  height: 0.72rem;
  background: #fe4070;
  color: #fff;
  font-size: 0.36rem;
  border-radius: 0.4rem;
  line-height: 0.72rem;
  text-align: center;
}
</style>
