
<template>
<!--  作废 可删-->
    <BScroll ref="bscroll">  
      <template>
        <div>
                <Loading v-if="loadingFlag"/>
                    <div class="loading" v-if="scrollLoading">
                      <i class="fa fa-spinner fa-pulse"></i>
                    </div>
                    <router-link  class="goods" v-for="(item,index) in groupgoods" :key="index" 
                    :to="'/detail/'+item.item_id" tag="div" v-if="!loadingFlag">
                      <div class="goods_top">
                        <img :src="item.image" alt />
                        <p class="people-number">{{item.buyer_number_text}}</p>
                      </div>
                      <div class="goods_foot">
                        <div class="goods-middle">
                          <span class="goods-num">{{item.group_name_tag}}</span>
                          {{item.short_name}}
                        </div>
                        <div class="foot_price">
                          <button>去开团</button>
                          <p>{{item.jumei_price}}</p>
                          <h6>{{item.single_price}}</h6>
                        </div>
                      </div>
                  </router-link>
        </div>
      </template>
    </BScroll>
</template>

<script>
export default {
    name:"groupBody",
    data(){
        return {
            groupgoods: [],
            loadingFlag:true,
            scrollLoading:true
        }
    }
}
</script>

<style>

</style>
