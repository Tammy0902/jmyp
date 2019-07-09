import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


Vue.use(Vuex)

const state = {
    goods:[],
    selectedAll:true,
    // show:true
}


const mutations = {
    //获取商品数据
    handleMutationsGoods(state,params){        
        params.map((item)=>{
            item.flag=true;
            item.show = true;
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
    },
    //点击编辑显示商品数量修改功能
    handleShow(state,index){        
        state.goods[index].show = !state.goods[index].show     
    },
    //点击完成隐藏商品数量修改功能
    handleHide(state,index){        
        state.goods[index].show = !state.goods[index].show
    },
    //点击删除移除商品
    handleDelgoods(state,index){
        state.goods.splice(index,1)        
    },
    //点击商品增加功能
    handleNumAdd(state,index){
        if(state.goods[index].num < 10){
            state.goods[index].num ++;  
        }
              
    },
    //点击商品减少功能
    handleNumReduce(state,index){
        if(state.goods[index].num > 1){
            state.goods[index].num --
        }
    }

    
}
const actions = {
    getActionGoods({commit}){
        axios({
            methods:"get",
            url:"http://localhost:3000/goods"
        }).then((data)=>{
            commit("handleMutationsGoods",data.data) 
                 
        })
    }
    
    
}

const getters = {
    count(state){
        let goodsNum = 0 ,goodsPrice = 0;
        for(var i = 0; i<state.goods.length;i++){
            if(state.goods[i].flag){
                goodsNum += state.goods[i].num;
                goodsPrice +=((state.goods[i].price)*100*state.goods[i].num)
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
    actions,
    mutations,
    namespaced:true
}