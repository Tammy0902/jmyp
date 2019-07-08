import Vue from 'vue';
import Vuex from 'vuex';
import groupbuy from './groupbuy'
Vue.use(Vuex)

const state = {}

const actions = {}

//用来修改state中的数据
const mutations = {}

const getters={}
const store = new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
    modules:{
        groupbuy
    }
})

export default store;