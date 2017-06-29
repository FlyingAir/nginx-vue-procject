<template>
   <div class="login">
      <input type="text" v-model="message">
   </div>
</template>

<script>
import router from "../router"
export default {
  data: function() {
    return { 
      visible: false,
      message: "请输入用户名"
    }
  },
}
</script>
<style lang="scss">

</style>


