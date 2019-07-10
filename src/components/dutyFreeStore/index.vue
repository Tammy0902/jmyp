<template>
    <div class="wrap">
        <HeaderCom/>
        <div class="dutyFreeStore-content">
        <div class="dutyFreeStore">
               <Search/>
                <Nav/>
        <div class="nav">
            <ul>
                <li><i class="iconfont">&#xe601;</i><span>海外直供</span></li>
                <li><i class="iconfont">&#xe602;</i><span>原装正品</span></li>
                <li><i class="iconfont">&#xe600;</i><span>极速到货</span></li>
                <li><i class="iconfont">&#xe627;</i><span>轻松退货</span></li>
            </ul>
        </div>
        <div class="active"><i class="iconfont">&#xe603;</i><span>今日团购,每天10点上新</span></div>
        <div class="goods" v-for="(item,index) in msg" :key="index">
            <img :src="item.big_thumb" alt="">
            <div class="goods-right">
                <h5>
                     {{item.brand_name}}
                </h5>
                <p><span class="price-one">{{item.market_price}}</span><span class="prive-two">{{item.product_price}}</span></p>
            </div>
        </div>
        </div>
    </div>
</div>
</template>

<script>

// import {dutyFreeStore} from "api/home.js"
import axios from "axios"
export default {
    data(){
        return{
            msg:""
        }
    },
    created(){
      
    }
   
}
</script>

<style scoped>
.dutyFreeStore-content{
 padding:.86rem 0 .96rem 0;
 width:100%;
 height:100%;
 position:absolute;
}
.dutyFreeStore{
   
}
.wrap{
    padding-bottom:0.96rem;
}


.nav ul {
    width:100%;
    height:2.16rem;
    display:flex;
    justify-content:space-around;
    align-items: center;
    margin-bottom:.2rem;
}
.nav>ul>li{
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    
}
.nav>ul>li>i{
    font-size: .8rem;
    color:#fe3e71;
    margin-bottom:.2rem;
}
.nav>ul>li>span{
    font-size: .2rem;
  
}
.active{
    width:100%;
    height:.77rem;
    display:flex;
    align-items: center;
    justify-content: center;
}
.active>i{
    color:#fe3e71;
    padding-right:.1rem;
}
.active>span{
   font-weight:500;
   font-size:.26rem;
}


.goods{
    display:flex;
    width:100%;
    height:2.2rem;
    background:white;
    margin-bottom:.2rem;
    font-size:.22rem;
    padding:.2rem;
    box-sizing:border-box;
 }
 .goods img{
    width:2rem;
    height:2rem;
    background:#cccccc;
 }
.goods .goods-right{
    padding:.2rem .2rem 0 .2rem;
    display:flex;
    flex-direction: column;
    width:70%;
 
}
.goods .goods-right p:nth-child(2){
    margin-top: 0.7rem ;
   margin-bottom:0.1rem;
}
.goods .goods-right p:nth-child(2) span:nth-child(1){
    font-size:.35rem;
   color:red;
}
.goods .goods-right p:nth-child(2) span:nth-child(2){
    font-size:.16rem;
    text-decoration: line-through;
}
</style>
