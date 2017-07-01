<template>
<mt-tabbar v-model="selected">
      <mt-tab-item  id="tab1">
        <i slot="icon" class="main-icon" @click="toMain"></i>
      </mt-tab-item>
      <mt-tab-item id="tab2" >
        <i slot="icon" class="music-icon" @click="toMusic"></i>
      </mt-tab-item>
      <div class="playing-model" id="playing-model">
      <v-touch v-on:panstart="onPanStart" v-on:panend="onPanEnd" v-on:pan="onPan">
       <i class="playing-model-icon" ref="playing" style="left:30px;">
          <img class="loading-model" src="../../static/loading.gif" height="25" width="32"></img>
        </i>
        </v-touch>
      </div>
      <mt-tab-item id="tab3" >
       <i slot="icon" class="center-icon" @click="toCenter"></i>
      </mt-tab-item>
      <mt-tab-item id="tab4" >
        <i slot="icon" class="love-icon" @click="toLove"></i>
      </mt-tab-item>
    </mt-tabbar>
</template>
<script>
import router from "../router"
export default {
  data: function() {
    return {
      visible: false,
      selected: 1,
       }
  },
  methods:{
    toMain(){
      router.push({name:"main"});
    },
    toMusic(){
      router.push({name:"music"});
    },
    toLove(){
      router.push({name:"love"});
    },
    toCenter(){
      router.push({name:"center"});
    },
    onPanStart(el){
      if(el.type='panstart'){

      }
    },
    onPanEnd(el){
      if(el.type='panend'){
        this.$refs.playing.style.left=30+'px';
      }
    },
    onPan(el){
      console.log(el.deltaX)
       if(el.deltaX<30&&el.deltaX>-30){
          this.$refs.playing.style.left=(30+el.deltaX)+'px';
       }
  },
}
}
</script>
<style lang="scss">
.mint-tabbar {
    background: #eee;
    height: 50px;
    border-top: 1px solid #ddd;
    position:fixed;
    #playing-model>div{
        height:70px;
    }
    .mint-tab-item-icon {
        margin-top: 6px;
    }
    .mint-tab-item.is-selected {
        background:none;
    }
    .mint-tab-item.is-selected i{
      background-image: url("/static/sp2.png");
    }
    .main-icon {
        background: url("/static/sp.png") center center no-repeat;
        background-position: (-636*0.75)+px (-228*0.75)+px;
    }
    .music-icon {
        background: url("/static/sp.png") center center no-repeat;
        background-position: (-468*0.75)+px (-340*0.75)+px;
    }
    .center-icon {
        background: url("/static/sp.png") center center no-repeat;
        background-position: (-468*0.75)+px (-284*0.75)+px;
    }
    .love-icon {
        background: url("/static/sp.png") center center no-repeat;
        background-position: (-132*0.75)+px (-452*0.75)+px;
    }
    .playing-model {
        position: relative;
        z-index: 9999;
        top: -20px;
        height: 70px;
        width: 70px;
        margin:0;
        padding:0 30px;
        overflow:hidden;
        .playing-model-icon {
            transition:all 0.2s ;
            position: absolute;
            top: 0;
            margin-top: 16px;
            border-radius: 50%;
            box-shadow: 0px 0px 1px 0px #ddd;
            border: 2px solid #eee;
            top: -8px;
            width: 66px;
            height: 66px;
            background-color: #666;
            .loading-model{
              margin-top: 19px;
            }
        }
    }
}

</style>
