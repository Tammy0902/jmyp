<template>
  <div class="shoppingcart">
    <HeaderCom title="购物车" />
    <emptycart v-show="appear"/>
    <ShopcartBody v-show="!appear"/>    
    <Footer />
  </div>
</template>

<script>
import Emptycart from "components/emptycart";
import ShopcartBody from "components/shopcartBody";
import {mapActions,mapState} from "vuex";


export default {
  name: "shoppingcart",
  computed:{
    ...mapState({
      appear:state =>state.goodspage.appear
    })
  },
  data(){
    return{
      
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
