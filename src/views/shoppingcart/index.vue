<template>
  <div id="shoppingcart">
    <Heade title="购物车" />
    <emptycart />
    <ShopcartBody />
    <Footer />
  </div>
</template>

<script>
import Emptycart from "components/emptycart";
import ShopcartBody from "components/shopcartBody";
import {mapState,mapMutations,mapActions} from "vuex";
export default {
  name: "shoppingcart",
  components: {
    Emptycart,
    ShopcartBody
  },
  created() {
    this.getGoods()
    
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
