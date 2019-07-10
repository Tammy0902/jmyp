<template>
  <div id="app">
    <router-view></router-view>
    <Footer v-if="$route.meta.flag"/>
  </div>
</template>
<script>
import Footer from "common/footer"
import axios from "axios"
export default {
   name:"app",
  components:{
        Footer,

    }


}
</script>





<style >

#app{
  width:100%;
  height:100%;
  
}


</style>
