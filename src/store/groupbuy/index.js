import axios from "axios";
import http from "utils/http.js"
const state = {
    goods:[],
    selectedAll:true,
    selectedIndex:0,
    groupbuyData:[]
}

const actions = {
   async requestGroupListData(context,tab){
         console.log(tab)
        let getgroupbuyData=()=>http("get","/api/yiqituan/tab_list",
        {tab:tab,page:1,per_page:20})
        let data=await getgroupbuyData();
        console.log(data,"112")
        context.commit('setgroupbuyData',data)
    }
}

const mutations = {
    setgroupbuyData(state,params){
        state.groupbuyData=params
    }
}

const getters = {
   
}


export default {
    state,
    getters,
    actions,
    mutations,
    namespaced:true
}