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
  @import "./static/css/navBar"
</style>