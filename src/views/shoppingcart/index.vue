<template>
  <div id="shoppingcart">
    <Heade title="购物车" icon="<"/>
    <emptycart />
    <ShopcartBody />
    <Footer />
  </div>
</template>

<script>
import Emptycart from "components/emptycart";
import ShopcartBody from "components/shopcartBody";
import {mapActions} from "vuex";


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
      getGoods:"cart/getActionGoods"
    })
  }
};
</script>


<style scoped>
</style>
