<template>
    <div class="home">
        <HomeSearch/>
        <Homenav/>
        <Hometob/>
    </div>
</template>

<script>
import HomeSearch from "components/homeSearch"
import Homenav from "components/homenav"
import Hometob from "components/hometob"


export default {
    components:{
        HomeSearch,
        Homenav,
        Hometob,
    },
    data(){
        return{

        }
    },
    created(){
        
    }
}
</script>



<style scoped>
.home{
    width:100%;
    height:100%;
    padding:0 0 .96rem 0;
    box-sizing: border-box;
    }
</style>
