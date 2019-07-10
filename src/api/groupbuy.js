//https://s.h5.jumei.com/yiqituan/tab_list?tab=coutuan_home&page=1&per_page=20

import http from "utils/http.js"
export const getgroupbuy=()=>http("get","/api/yiqituan/tab_list",{tab:'coutuan_home',page:1,per_page:20})
export const getgroupbuybady=()=>http("get","/api/yiqituan/tab_list",{tab:'coutuan_baby',page:1,per_page:20})
export const getgroupbuyall=(tabb)=>http("get","/api/yiqituan/tab_list",{tab:tabb,page:1,per_page:20})
export const getgroupDetailData=(id)=>http("get","/api/yiqituan/ajaxDetail",{item_id:id,type:'global_deal',tid:""})
                                                             //ajaxDetail?item_id=ht190710p4214986t4&type=global_deal&tid=

