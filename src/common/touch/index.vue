<template>
  <v-touch v-on:swipeleft="swiperleft" v-on:swiperight="swiperright" class="wrapper">
	  <div class="menu-container" ref="menuContainer">    
          <slog></slog>
	  </div>
  </v-touch>
</template>
<script>
export default {
  name: 'Queue',
  data () {
    return {
    
    }
  },
  methods: {
    swiperleft: function () {
      this.$router.push({'path':'/queuehistory'});
    },
    swiperright: function () {
      this.$router.push({'path':'/home'});
    }
  }

}

</script>


<style>

</style>

