<template>
  <div id="app">
    <mt-tabbar v-model="selected">
      <mt-tab-item  id="tab1">
        <i slot="icon" class="main-icon" @click="toMain"></i>
      </mt-tab-item>
      <mt-tab-item id="tab2" >
        <i slot="icon" class="music-icon" @click="toMusic"></i>
      </mt-tab-item>
      <div class="playing-model" id="playing-model">
        <i class="playing-model-icon">
          <img class="loading-model" src="../static/loading.gif" height="25" width="32"></img>
        </i>
      </div>
      <mt-tab-item id="tab3" >
       <i slot="icon" class="center-icon" @click="toCenter"></i>
      </mt-tab-item>
      <mt-tab-item id="tab4" >
        <i slot="icon" class="search-icon" @click="toSearch"></i>
      </mt-tab-item>
    </mt-tabbar>
    <mt-tab-container v-model="selected">
      <router-view></router-view>
    </mt-tab-container>
  </div>
</template>

<script>
import router from "./router"
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
    toSearch(){
      router.push({name:"search"});
    },
    toCenter(){
      router.push({name:"center"});
    }
  },
}
</script>
<style lang="scss">
  @import "../static/css/app"
</style>
