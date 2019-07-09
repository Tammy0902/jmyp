import http from "utils/http.js";

 export const home = () => http("get","/yiqituan/tab_list",{tab:"coutuan_home",page:"1",per_page:20})

//  http://m.jumei.com/index/requestDelegate?url=http%3A%2F%2Fmobile.jumei.com%2Fmsapi%2Fmall%2Fallcategories.json
// http://s.h5.jumei.com/yiqituan/tab_list?tab=coutuan_home&page=1&per_page=20