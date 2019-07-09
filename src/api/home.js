import http from "utils/http.js";

 export const home = () => http("get","/test/index/ajaxDealactList",{card_id:4057, client_v:1,page:1,platform:"wap",type:"pre", page_key:"" })


// export const getgroupbuy=()=>http("get","/api/yiqituan/tab_list",{tab:'coutuan_home',page:1,per_page:20})

// http://m.jumei.com/index/ajaxDealactList?card_id=4057&client_v=1&page=1&platform=wap&type=formal&page_key=

// http://s.h5.jumei.com/yiqituan/tab_list?tab=coutuan_home&page=1&per_page=20

// http://h5.jumei.com/index/ajaxDealactList?card_id=4057&client_v=1&page=1&platform=wap&type=formal&page_key=
// http://h5.jumei.com/index/ajaxDealactList?card_id=4057&client_v=1&page=1&platform=wap&type=pre&page_key=