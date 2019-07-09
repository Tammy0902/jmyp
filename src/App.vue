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
  width:100%;
  height:100%;
}
</style>
