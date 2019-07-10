import http from "utils/http.js";

 export const home = () => http("get","/yiqituan/tab_list",{tab:"coutuan_home",page:"1",per_page:20})
 export const makeup = () => http("get","/yiqituan/tab_list",{tab:"coutuan_makeyup",page:"1",per_page:20})
 export const homes = () => http("get","/index/requestDelegate?url=http%3A%2F%2Fmobile.jumei.com%2Fmsapi%2Fmall%2Fallcategories.json")
 export const Cs = ()=>http("get","/jm/yiqituan/tab_list",{tab:"coutuan_home",page:1,per_page:20})
//  http://s.h5.jumei.com/yiqituan/tab_list?tab=coutuan_home&page=1&per_page=20

export const pingtuan = () => http("get","/yiqituan/tab_list",
{tab:"coutuan_home",
page:1,
per_page:20
})

export const getGoodsDetail = (id)=>http(id)("get","/api/yiqituan/ajaxDetail",{item_id:id,type:'global_deal',tid:""})
