<template>
  <div id="app">
    <el-row>
      <el-col :span="8"><div class="grid-content bg-purple" >登录</div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple-light" @click="regist">注册</div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple-dark" @click="details">详情</div></el-col>
    </el-row>
    <router-view></router-view>
  </div>
</template>

<script>
import router from "./router"
export default {
  data: function() {
    return { visible: false }
  },
  methods:{
    login(){
        router.push({ name: 'login' });
    },
  }
}
</script>
<style lang="scss">
 .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    text-align: center;
    line-height: 36px;
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>


