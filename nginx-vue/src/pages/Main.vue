<template>
  <div class="main-page">
    <search-bar></search-bar>
    <banner-swipe></banner-swipe>
    <div class="main-nav">
      <ul>
        <li><div><i class="main-FM"></i></div><span>私人FM</span></li>
        <li><div><i class="main-recom"></i></div><span>歌曲推荐</span></li>
        <li><div><i class="main-ranking"></i></div><span>热歌榜</span></li>
      </ul>
    </div>
    <recom-source></recom-source>
    <nav-bar></nav-bar>
  </div>
  
</template>

<script>
import navBar from "../components/navBar.vue"
import bannerSwipe from "../components/bannerSwipe.vue"
import searchBar from "../components/searchBar.vue"
import recomSource from "../components/recomSource.vue"
import router from "../router"
export default {
 components:{
      "navBar":navBar,
      "bannerSwipe":bannerSwipe,
      "searchBar":searchBar,
      "recomSource":recomSource
  }
}
</script>
<style lang="scss">
@import "./static/css/index";
  .main-page{
    width: 100%;
    height:100%;
    background-color: $bgc;
   
  }
  .main-nav{
    ul{
      padding:10px 0;
       display: flex;
      li{
          flex:1;
          text-align: center;
          div{
              margin:0 auto;
              width:50px;
              height:50px;
              border-radius:50%;
              border:1px solid #aaa;
              line-height: 57px;
              margin-bottom:5px;
            i{
              width:24px;
              height:24px;
              display:inline-block;
              margin-left:-2px;
              background:url('../../static/sp2.png');
            }

            .main-FM{
              background-position:(-524*0.75)+px (-340*0.75)+px;
            }
            .main-recom{
              background-position:(-412*0.75)+px (-284*0.75)+px;
            }
            .main-ranking{
              background-position:(-132*0.75)+px (-116*0.75)+px;
            }
          }  
           span{
              color:$fontColor;
              font-family:"microsoft yahei";
              font-size:12px;
            }       
      }
    }
  }
</style>
