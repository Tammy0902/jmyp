<template>
<div class="wrap">
        <div class="search">
            <div class="head">
                <router-link to="/searchList" tag="input" ></router-link>
                <router-link to="/home" tag="span" @click="back">返回</router-link>
            </div>
            <ul class="search-list">
                <li v-for="(item,index) in msg"  @click="show(index)">
                    <span>{{item.name}}</span><i></i>
                    <ul  :class="i == index ? '':'a' " >
                        <li v-for="(y,x) in item.sub_categories">
                           {{y.name}}
                        </li>
                     
                    </ul>
                </li>
            </ul>
        </div>
    </div>
   
</template>

<script>
import data from "../../../public/json/search.json";
export default {
    data(){
        return{
            msg:"",
            i:-1,
            j:0,
        }
    },
    components:{
       
    },
    methods:{
      back(){
            this.$router.go(-1);//返回上一层
        },
        show(index){
            this.i = index;
        }
    },
     created(){
        this.msg = data.data;
        console.log(data)
    }
}
</script>

<style scoped>
#id{
    display:none;
}
.wrap{
    width:100%;

    height:100%;
    display:flex;
    justify-content:flex-end;
}
.search{
    width:100%;
    background:white;
    height:100%;
    overflow: hidden;
}
.head{
    height:8%;
    display:flex;
    align-items:center;
    justify-content:center;
}
.head input{
    width:70%;
    height:0.6rem;
    margin-right:1rem;
    border-radius:0.2rem;
    margin:.1rem 0 .1rem 0;
    background:#f0e9e9;
    border:none;
}
.head  span{
    margin-left:0.4rem;
    font-size:0.35rem;
    
}

.search-list{
    height:92%;
    display: flex;
    width:100%;
    overflow-y: auto;
    flex-wrap:no-wrap ;
    align-items:center;
    border-bottom:1px solid #eeeeee;
    flex-direction: column;
    line-height:1.21rem;
}

.search-list>li>ul>li{
  
}
.search-list>li{
    width:100%;
    font-size:0.27rem;
    border-top:1px solid #cccccc;
    text-align:center;
    box-sizing:border-box;
    flex:0 0 auto;
    border-left:none;
} 

.a{
    display:none;
}
</style>
