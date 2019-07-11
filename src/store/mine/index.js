import axios from "axios";
import request from "api/request"
const state = {
    abc: [
        {
          "tel": "15079353312",
          "pwd": "123456",
          "username": "wxm",
          "id": 1
        },
        {
          "tel": "13879353312",
          "pwd": "123456",
          "username": "zhangsan",
          "id": 2
        }
      ]
}

const actions = {
    setAccount ({commit}, platform) {
        commit('SET_ACCOUNT', platform);
    },
}

const mutations = {
    SET_ACCOUNT (state, platform) {
        
        platform.id=state.abc.length+1;
        let paras= platform
        state.abc.push(paras);
        console.log(state.abc,"state.abc")
      },
}


const getters = {}


export default {
    state,
    getters,
    actions,
    mutations,
    namespaced:true
}