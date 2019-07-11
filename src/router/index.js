import Vue from 'vue'
import Router from "vue-router";
Vue.use(Router)

import home from "./home"
import groupbuying from "./groupbuying"
import shoppingcart from "./shoppingcart"
import mine from "./mine"
import localedit from "./localedit"
import pay from "./pay"
import detail from "./detail"
import order from "./order"
import search from "./search"
import goodspage from "./goodspage"
// import searchList from "./searchList"
import tishi from "./tishi"
import login from "./login"
import signin from "./signin"
import already from "./already"



const router=new Router({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    login,
    tishi,
    signin,
    already,
    home,
    groupbuying,
    shoppingcart,
    mine,
    localedit,
    pay,
    order,
    detail,
    search,
    goodspage,
    

  ]
})

// router.beforeEach((to,from,next)=>{
    
//   if( to.path =="/login" || to.meta.AuthToken ){
    
//       next();
//       console.log(111)
//   }else{
//       //跳转的路径:(路由跳转)
//       next("/login") 
//       console.log(222)
//   }
  
// })
export default router;