<template>
  <div class="shoppingcart">
    <HeaderCom title="购物车" />
    
    <ShopcartBody v-show="appear"/>
    <emptycart v-show="!appear"/>
    <Footer />
  </div>
</template>

<script>
import Emptycart from "components/emptycart";
import ShopcartBody from "components/shopcartBody";
import {mapActions} from "vuex";


export default {
  name: "shoppingcart",
  data(){
    return{
      appear:true,
    }
    
  },
  
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
  .shoppingcart{
    height:100%;
    width:100%;
  }
</style>
