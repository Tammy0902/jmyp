//https://s.h5.jumei.com/yiqituan/tab_list?tab=coutuan_home&page=1&per_page=20

import http from "utils/http.js"
export const getgroupbuy=()=>http("get","/api/yiqituan/tab_list",{tab:'coutuan_home',page:1,per_page:20})
