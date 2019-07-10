<template>
  <div id="content">
    <form>
      <div class="sitehurdle" v-for="(item,index) in site" :key="index">
        <label>{{item.title}}</label>
        <input type="text" :placeholder="item.value"/>
      </div>
      <!-- <div class="sitehurdle">
        <label>手机号</label>
        <input type="text" placeholder="请输入收货人的手机号码" />
      </div>
      <div class="sitehurdle">
        <label>省市区</label>
        <input type="text" />
      </div>
      <div class="sitehurdle">
        <label>详细地址</label>
        <input type="text" placeholder="请输入收货人的详细地址" />
        <i class="iconfont icon-close"></i>
      </div> -->
    </form>
    <div class="site-modify">
      <div class="site-save">{{save}}</div>
      <!-- 新增地址时隐藏，修改时显示 -->
      <div class="site-delete" style="display:none">{{del}}</div>
    </div>
  </div>
</template>

<script scoped>
export default {
    data(){
        return{
            site:[
                {title:"收货人",value:"请输入收货人姓名"},
                {title:"手机号",value:"请输入收货人的手机号码"},
                {title:"省市区",value:"广东省-深圳市-宝安区"},
                {title:"详细地址",value:"请输入收货人的详细地址"},
            ],
            save:"保存地址",
            del:"删除地址"
        }
    }
};
</script>

<style>
#content{
    padding-top:.82rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
}

form{    
    width:100%;
    padding:0 .22rem;
    box-sizing:border-box;
    margin-bottom:.4rem;
}

form .sitehurdle{
    border-bottom:1px solid #eee;
    height:.88rem;
    line-height:.88rem;
    font-size:.28rem;
    display: flex;
    align-items: center;
    color:#000;
    position:relative;
} 
form .sitehurdle>label{
    display:block;
    width:1.8rem;
    color:#999;
}
form .sitehurdle input{
    border:0;
    width:5.2rem;
    height:.7rem;
    line-height:.7rem;
    font-size:.28rem;
}
.icon-close{
    font-size:.32rem;
    color:#ccc;
    position: absolute;
    right:0;
    top:.03rem;
}

.site-modify .site-save{
    height:.72rem;
    width:4.06rem;
    background:#fe4070;
    border-radius:.4rem;
    color:#fff;
    line-height:.72rem;
    text-align: center;
    border:1px solid #ccc;
    margin-bottom:.2rem;
    font-size: .32rem;
}
.site-modify .site-delete{
    height:.72rem;
    width:4.06rem;
    background:#fff;
    border-radius:.4rem;
    color:#333;
    line-height:.72rem;
    text-align: center;
    border:1px solid #ccc;
    font-size: .32rem;
}
</style>
