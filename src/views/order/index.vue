<template>
  <div class="order">
    <Header title="结算中心" />
    <OrderAdress />
    <OrderRreceiptTime />
    <orderBody />
    <OrderFooter />
  </div>
</template>

<script>
import OrderAdress from "components/orderAdress";
import OrderRreceiptTime from "components/orderRreceiptTime";
import OrderBody from "components/orderBody";
import OrderFooter from "components/orderFooter";
export default {
  name: "order",
  components: {
    OrderAdress,
    OrderRreceiptTime,
    OrderBody,
    OrderFooter
  }
};
</script>

<style >
.order {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  padding: 0.82rem 0 1rem 0;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  overflow-y: auto;
}
.order .iconfont {
  font-size: 0.32rem;
  color: #999;
}
</style>
