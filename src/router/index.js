import Vue from 'vue'
import Router from "vue-router";
Vue.use(Router)

import home from "./home"
import homemombody from "./homemombody"
import homekindbody from "./homekindbody"
import hometexshopbody from "./hometexshopbody"

import groupbuying from "./groupbuying"
import shoppingcart from "./shoppingcart"
import mine from "./mine"



export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/home"
    },    
    home,
    homemombody,
    // homekindbody,
    hometexshopbody,
    groupbuying,
    shoppingcart,
    mine,
  ]
})
