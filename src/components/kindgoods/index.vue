<template>
    <div class="wrap">
        <HeaderCom/>
         <div class="kind-wrap">
                <Search/>
                <Nav/>
            <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img src="" alt="">
                        </div>
                        <div class="swiper-slide">
                            <img src="" alt="">
                        </div>
                        <div class="swiper-slide">
                            <img src="" alt="">
                        </div>
                    </div>
            </div>
            <div class="active">
                        <i class="iconfont">&#xe603;</i>
                        <span>今日特惠</span>
            </div>
            <div class="ad">
                    <img src="" alt="">
                    <div class="right">
                        <div class="title">
                            <p>
                                <span>5折</span>l
                                /日本直采 报税区发货
                            </p>
                            <p>
                                花王(Merries)纸尿裤M68片*4包
                            </p>
                        </div>
                        <div class="price">
                            <p>
                                <span>今日特惠价:￥339</span><span>￥680</span>
                            </p>
                            <p>
                                <span>包邮</span>
                                <span>包税</span>
                            </p>
                        </div>
                    </div>
             </div>

             <div class="active">
                    <i class="iconfont">&#xe603;</i>
                    <span>全球热销品牌</span>
                </div>
             <div class="recommend">
                <div class="recommend-list">
                        <img src="" alt="">
                        <img src="" alt="">
                        <img src="" alt="">
                        <img src="" alt="">
                </div>
            </div>
            <!-- <div class="active">
                    <i class="iconfont">&#xe603;</i>
                    <span>疯抢商场早十点半</span>
            </div>
            <div class="snap">
                    <img src="" alt="">
                    <div class="snap-r">广告</div>
            </div> -->
            <div class="active">
                    <i class="iconfont">&#xe603;</i>
                    <span>疯抢商场早十点半</span>
            </div>
            <div class="snap">
                <div class="snap-con">
                    <a href="javascript:;"></a>
                    <img src="http://mp5.jmstatic.com//jmstore/image/000/006/6845_std/5d1ad8b8734b6_2048_1024.jpg?1562208329&imageView2/2/w/640/q/90" alt=""/>
                    <div class="t">9.9包邮</div>
                    <div class="snap-b">
                        <div class="snap-b-l">
                            <p>黄色小鸭品牌专场</p>
                            <p>
                                <span> 仅剩</span>
                                <span> 03天</span>
                                <span> 11时</span>
                                <span> 41分</span>
                            </p>
                        </div>
                        <div class="snap-b-r">
                            <img src="" alt="">
                        </div> 
                    </div>
                </div>
        </div>
    </div>
    </div>
</template>

<script>

export default {
    components:{
       
    }
   
}
</script>

<style scoped>
.kind-wrap{
    padding:1rem 0 0 0;
}
.wrap{
    padding-bottom:0.96rem;
    width:100%;
}
.swiper-container{
    width:100%;
    height:3rem;
    background:red;
}

.swiper-container > .swiper-slide {
    width: 100%;
    height: 100%;
}
img {
    width: 100%;
    height: 4rem;
}
.swiper-pagination{
    position: absolute;
    right: 0.1rem;
    bottom: 0.1rem;
}
.swiper-pagination>span{
    width: 0.2rem;
    height: 0.2rem;
}


/* ---------------------ad */

.ad{
    width:100%;
    height:3.4rem;
    display:flex;
    padding:0.2rem;
    margin-bottom:.2rem;
    box-sizing: border-box;
}
.ad img{
    width:2.8rem;
    height:2.8rem;
    background:#cccccc;
}
.ad .right{
    width:70%;
    padding:.3rem;
    box-sizing: border-box;
}

.ad .right p:nth-child(1){

}
.ad .right .title p:nth-child(1) span:nth-child(1){
    color:#eb4269;
    font-size:0.3rem;
}
.ad .right .price p:nth-child(1) span:nth-child(1){
    color:#eb4269;
    font-size:0.3rem;
}
.ad .right .price p:nth-child(2){
    margin-top:.1rem;
}
.ad .right .price p:nth-child(2) span{
    display: inline-block;
    text-align:center;
    width:1rem;
    height:.4rem;
    border:1px solid #fe3e71 ;
    line-height:.4rem;
    border-radius: .2rem;
    color:#eb4269;
}
.ad>.right>.title{
    margin-bottom:.7rem;
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

.recommend{
    width:100%;
    margin-bottom:.3rem;
    position: relative;
}
.recommend .recommend-list{
    display:flex;
    flex-wrap: wrap;
}
.recommend .recommend-list img{
    width:50%;
    height:3.70rem;
    background:#cccccc;
}

/* ------------------------ */

.snap{
    width:100%;
    margin-bottom: .3rem;
    position:relative;
  
}
.snap-con{
    height:5rem;
    width:100%;
    position:relative;
}
.snap-con a{
    display:inline-block;
    height:5rem;
    width:100%;
    position:absolute;
    box-sizing :border-box;
    left:0;
    top:0;
}
.snap .t{
    position: absolute;
    top:3rem;
    background:black;
    color:white;
    font-size:.24rem;
}
.snap .snap-con img{
    height:3.6rem;
    width:100%;
    background:#cccccc;
}
.snap .snap-con .snap-b{
    width:100%;
    display:flex;
    height:1.4rem;
    justify-content: space-between;
    padding:.2rem;
    box-sizing:border-box;
}
.snap .snap-con .snap-b .snap-b-l {
    line-height:.4rem;
}
.snap .snap-con .snap-b .snap-b-l p:nth-child(1){
   font-size:.3rem;
}
.snap .snap-con .snap-b .snap-b-r{
   width:1.5rem;
 }
 .snap .snap-con .snap-b .snap-b-r img{
   height:1.4rem;
   background:#cccccc;
  }

  .snap .snap-r{
      position:absolute;
    right:0;
      top:3rem;
      background:black;
    color:white;
    font-size:.24rem;
  }
</style>
