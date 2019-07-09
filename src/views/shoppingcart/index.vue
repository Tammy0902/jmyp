<template>
  <div id="shoppingcart">
    <Heade title="购物车" />
<<<<<<< HEAD
    <emptycart />
=======
    <!-- <emptycart /> -->
>>>>>>> tammy
    <ShopcartBody />
    <Footer />
  </div>
</template>

<script>
import Emptycart from "components/emptycart";
import ShopcartBody from "components/shopcartBody";
<<<<<<< HEAD
import {mapState,mapMutations,mapActions} from "vuex";
export default {
  name: "shoppingcart",
=======
import {mapActions} from "vuex";
console.log(...mapActions);

export default {
  name: "shoppingcart",
  created() {
    this.getGoods();
  }, 
>>>>>>> tammy
  components: {
    Emptycart,
    ShopcartBody
  },
<<<<<<< HEAD
  created() {
    this.getGoods()
    
  },

  methods: {
    ...mapActions({        
      getGoods:"cart/getActionGoods"
=======
  
  methods: {
    
    
    ...mapActions({
      getGoods: "cart/getActionGoods"
>>>>>>> tammy
    })
  }
};
</script>


<<<<<<< HEAD
<style scoped>
=======
<style>
>>>>>>> tammy
</style>
