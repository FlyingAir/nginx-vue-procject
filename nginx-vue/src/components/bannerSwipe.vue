<template>
	<mt-swipe :auto="4000" >
      <mt-swipe-item v-for="(bannerItem,index) in bannerList.banners">
        <img class="banner-img" v-bind:src="bannerItem.pic" alt='' width="100%" :index="index" ref="pic"/>
      </mt-swipe-item>
    </mt-swipe>
</template>
<script>
	export default{
	data: function() {
    	return {
      		bannerList: ''
    	}
  	},
	 created: function() {
	    this.getBanner();
	 },
	 methods: {
	    getBanner: function() {
	      this.$http.get("/banner").then(response => {
	        this.bannerList = response.data;
	        // console.log(this.bannerList);
	      }, response => {
	        console.log("error");
	      })
	    },
	 },
	}
</script>
<style lang="scss">
.mint-swipe {
   width: 100vw;
   height: (100*420/1080)+vw
}
.banner-img{
  display: block;
}
.mint-swipe-items-wrap > div{
  width: 100%;
  height: 100%;
}
.mint-swipe-items-wrap{
  width: 100%;
}
</style>