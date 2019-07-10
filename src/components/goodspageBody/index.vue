<template>
  <div class="goodspageBody">
    <div class="goodsPice">
      <img src />
    </div>
    <div class="goods_info">
      <div class="price_info">
        <div>
          <span class="price_now">￥65</span>
          <span class="price_origin">￥399</span>
        </div>
        <span class="buy_num">
          <strong>323</strong>人已购买
        </span>
      </div>
      <div class="goods_Title">JMsolution 蜂蜜面膜 10片/盒 网红面膜 莹润补水</div>
      <div class="shipping_address">
        <span>地址</span>
        <p>至 深圳市福田区车公庙</p>
      </div>
      <div class="additional">
        <span>运费</span>
        <p>商家满150元包邮</p>
      </div>
      <div class="explain">
        <span>说明</span>
        <div>
          <p>7天拆封无条件退货</p>
          <p>视频红包可抵商品价10% 支持分期</p>
        </div>
      </div>
    </div>
    <div class="goods_params">
      <div>商品参数</div>
      <ul>
        <li v-for="(item,index) in info" :key="index">
          <span>{{item.title}}</span>
          <p>{{item.msg}}</p>
        </li>
      </ul>
    </div>
    <div class="user_evaluate">
      <div class="evaluate_tit">用户评价</div>
      <ul>
          <li>              
              <div>
                  <div>
                    <img src="../../../static/images/zh-img1.png">
                  </div>
                  <span>皮卡丘去上班</span>                  
              </div>
              <p>商品非常好</p>
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "goodspageBody",
  data() {
    return {
      info: [
        { title: "商品名称", msg: "BEPERFECT 小巨蛋热喷蒸脸器" },
        { title: "品牌", msg: "BEPERFECT 小巨蛋热喷蒸脸器" },
        { title: "出雾时间", msg: "BEPERFECT 小巨蛋热喷蒸脸器" },
        { title: "功效", msg: "BEPERFECT 小巨蛋热喷蒸脸器" },
        { title: "功率", msg: "BEPERFECT 小巨蛋热喷蒸脸器" },
        { title: "适用对象", msg: "BEPERFECT 小巨蛋热喷蒸脸器" },
        { title: "喷雾类型", msg: "BEPERFECT 小巨蛋热喷蒸脸器" },
        { title: "颜色分类", msg: "BEPERFECT 小巨蛋热喷蒸脸器" }
      ]
    };
  }
};
</script>

<style scoped>
.goodspageBody {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
}
.goodsPice {
  width: 100%;
  height: 7.4rem;
  box-sizing: border-box;
  background: #fff;
}
.goodsPice img {
  width: 100%;
  height: 100%;
}
.goods_info {
  width: 100%;
  padding: 0 0.2rem;
  box-sizing: border-box;
  font-size: 0.28rem;
  background: #fff;
  margin-bottom: 0.2rem;
}
.price_info {
  height: 1.4rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.price_info .price_now {
  font-size: 0.5rem;
  color: #ff4477;
  margin-right: 0.2rem;
}
.price_origin {
  text-decoration: line-through;
}
.goods_Title {
  width: 100%;
  min-height: 0.6rem;
}
.shipping_address {
  width: 100%;
  height: 0.6rem;
  line-height: 0.6rem;
  border-bottom: 1px solid #eee;
  display: flex;
}
.shipping_address span {
  margin-right: 0.4rem;
  color: #999;
}

.additional {
  width: 100%;
  height: 0.6rem;
  line-height: 0.6rem;
  border-bottom: 1px solid #eee;
  display: flex;
}
.additional span {
  margin-right: 0.4rem;
  color: #999;
}

.explain {
  width: 100%;
  height: 0.9rem;
  line-height: 0.45rem;
  display: flex;
}
.explain span {
  margin-right: 0.4rem;
  color: #999;
}
.goods_params {
  width: 100%;
  min-height: 3rem;
  padding: 0 0.2rem; 
  background: #fff;
}
.goods_params div{
    width:95%;
    height:.8rem;
    line-height: .8rem;
    font-size: .32rem;
    text-align: center;
    border-bottom:1px solid #eee;
}
.goods_params ul{
    width: 100%;
    height:100%;
}
.goods_params>ul>li{
  width: 100%;
  height: .6rem;
  line-height: .6rem;
  display: flex;
    font-size: .28rem;
}
.goods_params>ul>li>span {
  color: #999;
  width:1.6rem;
}
.user_evaluate{
    width:100%;
    box-sizing: border-box;
    margin-top:.2rem;
    
}
.user_evaluate .evaluate_tit{
    width:100%;
    height:.8rem;
    line-height: .8rem;
    font-size: .32rem;
    text-align: center;
    background:#fff;
    border-bottom:1px solid #eee;
}
.user_evaluate ul{
    width:100%;
    min-height:.6rem;
    padding:0 .2rem;
    box-sizing: border-box;
    background:#fff;

}
.user_evaluate>ul>li{
    width:100%;
    min-height:1rem;
    border-bottom:1px solid #eee;
}
.user_evaluate>ul>li>div{
    width:100%;
    height:1rem;
    line-height: 1rem; 
    display: flex;
    align-items: center 
}
.user_evaluate>ul>li>div>div{
    width:.8rem;
    height:.8rem;
    border-radius: 50%;
    overflow: hidden;
    margin-right:.2rem;
}
.user_evaluate>ul>li>div>div>img{
    width:.8rem;
    height:.8rem;    
}
.user_evaluate>ul>li>p{
    width:100%;
    font-size: .28rem;
    color:#999;
}

</style>
