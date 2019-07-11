import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


Vue.use(Vuex)

const state = {
   num:0,
   goodsId:[],
   appear:true
}



const mutations = {    
    handleAddCart(state,params){
        if(state.num >= 0 && state.num < 9){        
        state.num++;
        state.goodsId.push(params)
        if(state.goodsId.length != 0){
            state.appear = false;
        }
        
        }            
    },
    // handlegoCart(state){        
    //     if(state.goodsId.length != 0){
    //         state.appear = true;
    //     }
    // }    
}
const actions = {

    
    
}

const getters = {
    count(state){
       
        return{
           
        }
    }
}



export default {
    state,
    mutations,
    getters,
    actions,
    mutations,
    namespaced:true
}