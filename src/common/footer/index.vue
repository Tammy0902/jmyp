<template>
  <div id="footer">
    <ul>
      <router-link v-for="(item,index) in tabBar" :key="index" tag="li" :to="item.path">
        <i class="iconfont" v-html="item.icon"></i>
        <span>{{item.title}}</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabBar: [
        {
          icon: "&#xe600;",
          title: "首页",
          path: "/home"
        },
        {
          icon: "&#xe62c;",
          title: "拼团",
          path: "/groupbuying"
        },
        {
          icon: "&#xe681;",
          title: "购物车",
          path: "/shoppingcart"
        },
        {
          icon: "&#xe603;",
          title: "我的",
          path: "/mine"
        }
      ]
    };
  }
};
</script>


<style>
#footer {
  width: 100%;
  height: 0.96rem;
  border-top: 1px solid #eee;
  position: fixed;
  bottom: 0;
  left: 0;
  color: #999;
  padding-top: 0.1rem;
  box-sizing: border-box;
  background: #fff;
}
#footer > ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
#footer > ul > li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.28rem;
}
#footer > ul > li > .iconfont {
  font-size: 0.4rem;
}
#footer > ul > li {
  position: relative;
}
#footer > ul > li > span > span {
  width: 0.34rem;
  height: 0.34rem;
  border-radius: 50%;
  background: #fe4070;
  color: #fff;
  position: absolute;
  right: 0;
  top: 0;
  line-height: 0.34rem;
  font-size: 0.2rem;
  z-index: 1;
  text-align: center;
}
.active {
  color: #fe4070;
}
</style>
