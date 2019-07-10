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
import searchList from "./searchList"

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

    localedit,
    pay,
    order,


    detail,

    search,
    searchList,

  ]
})
