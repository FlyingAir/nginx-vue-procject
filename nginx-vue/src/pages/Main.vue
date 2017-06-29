<template>
  <div class="main-page">
    <div class="search-bar">
      <div class="search-content">
        <i class="search-icon"></i>
        <input type="text" name="" value="" placeholder="Jay" readonly>
      </div>
    </div>


    <mt-swipe :auto="4000" >
      <mt-swipe-item v-for="(bannerItem,index) in bannerList.banners">
        <img class="banner-img" v-bind:src="bannerItem.pic" alt='' width="100%" :index="index" ref="pic"/>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import router from "../router"
export default {
  data: function() {
    return {
      bannerList: ''
    }
  },
  created: function() {
    this.getBanner();
  },
  mounted:function(){

 },
  methods: {
    getBanner: function() {
      this.$http.get("/api/banner").then(response => {
        this.bannerList = response.data;
        console.log(this.bannerList);
      }, response => {
        console.log("error");
      })
    },
  }
}
</script>
<style lang="scss">
.main-page{
  width: 100%;
  .search-bar{
    height:30px;
    background-color: #ffdf7d;
    padding-top: 6px;
    .search-content{
      width: 80%;
      margin:0px auto;
      height:24px;
      border-radius: 20px 20px;
      overflow: hidden;
      position: relative;
      .search-icon{
        width:16px;
        height:16px;
        top:5px;
        left:7px;
        background-color: red;
        position: absolute;
        background: url("/static/sp.png")  no-repeat;
        background-size:400px 300px;
        background-position:(-356*0.5)+px (-172*0.5)+px;
      }
      input{
        color:#eee;
        font-size:16px;
        height:24px;
        padding-left:40px;
        width: 100%;
        outline: none;
        border:none;
      }
    }
  }
}
.mint-tab-container {
    overflow: visible;
    width: 100vw;
    height: (100*420/1080)+vw;
}
.mint-tab-container-wrap {
    width: 100%;
    height: 100%;
}
.mint-swipe {
    width: 100%;
    height: 100%;
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
