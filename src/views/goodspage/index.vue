<template>
  <div class="goodspage">
    <HeaderCom title="详情页"/>
    <GoodspageBody/>
    <GoodspageFooter/>
  </div>
</template>

<script>
import GoodspageFooter from "components/goodspageFooter";
import GoodspageBody from "components/goodspageBody";

export default {
  name: "goodspage",
  prpos:["id"],
  components: {
    GoodspageBody,
    GoodspageFooter
  },
  
};
</script>


<style scoped>
.goodspage {
  width: 100%;
  height: 100%;
  padding: 0.82rem 0 1rem 0;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  overflow-y: auto;
  background:#f5f5f5;
}
</style>