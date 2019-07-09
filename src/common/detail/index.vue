<template>
    <div class="deta">
        <div class="_img">
            <!-- <img :src="groupDetail.shop_info.logo_url[640]" alt=""> -->
            <img :src="groupDetail.share_info[0].image_url_set.url[640]" alt="">
        </div>
        <div class="price">
            <strong>{{groupDetail.group_jumei_price}}</strong>
            <span>包邮</span>
            <h5>{{groupDetail.buyer_number_text}}</h5>
            <span>{{groupDetail.group_single_price}}</span>
            <h4>{{groupDetail.price_detail.title}}？</h4>
        </div>
        <div class="time">
            <p>还剩2天 13:57:17</p>
            <h4>逾期未成团自动退款</h4>
        </div>
        <div class="norms">
            <h4><span>[2人团]</span>{{groupDetail.share_info[1].text}}</h4>
        </div>
        <div class="explain">
            <h4>拼团玩法</h4>
        </div>
        <!-- <div class="shopht">
            <img :src="groupDetail.share_info.shop_url_navigation" alt="">
        </div> -->
    </div>
</template>

<script>
import {getgroupDetailData} from "api/groupbuy.js"
export default {
    props:["id"],
    data(){
        return{
            
            groupDetail:[],
            entTime:null
        }
    },
    // created(){

    //     console.log(this.$route.params)
    //     },
     async created(){
         let size=640;
        let data=await getgroupDetailData(this.$route.params.id)
        console.log(data.data,"getgroupDetailData")
        this.groupDetail=data.data
        this.entTime=data.data.recommend_data[0].end_time
        console.log(this.entTime)
    },
    mounted(){
        // setTimeout(goTime,1000)
        
        
    },
    methods:{
        goTime(entTime){
            let data=new Date();
            console.log(data,data.getDay(this.entTime),
            data.getHours(this.entTime),data.getMinutes(this.entTime)
            ,data.getTime(),this.entTime);
        },
        
    }
   
}
</script>

<style>

.deta{
    background: #f5f5f5;
    height: 100%;
}
._img img{
    width:100%;
}
.price{
    padding: 0 12px;
    background: #fff;
}
.price strong{
    font-size: 22px;
    color:#fe4070;
    font-weight: 500;
}
.price span:nth-of-type(1){
    font-size: 12px;
    background: #fe4070;
    color:#fff;
    border-radius: 4px;
}
.price span:nth-of-type(2){
    font-size: 14px;
    color:#666;
    border-radius: 4px;
    margin-left: 4px
}
.price h5{
    float: right;
    font-size: 14px;
    color:#666;
    line-height: 30px;
}
.price h4{

    font-size: 14px;
    color:#666;
    line-height: 40px;
}
.time{
    background: #fff;
    height: 30px;
    padding: 0 12px;
    margin-bottom: 10px;
}
.time p{
    float: left;
    color: #333;
    font-size: 14px;
}
.time h4{
    float: right;
    color: #333;
    font-size: 13px;
    font-weight: 500;
}
.norms{
    height: 0.8rem;
    font-size: 15px;
    padding: 0.12rem;
    background: #fff;
    margin-bottom: 0.5rem;
}
.norms span{
    line-height: 18px;
    margin-left: 2px;
    color: #fe4070;
   
}
.norms h4{
    margin-left: 2px;
    float: right;
}
.explain{
    background: #fff;
}
</style>

