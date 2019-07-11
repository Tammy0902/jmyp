import axios from "axios";
import request from "api/request"
const state = {}

const actions = {
   async requestMine(context,tab){
        
        let getgroupbuyData=()=>http("get","/api/yiqituan/tab_list",
        {tab:tab,page:1,per_page:20})
        let data=await getgroupbuyData();
        
        context.commit('setgroupbuyData',data)
    }
}

const mutations = {}


const getters = {}


export default {
    state,
    getters,
    actions,
    mutations,
    namespaced:true
}