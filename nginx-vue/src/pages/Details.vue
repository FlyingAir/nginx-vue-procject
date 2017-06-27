<template>
   <div class="details">
      <input type="text" v-model="message">
   </div>
</template>

<script>
import router from "../router"
export default {
  data: function() {
    return {
      visible: false,
      message: "details"
    }
  },
}
</script>
<style lang="scss">

</style>
