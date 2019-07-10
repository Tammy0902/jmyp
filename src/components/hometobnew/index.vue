<template>
    <div>
    <div class="goods-con">
        <div class="con">
            <router-link class="title-a  " to="/home/hometobTrailer" tag="div">
                今日十点上新
            </router-link>
            <router-link class="title-b " to="/home/hometobnew" tag="div">
                明日十点预告
            </router-link>
        </div>
    </div>
        <div class="goods">
                <img src="" alt="">
                <div class="goods-right">
                    <h5>
                        号发射的九发生纠纷拉客司佛挡杀佛萨芬的说法凡是打发法撒旦
                    </h5>
                    <p><span class="price-one">$122</span><span class="prive-two">$122</span></p>
                    <p>评论</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
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
.con .router-link-active{
    color:pink;
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
    border-sizing:border-box;
 }
.goods .goods-right{
    padding:.2rem .2rem 0 .2rem;
    display:flex;
    flex-direction: column;
    width:65%;
}
.goods .goods-right p:nth-child(2){
    margin-top: 0.38rem ;
   margin-bottom:0.1rem;
}
.goods .goods-right p:nth-child(2) span:nth-child(1){
    font-size:.35rem;
   color:red;
}
.goods .goods-right p:nth-child(2) span:nth-child(2){
    font-size:.10rem;
}
</style>
