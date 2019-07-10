//https://s.h5.jumei.com/yiqituan/tab_list?tab=coutuan_home&page=1&per_page=20

import http from "utils/http.js"
export const getgroupbuy=()=>http("get","/api/yiqituan/tab_list",{tab:'coutuan_home',page:1,per_page:20})
export const getgroupbuybady=()=>http("get","/api/yiqituan/tab_list",{tab:'coutuan_baby',page:1,per_page:20})
export const getgroupbuyall=(tabb)=>http("get","/api/yiqituan/tab_list",{tab:tabb,page:1,per_page:20})
export const getgroupDetailData=(id)=>http("get","/api/yiqituan/ajaxDetail",{item_id:id,type:'global_deal',tid:""})




//home
export const gethomeToggle=()=>http("get","api/yiqituan/tab_list",{tab:'coutuan_ladies',page:1,per_page:20})
//dutyFreeStore
export const dutyFreeStore=()=>http("get","api/yiqituan/tab_list",{tab:'coutuan_food',page:1,per_page:20})
//mom
export const mom =()=>http("get","api/muandbaby/ajaxList",{page:1,card_id:7430})
//kindgoods
export const kindgoods =()=>http("get","/test/luxury/ajaxList",{page:1,card_id:1837})
//search

        //https://s.h5.jumei.com/yiqituan/tab_list?tab=coutuan_baby&page=1&per_page=20
         //https://s.h5.jumei.com/yiqituan/ajaxDetail?item_id=ht190708p1415960t4&type=global_deal&tid=