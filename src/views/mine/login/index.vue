<template>
    <div class="login">
        <heade icon="<" title="登录" />

        <form id="login-dynamic-form">
            <div id="iphone_login">
                <div class="other-login-outer">
                    <div class="other-login">
                        <span class="other-title">使用手机登录</span>
                    </div>
                </div>
                <div class="jm_row icon_phone">
                    <div class="jm_col">
                        <input type="text" class="register_input" v-model="tel_in"
                         name="dynamic_mobile" value="" id="dynamic_mobile" 
                         placeholder="请输入11位手机号" alertname="手机号"/>
                    </div>

                </div>
                <div class="jm_row">
                    <div class="jm_col">
                        <input type="tel" class="register_input" v-model="pwd_in"
                         name="telephoneN" placeholder="请输入密码" id="dynamic_password" alertname="短信验证码" maxlength="6"/>
                    </div>
                    <div class="jm_col jm_col_90px">
                        <a   class="register_yzm"  href="javascript:;">验证</a>
                    </div>
                </div>
                <div class="jm_row " id="dynamic_verify_code" style="display: none;">
                    <div class="jm_col"><input type="text" maxlength="4" name="dynamic_hash_code" class="register_input" id="dynamic_hash_code" placeholder="请按右图输入"/></div>
                    <div class="jm_col jm_col_90px"> <img id="img_dynamic_hash_code" src="" class="check_code"></div>
                </div>
                <div class="jm_row " id="dynamic-geetest-wrap" style="display: none;">
                    <div class="jm_col">
                    </div>
                </div>
                <div class="jm_row register_jumei_account">
                    <a class="jm_col jm_left" id="use_jumei_account">使用聚美帐号登录</a>
                    <div class="jm_col jm_right">30天内自动登录</div>
                </div>
            </div>
            <input type="button" value="登录" class="register_button" 
            id="ga_dynamic_login" @click="handleLogin()"/>
        </form>
        
        
    </div>
</template>

<script>
import axios from 'axios'
import request from 'api/request'
export default {
    data(){
        return{
            tel_in:"1",
            pwd_in:""
        }
    },

    
    methods:{
        handleLogin(){
            if(this.tel_in&&this.pwd_in){
                let data=require('static/json/people.json');
                console.log(data.abc,"minedata")
                data.abc.map((item)=>{
                    console.log(item)
                    if(item.pwd==this.pwd_in&&item.tel==this.tel_in){
                        
                        item = JSON.stringify(item);
                        sessionStorage.setItem('item',item);
                        // localStorage.setItem('item',item);
                        // var data1 =  JSON.parse(localStorage.getItem('item')) ;
                        // console.log(data1.pwd,222);
                        console.log(item,"登录成功");
                        this.$router.replace("/already")
                    }

                })

            }else{
                console.log("错误")
            }
        }
    }
}
</script>

<style>
    .gt_ads_holder_top {display: none;}
    .gt_ads_holder {
    border: 0;
    background: none;
    padding: 0 15px 2px 18px;
    }
    .gt_ajax_tip {
    display: none;
    }
    .gt_bottom {
    background: none;
    }
    .gt_holder {
    padding: 5px 0;
    }
    .gt_ads_box {
    top: 1px;
    }
form {
    margin: 0 12%;
}
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
