<template>
  <div id="content">
   <div class="goods-msg">
        <div class="goodsList">
            <div class="store">
                <input type="checkbox">
                <div>聚美发货</div>
            </div>
            <div class="goodsIntro">
                <input type="checkbox">
                <img src="images/zh-img1.png">
                <div class="goodsMsg">
                    <p class="title">片仔癀珍珠臻白补水保湿淡化斑点爽肤水</p>
                    <div class="number-show">
                        <span>120ml 120</span>
                        <span>x1</span>
                    </div>
                    <div class="price-editor">
                        <span class="price">￥10.00</span>
                        <span class="editor" @click="handleEditorPrice()">编辑</span>
                    </div>
                </div>
                <!-- 点击隐藏 -->
                <div class="goodsMsg" style="display:none">
                    <p class="title">片仔癀珍珠臻白补水保湿淡化斑点爽肤水</p>
                    <div class="number-editor">
                        <div>
                            <span class="numReduce">-</span>
                            <i class="num">100</i>
                            <span class="numAdd">+</span>
                        </div>
                    </div>
                    <div class="price-editor">
                        <span class="price">￥10.00</span>
                        <div class="goodsModify">
                            <i class="goodsDelte">删除</i>
                            <span>|</span>
                            <span class="finish">完成</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 满150元享受商家包邮 -->
            <div class="postage">
                <!-- 不满150显示，满150隐藏 -->
                <div class="pay-postage"  >
                    <i class="iconfont icon-money"></i>
                    <b>还差<span>140</span>元享受商家包邮</b>
                </div>
                <!-- 满150显示，不满150隐藏 -->
                <div class="no-postage" style="display:none">
                    <i class="iconfont icon-money"></i>
                    <b>已享受商家满150元包邮</b>
                </div>
            </div>
        </div>
        <div class="summary">
            <div class="total">
                <input type="checkbox">
                <div>全选</div>
                <p>合计</p>
                <span>￥10</span>
            </div>
            <div class="clearing">去结算(<span>1</span></span>)</div>
        </div>
   </div>
  </div>
</template>
<script>
export default {
  name: "shopcartBody",
  data() {
    return {
      img: "",
      extra: "您的购物车中没有商品，请先去挑选心爱的商品吧！",
      go: "去逛逛",
      path:"/home"
    };
  }
};
</script>

<style>
#content{
  width: 100%;
  height: 100%;
    }
.goods-msg {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        padding:.82rem 0 1.96rem;
        box-sizing: border-box;
        font-size:.24rem;
        overflow-x: hidden;
        overflow-y: auto; 
        background:#f5f5f5;      
    }
.goods-msg>.goodsList{
    width: 100%;
    min-height: 3.5rem;
    font-size: .24rem;
    box-sizing: border-box;
    background:#fff;
    margin-top:.2rem;
    }
.goodsList .store{
    height:.76rem;
    line-height:.76rem;
    padding:0 .2rem;
    border-bottom:1px solid #eee;
    display: flex;
    align-items: center;        
    }
.store input{
    width:.4rem;
    height:.4rem;
    }
.goods-msg>.goodsList .goodsIntro{
    height:2.2rem;
    font-size: .24rem;
    display:flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;
    padding: 0 .2rem;
    box-sizing: border-box;
    line-height:.32rem;
    }   
.goodsIntro input{
    width:.4rem;
    height:.4rem;
    } 
.goods-msg>.goodsList img{
    width:1.6rem;
    height:1.6rem;
    }
.goodsMsg{
    width:4.66rem;            
    }
.goodsMsg .title{
    width:4.66rem;
    min-height:.5rem;
    line-height:.5rem;
    overflow: hidden;
    }
.goodsMsg .number-show{
    height:.6rem;
    line-height:.6rem;
    width:100%;
    color:#999;
    display: flex;
    justify-content: space-between;
    }
.goodsMsg .number-editor{
    height:.5rem;
    line-height:.5rem;
    }   
.goodsMsg .number-editor span{
    display: inline-block;
    width:.3rem;
    height:.3rem;
    border: 1px solid #ccc;
    border-radius: 50%;
    text-align: center;
    line-height: .3rem;
    font-size: .28rem;
    color:#333;
    }
.goodsMsg .number-editor i{
    display: inline-block;
    width:.6rem;
    text-align: center;
    color:#333;
    }
.goodsIntro .price-editor{
    height:.6rem;
    line-height: .6rem;
    color:#333;
    display: flex;
    justify-content: space-between;
    }
.goodsIntro .price-editor .price{
    font-size:.32rem;
    color:#fe4070;
    }
.goodsList .postage{
    padding:0 .2rem;
    height:.73rem;
    line-height:.73rem;
    color:#333;
    font-size:.28rem;
    box-sizing: border-box;
}
.goodsList .postage .iconfont{
    font-size:.28rem;
    }
.no-postage{
    color:#fe4070;
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
       bottom:.96rem;
   }
.total{
       width:2.4rem;
       display:flex;
       justify-content: space-between;
       align-items: center;
   }
.total div{
        font-size:.28rem;        
    }
.total input{
        width:.4rem;
        height:.4rem;
    }
   
.total p{
        color:#999
   }
.total span{
    font-size:.28rem;
    color:#fe4070;
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
