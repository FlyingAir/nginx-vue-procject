<template>
<div class="playList">
  <div class="bg-content">
    <div class="bg-mask">
      <mt-header title="歌单">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="list-cover">
        <img v-lazy="" alt="">
        <span class="list-name"></span>
        <span class="list-owner"><i class="owner-pic"></i></span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data: function() {
    return {
      "playList": '',
      "privileges":''
    }
  },
  created: function() {
    this.getPlayList();
  },
  methods: {
    getPlayList() {
      this.$http.get("/playlist/detail?id=" + this.$route.params.id).then(response => {
        console.log(response)
        // if (response.code = "200") {
        //   this.playList = response.data.playList;
        //   this.privileges=response.privileges;
        //   console.log(this.playList);
        //   console.log(this.privileges);
        // }
      }, response => {
        console.log("error");
      })
    },
  }
}
</script>

<style lang="scss">
@import "./static/css/index";
.mint-header {
    background-color: rgba(0, 0, 0, 0.2);
    font-size: 16px;
    font-family: "microsoft yahei";
    letter-spacing: 6px;
}
.playList {

    .bg-content {

        .bg-mask {

            .list-cover{
                background-color: red;
                width: 100px;
                height:100px;
                margin-top: 12px;
                margin-left: 12px;
                img{
                  max-width:145px;
                  max-height:145px;
                }
                span.list-name{

                }
                span.list-owner{

                  .owner-pic{

                  }
                }
            }
        }
    }
}
</style>
