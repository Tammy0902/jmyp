<template>
  <div id="app">
    <router-view></router-view>
    <Footer/>
  </div>
</template>
<script>
import Footer from "common/footer"
export default {
  components:{
        Footer,
    }
}
</script>


<style>
#app{
  height: 100%;
}



</style>
