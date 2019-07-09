<template>
     <div class="head">
        <input type="text"/>
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
    width:6rem;
    height:0.6rem;
    margin:0.3rem;
    border-radius:0.3rem;
    background:#f5f5f5;
}
.head span{
    margin-left:0.2rem;
    font-size:0.5rem;
} 
</style>