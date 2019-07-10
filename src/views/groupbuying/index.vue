<template>
  
  <div class="group">
    
    <header class="buttom">
      <ul class="nav">
        <li
          v-for="(item,index) in Navs"
          :key="index"
          :class="actionIndex==index?'active':''"
          @click="handleIndex(item)"
        >{{item.name}}</li>
      </ul>
    </header>
    <div class="canscroll">
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
    </div>
  </div>
  
</template>

<script>
// import Nav from "../../components/nav"
import { getgroupbuy, getgroupbuybady,getgroupbuyall} from "api/groupbuy";
import { mapState } from "vuex";
import GroupMenu from "./children/group-menu";
export default {
  name: "groupbuying",
  data() {
    return {
      Navs: [
        { id: 0, name: "推荐", tab: "coutuan_home" },
        { id: 1, name: "母婴健康", tab: "coutuan_baby" },
        { id: 2, name: "美妆", tab: "coutuan_makeup" },
        { id: 3, name: "饰品配饰", tab: "coutuan_jewellery" },
        { id: 4, name: "礼品箱包", tab: "coutuan_bag" },
        { id: 5, name: "家居", tab: "coutuan_furniture" },
        { id: 7, name: "数码家电", tab: "coutuan_3c" },
        { id: 6, name: "女装", tab: "coutuan_ladies" },
        { id: 8, name: "食品保健", tab: "coutuan_food" },
        { id: 9, name: "鞋类", tab: "coutuan_shose" },
        { id: 10, name: "内衣", tab: "coutuan_underwear" },
        { id: 12, name: "下期预告", tab: "coutuan_pre" }
      ],
      actionIndex: 0,
      groupgoods: [],
      loadingFlag:true,
      scrollLoading:false
    };
  },
  computed: {
    ...mapState({
      selectedIndex: state => state.groupbuy.selectedIndex
    })
  },
  components: {
    // Nav1111
    GroupMenu
  },
  
  methods: {
    async handleIndex(item) {
      this.loadingFlag=true;
      this.actionIndex = item.id;
      this.$store.dispatch("groupbuy/requestGroupListData", {
        tab:item.tab
      });
      let data=await getgroupbuyall(item.tab);
      // console.log(data.data,"aa")
      this.loadingFlag=false;
      this.groupgoods=data.data
      // this.$set(this.groupgoods=data.data);
    },
 
    handleMenuChange() {
      // console.log(selectedIndex)
    }
  },
  async created() {
    let data = await getgroupbuy();
    //console.log(data.data,selectedIndex)
    this.loadingFlag=false;
    this.groupgoods = data.data;
    // console.log(this.groupgoods)
  },
  mounted(){
    this.$refs.bscroll.handleScrollStart(()=>{
      this.scrollLoading=true;
    })
    this.$refs.bscroll.handleScrollEnd(()=>{
      this.scrollLoading=false;
    })
  }
};
</script>

<style>
.canscroll{
  height: 100%;
  overflow: auto;
}
.wrapper{
   overflow: auto;
}
.loading {
  width: 100%;
  height: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loading > i {
  font-size: 0.4rem;
}
.people-number {
  font-size: 11px;
  padding: 4px 7px;
  position: absolute;
  left: 0;
  top: 2.4rem;
  /* z-index: 0; */
  border: 0.0625rem solid #eee;
  border-left: 0;
  border-top-right-radius: 1.5625rem;
  border-bottom-right-radius: 1.5625rem;
  color: #666;
  background: rgba(251, 251, 251, 0.8);
}
.goods-middle {
  font-size: 14px;
  max-height: 34px;
  line-height: 18px;
  margin-top: 10px;
}

.goods-num {
  color: #fe4070;
  display: inline-block;
}
.box {
  height: 20rem;
  background: tan;
}
.active {
  color: #fe4070;
  border-bottom: 2px solid #fe4070;
}
header {
  background: #fff;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
  overflow: auto;
  height: 0.88rem;
  position: relative;
  top:0;
  z-index: 20;
}
::-webkit-scrollbar {
  display: none;
}
.nav {
  height: 0.88rem;
  overflow: auto;
  width: 20rem;
}
.nav li {
  float: left;
  padding: 0 0.36rem;
  font-size: 0.28rem;
  height: 0.84rem;
  line-height: 0.88rem;
}

.goods {
  margin-bottom: 0.16rem;
  background: #fff;
  position: relative;
  
}
.goods_top {
  display: flex;
  align-items: center;
  justify-content: center;
}
.goods_top img {
  width: 47%;
}

.goods_foot {
  padding: 0.24rem;
  font-size: 0.28rem;
}

.foot_price {
  padding: 12px 0;
}
.foot_price p {
  color: #fe4070;
  font-size: 18px;
}
.foot_price h6 {
  font-size: 12px;
}
.foot_price button {
  float: right;
  border: 0.0625rem solid #fe4070;
  margin-top: 0.25rem;
  background: #fe4070;
  border-radius: 25px;
  color: #fff;
  font-size: 16px;
  padding: 2px 18px;
}
.group {
  background: #f5f5f5;
  height: 100%;
  overflow: hidden;
  
}
</style>
