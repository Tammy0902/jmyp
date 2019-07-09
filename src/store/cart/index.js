import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

<<<<<<< HEAD
Vue.use(Vuex)

const state = {
    goods:[]
}
const mutations = {
    
=======

Vue.use(Vuex)

const state = {
    goods:[],
    selectedAll:true
}


const mutations = {
    //获取商品数据
    handleMutationsGoods(state,params){        
        params.map((item)=>{
            item.flag=true;
        })
        state.goods = params;
        
    },
    //全选反选
    handleToggle(state){
        state.selectedAll = !state.selectedAll;
        state.goods.map((item)=>{
            item.flag = state.selectedAll
        })
    },
    //单选商品
    handleToggleGoods(state,index){
        state.goods[index].flag = !state.goods[index].flag;
        var select = true;
        for(var i =0 ;i<state.goods.length;i++){
            if(!state.goods[i].flag){
                select = false;
                break
            }            
        }
        state.selectedAll = select;
    }
>>>>>>> tammy
}
const actions = {
    getActionGoods({commit}){
        axios({
            methods:"get",
            url:"http://localhost:3000/goods"
        }).then((data)=>{
<<<<<<< HEAD
            console.log(data);            
        })
    }
}

export default {
    state,
    mutations,
=======
            commit("handleMutationsGoods",data.data) 
            console.log(data.data);
                 
        })
    }
    
    
}

const getters = {
    count(state){
        let goodsNum = 0 ,goodsPrice = 0;
        for(var i = 0; i<state.goods.length;i++){
            if(state.goods[i].flag){
                goodsNum += state.goods[i].num;
                goodsPrice +=((state.goods[i].price)*state.goods[i].num)*100
            }
        }
        var goodsPriceTal = (goodsPrice/100)
        return{
            goodsNum,
            goodsPriceTal
        }
    }
}



export default {
    state,
    mutations,
    getters,
>>>>>>> tammy
    actions,
    mutations,
    namespaced:true
}