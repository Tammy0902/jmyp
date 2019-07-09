import Vue from 'vue'
import Router from "vue-router";
Vue.use(Router)

import home from "./home"
import groupbuying from "./groupbuying"
import shoppingcart from "./shoppingcart"
import mine from "./mine"
import search from "./search"

export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/home"
    },    
    home,
    groupbuying,
    shoppingcart,
    mine,
    search
  ]
})
