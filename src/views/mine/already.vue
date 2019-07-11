<template>
    <div>
        <!-- <Heade title="我的聚美" icon="<"/> -->
        <h2>mine</h2>
        <div id="wrapper">
            <!-- 已登录 -->
                <div class="user">
                <img src="http://p0.jmstatic.com/jmstore/user/icon/chook_200_200.png?1562373892" alt="" class="photo">
                <div class="user_bg">

                    <div id="headerr">
    
                        <p @click="handleBack()"><i class="iconfont goBack">&#xe605;</i></p>
                        <h3 class="shoppingCart">我的聚美</h3>
                        <router-link class="iconfont goHome" to="/home" tag="i">&#xe661;</router-link>
                    </div>
                    <div class="user_info">
                        <span class="name">{{name}}</span>
                        <span class="grade">普通会员</span>
                    </div>
                </div>
                <div class="icons">
                    <a class="wishlist" href="/h/wishdeal/onsale">
                        <div class="icon">
                            <img src="./img/refund.png" alt="">
                        </div>
                        <span>心愿单</span>
                    </a>
                    <a class="onsale" href="/m/subscribe/list">
                        <div class="icon">
                            <img src="./img/myfund.png" alt="">
                        </div>
                        <span>开售提醒</span>
                    </a>
                    <a class="fav" href="/m/favoritebrand/list">
                        <div class="icon">
                            <img src="./img//rmaservice.png" alt="">
                        </div>
                        <span>收藏</span>
                    </a>
                </div>
            </div>
            
            <div class="order block">
                <div class="block-title">
                    <i class="block-title-icon myorder iconfont">&#xe600;</i>
                    我的订单
                    <a href="/m/order/list" class="block-title-nav">
                        <span>查看我的全部订单</span>
                        <i class="arrow-right iconfont">&#xe658;</i>
                    </a>
                </div>
                <div class="block-content">
                    <a class="block-item" href="/m/order/list?status=1">
                        <i class="unpaid iconfont icons-dizhi">&#xe653;</i>
                        <span>待付款</span>
                    </a>
                    <a class="block-item" href="/m/order/list?status=2">
                        <i class="unconfirm iconfont">&#xe653;</i>
                        <span>待收货</span>
                    </a>
                    <a class="block-item" href="/m/order/list?status=3">
                        <i class="uncomment iconfont">&#xe653;</i>
                        <span>待评价</span>
                    </a>
                    <a class="block-item" href="/m/RMA/list">
                        <i class="refund iconfont">&#xe653;</i>
                        <span>退货/退款</span>
                    </a>
                </div>
            </div>
            <div class="fund block">
                <div class="block-title">
                    <i class="block-title-icon myfund iconfont">&#xe653;</i>
                    我的资产
                </div>
                <div class="block-content">
                        <a class="block-item" href="/h/promocard/list">
                        <div class="value"></div>
                        <span>现金券</span>
                    </a>
                        <a class="block-item" href="/h/red_envelope/list">
                        <div class="value"></div>
                        <span>红包</span>
                    </a>
                    <a class="block-item" href="/m/account/balance">
                        <div class="value"></div>
                        <span>聚美余额</span>
                    </a>
                    <a class="block-item" href="/m/giftcard/list">
                        <div class="value"></div>
                        <span>礼品卡</span>
                    </a>
                </div>
            </div>
            <div class="block list">
                <a class="list-item" href="/m/RMA/service">
                    <i class="list-item-icon rmaservice iconfont">&#xe653;</i>
                    <span>售后服务</span>
                    <i class="arrow-right"></i>
                </a>
                <a class="list-item" href="/m/feedback/show_add">
                    <i class="list-item-icon feedback iconfont">&#xe653;</i>
                    <span>意见反馈</span>
                    <i class="arrow-right"></i>
                </a>
                <a class="list-item" href="/h/address/index">
                    <i class="list-item-icon address iconfont">&#xe653;</i>
                    <span>收货地址</span>
                    <i class="arrow-right"></i>
                </a>
                <a class="list-item logout" href="https://passport.jumei.com/i/mobile/logout?redirect=http%3A%2F%2Fi.jumei.com%2Fm%2Faccount%2Fmy">
                    <i class="list-item-icon logout iconfont">&#xe653;</i>
                    <span>退出登录</span>
                    <i class="arrow-right"></i>
                </a>
                <a class="list-item" href="tel: 400-123-8888">
                    <i class="list-item-icon tel iconfont">&#xe653;</i>
                    <span>400-123-8888</span>
                    <i class="arrow-right"></i>
                </a>
            </div>
            <div class="hint">
                    客服热线400-123-8888 (8:00-22:00)</br>拨打前请记录您的UID  599048968    </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"mine",
    methods:{
        handleBack(){
            this.$router.back();
        }
    },
    data(){
        return{
            name:"",

        }
    },
    created(){
        let data =  JSON.parse(sessionStorage.getItem('item')) ;
        this.name=data.username;
        console.log(data.pwd,222);
    }
}
</script>


 <style>
   
#headerr {
  width: 100%;
  height: 0.82rem;
  font-size: 0.32rem;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.26rem;
  box-sizing: border-box;
  display: flex;
  top: 0;
  left: 0;
  color: #fff;
}

#headerr > .iconfont {
  font-size: 0.56rem;
 }
    .icon {
        text-align: center;
    }
    .icon img{
        width: 40%;
        margin: 0 auto;
    }
    #wrapper {
        position: absolute;
        top: 0;
        background: #f5f5f5;
        width: 100%;
        height: 100%;
        font-size: 0.32rem;
    }

  
    .user {
    position: relative;
    height: 3.4rem;
    background: #fff;
}
.user .photo {
    width: 1.5rem;
    height: 1.5rem;
    display: block;
    border-radius: 50%;
    position: absolute;
    left: 0.64rem;
    top: 1.44rem;
    z-index: 10;
}
.user_bg {
    position: absolute;
    width: 100%;
    height: 2.16rem;
    background-image: -webkit-linear-gradient(294deg,#fd465f 0,#fc5e9f 100%);
    background-image: linear-gradient(-204deg,#fd465f 0,#fc5e9f 100%);
}
.user_info {
    font-size: 0.26rem;
    color: #fff;
    position: absolute;
    left: 2.24rem;
    bottom: 4px;
}
.user_info .name {
    font-size: 0.28rem;
    font-family: sans-serif;
    line-height: 0.22rem;
}

.user_info .name {
    display: block;
    font-size: 13px;
    letter-spacing: .65px;
    line-height: 15px;
}
.user_info .grade {
    background: rgba(255,255,255,.2);
    border-radius: 100px;
    letter-spacing: .65px;
    line-height: 18px;
    padding: 3px 5px;
}
.user .icons {
    width: 4.6rem;
    height: 1rem;
    position: absolute;
    bottom: 2px;
    right: 0;
    font-size: 12px;
    text-align: center;
}
.user .fav, .user .onsale, .user .wishlist {
    display: block;
    width: 76px;
    height: 50px;
    float: left;
}
    .list-item {
    display: block;
    text-decoration: none;
    color: #333;
    padding-left: 8px;
    border-bottom: 1px solid #eaeaea;
    height:0.76rem;
    line-height: 34px;
    font-size: 0.28rem;
}
.block {
    background: #fff;
    margin-top: 12px;
}
.block-title {
    padding-left: 8px;
    border-bottom: 1px solid #eaeaea;
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 15px;
}
.block-title-icon{
    font-size: 0.4rem;
}
.block-content, .operation {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-around;
}
.block-item {
    width: 25%;
    text-align: center;
    display: flex;
    margin: 0;
    padding: 10px 0;
    text-decoration: none;
    font-size: 0.3rem;
    color: #666;
    flex-direction: column;
    
}
.fund .value {
    font-size: 16px;
    font-weight: 700;
    margin: 5px 0;
    color: #000;
}
.hint {
    color: #999;
    font-size: 11px;
    margin: 15px;
    line-height: 15px;
    min-height: 1.6rem;
}
.block-title-nav {
    float: right;
    text-decoration: none;
    color: #999;
    font-size: 12px;
    margin-right: 5px;
}
    
</style>
