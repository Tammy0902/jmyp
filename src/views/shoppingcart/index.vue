<template>
  <div id="shoppingcart">
    <Heade title="购物车" />
    <!-- <emptycart /> -->
    <ShopcartBody />
    <Footer />
  </div>
</template>

<script>
import Emptycart from "components/emptycart";
import ShopcartBody from "components/shopcartBody";
import {mapActions} from "vuex";
console.log(...mapActions);

export default {
  name: "shoppingcart",
  created() {
    this.getGoods();
  }, 
  components: {
    Emptycart,
    ShopcartBody
  },
  
  methods: {
    
    
    ...mapActions({
      getGoods: "cart/getActionGoods"
    })
  }
};
</script>


<style>
</style>
