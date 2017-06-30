<template>
	<div class="search-bar">
      <div class="search-content">
        <i class="search-icon"></i>
        <input type="text" name="" value="" placeholder="Jay" readonly>
      </div>
    </div>
</template>
<script>
	export default {

   }
</script>
<style lang="scss">
	@import "./static/css/index";
	.search-bar{
    height:36px;
    background-color: $bgc;
    padding-top: 12px;
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
        font-size:16px;
        height:24px;
        padding-left:40px;
        width: 100%;
        outline: none;
        border:none;
      }
    }
  }
</style>