<template>
    <div class="wrap">
         <div class="head">
                <router-link  to="/search" tag="span">&lt;</router-link>
                <router-link to="/search" tag="input" ></router-link>
                <router-link to="/search" tag="span" >搜索</router-link>
        </div>
        <ul>
            <li>hahah</li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.wrap{
    width:100%;
    height:100%;
    overflow-y: auto;
}
.head{
    height:8%;
    display:flex;
    justify-content: space-around;
    align-items: center;
}
.head input{
    width:4.9rem;
    height:0.6rem;
   margin:.1rem 0 .1rem 0;
    border-radius:0.2rem;
    background:#f0e9e9;
     border:none;
}
.head  span{
    font-size:0.35rem;
    
}
ul{
    width:100%;
    display:flex;
}
ul li{
 border-top:1px solid #cccccc;
    width:100%;
    height:.8rem;
    line-height:.8rem;
    font-size:0.27rem;
    padding-left:1rem;
    border-bottom:1px solid #cccccc;
    box-sizing:border-box;

}
</style>
