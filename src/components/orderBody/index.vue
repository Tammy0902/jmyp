<template>
  <div class="orderBody">    
      <div class="shop">
        <i class="iconfont icon-store"></i>
        <div>聚美发货</div>
      </div>
      <div class="order-list">
        <img src="images/zh-img1.png" />
        <div class="goods-detail">
          <div class="goods-titel">
            <p>片仔癀珍珠臻白补水保湿淡化斑点爽肤水</p>
            <span class="price">￥10</span>
          </div>
          <div class="goods-norms">
            <span>120ml 120</span>
            <span>x1</span>
          </div>
        </div>
      </div>
      <div class="postpostage">
        <div class="freight">
          <div>运费</div>
          <p>
            快递:￥
            <span>10</span>
          </p>
        </div>
        <div class="free-post">满150元减免，已减免￥10</div>
      </div>
      <div class="deduction-coupon">
        <div>
          <strong>现金券</strong>
          <span>暂无可用</span>
        </div>
        <div>
          <strong>使用现金券</strong>
          <i class="iconfont icon-right"></i>
        </div>
      </div>
      <div class="deduction-coupon">
        <div>
          <strong>红包</strong>
          <span>暂无可用</span>
        </div>
        <div>
          <strong>使用红包</strong>
          <i class="iconfont icon-right"></i>
        </div>
      </div>
      <div class="price-sum">
        <div>小计</div>
        <span>￥108</span>
      </div>
    
  </div>
</template>

<script>
export default {
  name: "orderBody"
};
</script>

<style scoped>

.shop{
    width:100%;
    height:.72rem;
    color:#999;
    background:#fff;
    font-size: .28rem;
    margin-top:.14rem;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding:0 0.2rem;
}
.shop div{
    margin-left:.2rem;
}
.order-list{
    width:100%;
    height:1.68rem;
    padding:0 .2rem;
    box-sizing: border-box;
    background:#fff;
    border-top:1px solid #eee;
    display: flex;
    align-items: center;
    font-size:.28rem;
}
.order-list img{
    width:1.24rem;
    height:1.16rem;
}
.goods-detail{
    width:90%;
    margin-left:.2rem;

}
.goods-titel{
    width:100%;
    display: flex;
    justify-content: space-between;
}
.goods-titel p{
    width:85%;
    overflow:hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.goods-norms{
    width:100%;
    display: flex;
    justify-content: space-between;
    color:#999;
    margin-top:.1rem;
}
.postpostage{
    width:100%;
    height:1.36rem;
    box-sizing: border-box;    
    border-top:1px solid #eee;
    background: #fff;
    font-size: .28rem;
    padding:0 .2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.freight{
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height:.3rem;
}
.postpostage .free-post{
    width:100%;
    text-align: right;
    color:#999;
}
.deduction-coupon{
    width:100%;
    padding:0 .2rem;
    height:.88rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background:#fff;
    border-top:1px solid #eee;
    font-size: .28rem;
    box-sizing: border-box;
}
.deduction-coupon span{
    width:1.2rem;
    height:.34rem;
    background:#eee;
    border-radius: .4rem;
    font-size:.24rem;
    color:#999;
    display: inline-block;
    text-align:center;
}
.price-sum{
    width:100%;
    padding:0 .2rem;
    height:.88rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background:#fff;
    border-top:1px solid #eee;
    font-size: .28rem;
    box-sizing: border-box;
}
.price-sum span{
    font-size:.36rem;
    color: #fe4070;
}

.summary{
    width:100%;
    height:1rem;
    background:#fff;
    display: flex;
    justify-content:space-between;
    align-items: center;
    padding:0 .2rem;
    box-sizing: border-box;
    position: fixed;
    left:0;
    bottom:0;
    border-top:1px solid #eee;
}
.total{
    width:2.4rem;
    font-size:.28rem;
}
.total span{
 font-size:.36rem;
 color:#fe4070;
}
.total .num-total{
    color:#999;
}
.clearing{
    width:2.5rem;
    height:.72rem;
    background: #fe4070;
    color:#fff;
    font-size: .36rem;
    border-radius: .4rem;
    line-height:.72rem;
    text-align: center;
}
</style>
