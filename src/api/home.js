import http from "utils/http.js";

export const home = () => http("get","")
export const getGoodsDetail = (id)=>http(id)("get","/api/yiqituan/ajaxDetail",{item_id:id,type:'global_deal',tid:""})