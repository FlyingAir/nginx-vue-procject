<template>
 
    <mt-swipe :auto="4000">
       <mt-swipe-item v-for="bannerItem in bannerList.banners"><img class="banner-img" v-bind:src="bannerItem.pic" alt="" width="100%"/></mt-swipe-item>
  		
	</mt-swipe>
</template>

<script>
import router from "../router"
export default {
  data: function() {
    return {
      visible: false,
      bannerList:''
    }
  },
  created: function () {
    this.getBanner();
  },
  methods:{
  	getBanner:function(){
  		this.$http.get("/api/banner").then(response => {
    		this.bannerList=response.data;
    		console.log(this.bannerList);
		}, response => {
    		console.log("error");
		})
  	},
  	bannerHeight:function(){

  	}
  }
}
</script>
<style lang="scss">
.mint-tab-container{
	height:100%;
}
.mint-tab-container-wrap{
	height:100%;
}
	.mint-swipe{
		width:100%;
		height:100%;
	}
</style>
