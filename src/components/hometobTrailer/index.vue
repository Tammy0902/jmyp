<template>
    <div class="hometobTrailer">
        <Search/>
        <Nav/>
        
          <div class="goods-con">
       
        <div class="con"> 
            <div class="title-a  "  @click ="handleToggle" :class="flag?'color':''">
                今日十点上新
            </div>
            <div class="title-b "  @click ="handleToggle"  :class="!flag?'color':''">
                明日十点预告
            </div>
        </div>
        </div>
        <Loading v-if="loading"></loading>
           <router-link class="goods" v-for="(item,index) in msg" :key="index"  :to="{path:'/goodspage',query:{id:item.item_id}}">
                <img :src="item.image" alt="">
                <div class="goods-right">
                    
                    <h5>
                        {{item.medium_name}}
                    </h5>
                    <p><span class="price-one">{{item.jumei_price}}</span></p>
                    <p>{{item.buyer_number_text}}</p>
             </div>
        </router-link>
    </div>
    

</template>

<script>
import {getgroupbuy,gethomeToggle} from "api/groupbuy.js"

import axios from "axios"

export default {
    data(){
        return{
            msg:"",
            flag:true,
            loading: true,
        }
    },
    components:{
       
    },
    methods:{
        async  handleToggle(){
            this.loading = true;
            this.flag = !this.flag;
            if(this.flag == false){
             
                let data = await gethomeToggle();
                this.loading = false;
                this.msg = data.data;
            }
               if(this.flag == true){
                  
                let data = await getgroupbuy();
                this.loading = false;
                this.msg = data.data;
            }
        }
    },
    async created(){
        let data = await getgroupbuy();
        this.msg = data.data;
        this.loading = false;
    }
}
</script>

<style scoped>
.color{
  color:pink;
}
.goods-con{
    width:100%;
    height:100%;
    background:#f5f5f5;
}
.con {
    display:flex;
    flex-wrap:wrap;
    overflow-y: auto;
}
.con .title-a {
    width:50%;
    height:.86rem;
    background:white;
    text-align: center;
    line-height:.86rem;
}
.con .title-b {
    width:50%;
    height:.86rem;
    text-align: center;
    background:white;
    line-height:.86rem;
    font-size:.22rem;
}
 .goods{
    flex:0 0 auto;
    display:flex;
    width:100%;
    height:2.4rem;
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
    box-sizing:border-box;
 }
.goods .goods-right{
    padding:.2rem .2rem 0 .2rem;
    display:flex;
    flex-direction: column;
    width:65%;
}
.goods .goods-right p:nth-child(2){
    margin-top: 0.18rem ;
   margin-bottom:0.1rem;
}
.goods .goods-right p:nth-child(3){
    margin-top: 0.1rem ;
   margin-bottom:0.1rem;
}
.goods .goods-right p:nth-child(2) span:nth-child(1){
    font-size:.35rem;
   color:red;
}
.goods .goods-right p:nth-child(2) span:nth-child(2){
    font-size:.10rem;
    text-decoration:line-through;
}
</style>
