<template>
     <div class="head">
         <router-link to="/searchList" tag="input" ></router-link>
        <router-link to="/search" tag="span" class="iconfont">&#xe65c;</router-link>
        <!-- <span class="iconfont">&#xe65c;</span> -->
        <!-- <router-view></router-view> -->
    </div>
</template>

<script>
export default {
    name:"search",
}
</script>

<style scoped>
.head{
    box-sizing:border-box;
    width:100%;
    height:1rem;
    display:flex;
    align-items:center;
}
.head input{
    width:75%;
    height:0.6rem;
    margin:0.3rem;
    margin-left:0.5rem;
    border-radius:0.3rem;
    background:#f5f5f5;
    border:none;
}
.head span{
    margin-left:0.2rem;
    font-size:0.5rem;
} 
</style>