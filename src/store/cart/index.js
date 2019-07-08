import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

const state = {
    goods:[]
}
const mutations = {
    
}
const actions = {
    getActionGoods({commit}){
        axios({
            methods:"get",
            url:"http://localhost:3000/goods"
        }).then((data)=>{
            console.log(data);            
        })
    }
}

export default {
    state,
    mutations,
    actions,
    mutations,
    namespaced:true
}