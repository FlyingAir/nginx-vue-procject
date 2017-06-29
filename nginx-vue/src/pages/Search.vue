<template>
   <div class="regist">
      <input type="text" v-model="message">
   </div>
</template>

<script>
import router from "../router"
export default {
  data: function() {
    return {
      visible: false,
      message: "注册"
    }
  },
}
</script>
<style lang="scss">

</style>