import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


Vue.use(Vuex)

const state = {
   num:0
}


const mutations = {
    
    handleAddCart(state){
        if(state.num >= 0 && state.num < 9){        
        state.num++;
    }
        
    }
  

    
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