<template>
<div class="wrap">
        <div class="search">
            <div class="head">
                <input type="text" placeholder="搜索商品名称,品牌,功效" />
                <span >返回</span>
            </div>
            <ul class="search-list">
                <li class="search-link">
                    <span>面部护肤</span><i></i>
                    <ul class="search-sub-1">
                        <li>面部护肤11</li>
                        <li>面部护肤</li>
                        <li>面部护肤</li>
                        <li>面部护肤</li>
                        <li>面部护肤</li>
                        <li>面部护肤</li>
                    </ul>
                </li>
                <li>
                    <span>彩妆</span><i></i>
                    <ul class="search-sub-2">
                            <li>面部护肤11</li>
                            <li>面部护肤</li>
                            <li>面部护肤</li>
                            <li>面部护肤</li>
                            <li>面部护肤</li>
                            <li>面部护肤</li>
                    </ul>
                </li>
                <li>
                    <span>香水</span><i></i>
                    <ul class="search-sub-3">
                            <li>面部护肤11</li>
                            <li>面部护肤</li>
                            <li>面部护肤</li>
                            <li>面部护肤</li>
                            <li>面部护肤</li>
                            <li>面部护肤</li>
                    </ul>
                </li>
                <li>
                    <span>男士护理</span><i></i>
                    <ul class="search-sub-4">
                            <li>面部护肤11</li>
                            <li>面部护肤</li>
                            <li>面部护肤</li>
                            <li>面部护肤</li>
                            <li>面部护肤</li>
                            <li>面部护肤</li>
                    </ul>
                </li>
                <li>
                    <span>套装礼盒</span><i></i>
                    <ul class="search-sub-5">
                            <li>面部护肤11</li>
                            <li>面部护肤</li>
                            <li>面部护肤</li>
                            <li>面部护肤</li>
                            <li>面部护肤</li>
                            <li>面部护肤</li>
                    </ul>
                </li>
                <li>
                    <span>美容工具</span><i></i>
                    <ul class="search-sub-6">
                            <li>面部护肤11</li>
                            <li>面部护肤</li>
                            <li>面部护肤</li>
                            <li>面部护肤</li>
                            <li>面部护肤</li>
                            <li>面部护肤</li>
                    </ul>
                </li>
                <li>
                    <span>其他</span><i></i>
                    <ul class="search-sub-7">
                            <li>面部护肤11</li>
                            <li>面部护肤</li>
                            <li>面部护肤</li>
                            <li>面部护肤</li>
                            <li>面部护肤</li>
                            <li>面部护肤</li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
   
</template>

<script>
export default {
    methods:{
        backhome(){
            
        }
    }
}
</script>

<style scoped>
.wrap{
    width:100%;
    background:#7f7f7f;
    height:100%;
    display:flex;
   justify-content:flex-end;
}
.search{
    width:80%;
    background:white;
    height:100%;
    overflow: hidden;
}
.head{
    height:8%;
    display:flex;
    align-items:center;
}
.head input{
    width:4.4rem;
    height:0.6rem;
    margin-left:0.2rem;
    border-radius:0.2rem;
    background:#f5f5f5;
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
    margin-top:.08rem;
    align-items:center;
    border:1px solid #eeeeee;
    flex-direction: column;
    line-height:1.21rem;
}

.search-list>li>ul>li{
    border-top:1px solid #cccccc;
}
.search-list>li{
    width:100%;
    font-size:0.27rem;
    border-top:1px solid #cccccc;
    text-align:center;
    box-sizing:border-box;
    flex:0 0 auto;
} 

.search-sub-1{
    display:none;
}
.search-sub-2{
    display:none;
}
.search-sub-3{
    display:none;
}
.search-sub-4{
    display:none;
}
.search-sub-5{
    display:none;
}
.search-sub-6{
    display:none;
}
.search-sub-7{
    display:none;
}
</style>
