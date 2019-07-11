<template>
<div class="signin">
  
  <heade icon="<" title="注册" />

  <form action autocomplete="off">
    <div class="other-login-outer">
      <div class="other-login">
        <span class="other-title">使用手机注册</span>
      </div>
    </div>
    <input type="hidden" id="focus" name="focus" />
    <div class="jm_row icon_phone">
      <div class="jm_col">
        <input type="text" class="register_input"  name="mobile"
          placeholder="请输入11位手机号" alertname="请输入手机号码"
          maxlength="11"  id="account"  v-model="tel" />
      </div>
    </div>
    <div class="jm_row">
      <div class="jm_col">
        <input v-model="username"
          type="tel"
          class="register_input"
          placeholder="请输入短信验证码"
          id="mobileVerify"
          alertname="请输入短信验证码"
          name="mobileVerify"
        />
      </div>
      <div class="jm_col jm_col_90px">
        <a class="register_yzm" href="javascript:;">验证</a>
      </div>
    </div>
    <div id="mobile_verify_code" style="display: none;">
      <div class="jm_row">
        <div class="jm_col">
          <input
            type="text"
            maxlength="4"
            name="hash_code"
            class="register_input"
            id="yanzheng_code"
            placeholder="请按右图输入"
            alertname="请输入验证码"
          />
        </div>
        <div class="jm_col jm_col_90px">
          <img
            id="img_dynamic_hash_code"
            src="/i/account/hash_code?from=signup&1562816471"
            class="check_code"
            onclick="change_code()"
          />
        </div>
      </div>
    </div>
    <div class="jm_row">
      <div class="jm_col">
        <input type="text" style="display: none;" />
        <input v-model="pwd"
          type="password"
          class="register_input"
          name="password"
          placeholder="6-16位登录密码"
          alertname="请设置密码"
          maxlength="16"
          autocomplete="new-password"
        />
      </div>
    </div>
    <input type="button" value="注册" class="register_button" id="tele_register" @click="submitt()"/>
  </form>
  <div class="register_agreement jm_center">
    点击注册，表示同意
    <a href="http://i.jumei.com/m/account/protocol">《聚美优品用户协议》</a>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import request from 'api/request'
export default {
    name:"signin",
    data(){
        return{
            tel:"123",
            pwd:"",
            username:""
        }
    },
    methods:{
        submitt(){
            let obj={
                  tel:this.tel,
                  pwd:this.pwd,
                  username:this.username
              }
            console.log(this.tel,"1233")
            
            var TEL_REGEXP = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
            if(!TEL_REGEXP.test(obj.tel)){
                console.log("号码输入有误")
            }else if(!obj.pwd){
                console.log("密码不能为空")
            }else{
              // axios.post("http://localhost:3000/abc",obj);
              //  let data=require('static/json/people.json');
              
              this.$store.dispatch('mine/setAccount',obj);
              console.log("注册成功");
              setTimeout(this.$router.replace("/login"),1000)
              
            }
        },
        
    //      async def save_report_information(report,report_information):

    //         let data = await request(people.json)
    //         if data.tel:
    //             result = filter(lambda x: x[id'] == report_information[id'], data.tel)
    //             isExists = list(result)
    //             if len(isExists) > 0:
  
    
        
    },
    mounted(){
        console.log(this.tel)
    }
};
</script>

<style>
input, textarea, a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    font: inherit;
    font-size: 100%;
}
input {
    border: none;
    font-size: 14px;
    outline: none;
    outline: medium;
    text-transform: none;
    -webkit-appearance: none;
}
form {
    margin: 0 12%;display: block;
    margin-top: 0em;
}
.other-login-outer {
    padding:0 10%;
}
.other-login {
    padding-top:0.8rem;
    position: relative;
    height: 58px;
    line-height: 58px;
    text-align: center;
}
.other-title {
    padding: 0px 5px;
    background: #fff;
}
.jm_row {
    display: flex;
    width: 100%;
}
.register_button {
    background: #feb2c5!important;
    border-radius: 20px;
    width: 100%;
    height: 36px;
    font-size: 14px;
    color: #ffffff;
    line-height: 14px;
    text-align: center;
    margin: 18px auto 0 auto;
    display: block;
}
.register_agreement {
    font-size: 12px;
    color: #999999;
    height: 36px;
    line-height: 36px;
}
.register_input {
    background: #f5f5f5;
    border-radius: 20px;
    width: 100%;
    height: 36px;
    font-size: 14px;
    color: #999999;
    text-align: left;
    text-indent: 21px;
    margin-top: 18px;
}
.jm_center {
    text-align: center;
}
.icon_phone .register_input {
    margin-top: 0;
}
.jm_col {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -moz-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: block;
    width: 100%;
}
.register_yzm {
    background: #ffffff;
    border: 1px solid #feb2c5;
    border-radius: 20px;
    width: 97%;
    height: 35px;
    font-size: 14px;
    color: #feb2c5;
    line-height: 35px;
    text-align: center;
    display: block;
}
.jm_col_90px {
    flex: 0 0 90px;
    max-width: 90px;
    margin: 18px 0 0 10px;
}
</style>
