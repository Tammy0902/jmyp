<template>
     <div id="shoppingcart">
        <Heade title="购物车"/>
        <emptycart/>
        <ShopcartBody/>
        <Footer/>
    </div>
</template>

<script>
import Emptycart from "components/emptycart"
import ShopcartBody from "components/shopcartBody"
export default {
    name:"shoppingcart",
    
    components:{
        Emptycart,
        ShopcartBody
    }

}
</script>


<style>

</style>
