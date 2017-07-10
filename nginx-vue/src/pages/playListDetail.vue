<template>
<div class="playList">
  <div class="bg-content">
    <div class="bg-mask">
      <mt-header title="歌单">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="playlist-info">
      <div class="info-wrapper">
      <div class="info-gallery"><span></span> <img v-lazy="playList.coverImgUrl" alt=""></div>
      <div class="info-title">
      <p class="titile">{{playList.name}}</p>
      <p class="author">
        <div class="mu-avatar">
          <div class="mu-avatar-inner">
            <img v-lazy="playList.creator.avatarUrl" alt="">
          </div>
          <span >{{playList.creator.nickname}}</span>
        </div>
      </p>
      </div> 
      </div>
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
          this.playList = response.data.playlist;
          this.privileges=response.data.privileges;
          console.log(this.playList);
      },response => {
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
        .playlist-info{
              position: relative;
              .info-gallery{
                    position: relative;
                    float: left;
                    width: 30%;
                    overflow: hidden;
                    span{
                      position: absolute;
                      display: block;
                      padding-right: 5px;
                      width: 100%;
                      left: 0;
                      top: 0;
                      font-size: 12px;
                      text-align: right;
                      background: rgba(0,0,0,.35);
                      z-index: 11;
                    }
                    img{
                      max-width: 100%;
                      height: auto;
                    }
              }
              .info-title{
                  padding-left: 10px;
                  width:70%;
                  .title{

                  }
                  .author{
                    .mu-avatar{
                          width: 30px;
                          height: 30px;
                              color: #fff;
                              background-color: #bdbdbd;
                      .mu-avatar-inner{
                            display: -webkit-box;
                            display: -ms-flexbox;
                            display: flex;
                            width: 100%;
                            -webkit-box-align: center;
                            -ms-flex-align: center;
                            align-items: center;
                            img{
                                  border-radius: 50%;
                                  width: 100%;
                                  height: 100%;
                                  display: block;
                            }
                      }
                    }
                  }
              }
        }
        
    }
}
</style>
