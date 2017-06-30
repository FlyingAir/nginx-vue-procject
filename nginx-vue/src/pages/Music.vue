<template>
   <div class="login">
      <nav-bar></nav-bar>
   </div>
</template>

<script>
import navBar from "../components/navBar.vue"
import router from "../router"
export default {
  data: function() {
    return { 
      visible: false,
      message: "请输入用户名"
    }
  }, 
  components:{
      "navBar":navBar,
  }
}
</script>
<style lang="scss">

</style>


