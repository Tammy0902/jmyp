<template>
     <div class="nav" >
        <ul ref="nav" @click="handlenav">
            <router-link  v-for ="(item,index) in nav" tag="li" :to="item.path" :key="index">{{item.title}}</router-link>
        </ul>
    </div>
</template>

<script>

export default {
    name:"homenav",
    methods:{
        handlenav(){
       
        }
        
    },
    data(){
        return {
            nav:[
                {
                    title:"首页",
                    path:"/home/hometobTrailer",
                },
                {
                    title:"极品免税店",
                    path:"/home/dutyFreeStore",
                },
                {
                    title:"母婴",
                    path:"/home/mom",
                },
                {
                    title:"轻著",
                    path:"/home/kindgoods",
                },
               
            ]
           
        }
    }
}

</script>

<style scoped>
.router-link-active{
    color:pink;
}
.nav{
    width:100%;
} 
.nav ul {
    display: flex;
    width:100%;
    overflow-x: auto;
    flex-wrap:no-wrap ;
    margin-top:.08rem;
    height:.82rem;
    align-items:center;
    border:1px solid #eeeeee;
    border-left:none;
    border-right:none;
}
.nav ul li{
    width:33.3%;
    font-size:0.27rem;
    height:.38rem;
    text-align:center;
    box-sizing:border-box;
    flex:0 0 auto;
    line-height:.38rem;
}
</style>