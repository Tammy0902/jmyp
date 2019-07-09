<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
    name:"BScroll",
    mounted(){
        this.scroll=new BScroll(this.$refs.wrapper,{
            probeType:1
        });
    },
    methods:{
        handleScrollStart(cb){
            this.scroll.on('scroll',({x,y})=>{
                if(y>30){
                    cb()
                }
            })
        },
        handleScrollEnd(cb){
            this.scroll.on('scrollEnd',()=>{
                setTimeout(()=>{
                    cb();
                },1000)    
            })
        }
    }
}
</script>

<style>
.wrapper {
  height: 100%;
}
</style>
