import Vue from 'vue';
import Vuex from 'vuex';
import cart from './cart'

Vue.use(Vuex)

 const store = new Vuex.Store({
    moudles:{
        cart
    }
})

export default store