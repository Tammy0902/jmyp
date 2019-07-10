<template>
    <div class="deta">
        <div class="_img">
            <!-- <img :src="groupDetail.shop_info.logo_url[640]" alt=""> -->
            <img :src="groupDetail.share_info?groupDetail.share_info[0].image_url_set.url[640]:''" alt="">
        </div>
        <div class="price">
            <strong>{{groupDetail.group_jumei_price?groupDetail.group_jumei_price:''}}</strong>
            <span>包邮</span>
            <h5>{{groupDetail.buyer_number_text}}</h5>
            <span>{{groupDetail.group_single_price}}</span>
            <h4>{{groupDetail.group_market_price}}</h4>
        </div>
        <div class="time">
            <p>还剩2天 13:57:17</p>
            <h4>逾期未成团自动退款</h4>
        </div>
        <div class="norms">
            <h4><span>[2人团]</span>{{groupDetail.share_info?groupDetail.share_info[1].text:""}}</h4>
        </div>
        <div class="explain">
            <h4>拼团玩法</h4>
        </div>
        <div class="detailFoot_wrap">
            <div class="detailFoot">
                <div class="goHome"><h3 @click="goHome()">首页</h3></div>
                <div class="alonebuy">
                    <div class="lefttext">
                        {{groupDetail.group_jumei_price}}
                        <br/>
                        单独购买
                    </div>
                </div>
                <div class="groupbuy">
                    <div class="btn-solid">
                    {{groupDetail.group_jumei_price}}
                    <br/>
                        包邮开团
                    </div>
                </div>
            </div>
        </div>
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
    
     async created(){
         let size=640;
         console.log(this.$route.params.id)
        let data=await getgroupDetailData(this.$route.params.id)
        console.log(data,"getgroupDetailData")
        this.groupDetail=data.data
        this.entTime=data.data.recommend_data[0].end_time
        console.log(this.entTime)
    },
    mounted(){},
    methods:{
        goTime(entTime){
            let data=new Date();
            console.log(data,data.getDay(this.entTime),
            data.getHours(this.entTime),data.getMinutes(this.entTime)
            ,data.getTime(),this.entTime);
        },
        goHome(){
            this.$router.replace('/home');
        }
        
    }
   
}
</script>

<style>
.detailFoot_wrap{
    height: 49px;
    width: 100%;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 8;
    border-top: .0325rem solid #eee;
    box-sizing: border-box;
}
.detailFoot {
    width: 100%;
    height: 100%;
    background: #fff;
    padding: 0 .2375rem;
    display: flex;
    align-items: center;
    box-sizing: border-box;
}
.goHome h3{
    width: 35px;
    height: 35px;
    line-height: 35px;
    border: 1px solid #e0e0e0;
    border-radius: 50%;
    text-align: center;
    position: relative;
    /* vertical-align: middle; */
    font-size: 14px;
}
.lefttext {
    display: inline-block;
    text-align: center;
}

.detailFoot div {
    font-size: 14px;
}
.alonebuy{
    width: 100%;
    text-align: center;
    display: table-cell;
    vertical-align: middle;
    color: #666;
}
.groupbuy {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    font-size: 14px;
    padding: 3px 0;
    
    line-height: 14px;
}
.btn-solid {
    width: 152px;
    border-radius: 1.25rem;
    text-align: center;
    vertical-align: middle;
    font-size: 12px;
    background: #fe4070;
    border: .0625rem solid #fe4070;
    color: #fff;
}


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
    text-decoration: line-through;
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
    /* margin-left: 2px; */
    color: #fe4070;
   
}
.norms h4{
    margin-left: 2px;
    float: right;
}
.explain{
    background: #fff;
    height: 5rem;
    font-size: 0.3rem;
}
</style>

