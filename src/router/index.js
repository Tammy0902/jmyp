import Vue from 'vue'
import Router from "vue-router";
Vue.use(Router)

import home from "./home"
import groupbuying from "./groupbuying"
import shoppingcart from "./shoppingcart"
import mine from "./mine"
<<<<<<< HEAD
import localedit from "./localedit"
import pay from "./pay"
=======
import detail from "./detail"
>>>>>>> wxm


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
<<<<<<< HEAD
    localedit,
    pay

=======
    detail 
>>>>>>> wxm
  ]
})
