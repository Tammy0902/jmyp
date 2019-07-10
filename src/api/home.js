import http from "utils/http.js";

 export const home = () => http("get","/yiqituan/tab_list",{tab:"coutuan_home",page:"1",per_page:20})
 export const makeup = () => http("get","/yiqituan/tab_list",{tab:"coutuan_makeyup",page:"1",per_page:20})
 export const homes = () => http("get","/api/neptune/goods/list_with_stock/v1")



// http://h5.jumei.com/index/requestDelegate?url=http%3A%2F%2Fmobile.jumei.com%2Fmsapi%2Fmall%2Fallcategories.json
