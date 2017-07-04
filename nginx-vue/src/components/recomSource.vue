<template>
    <div class="recom-source">
    	<div>
    	<header>推荐歌单 <i>></i> </header>
    	<ul class="songSheet">
    		<li v-for="(sourceItem,index) in sourceList.result">
           <router-link :to="{name: 'playListDetail',params:{ id: sourceItem.id, name: sourceItem.name, coverImg: sourceItem.coverImgUrl, creator: sourceItem.creator, count: sourceItem.playCount, desc: sourceItem.description }}">
    			<img  alt="" width="95%" v-lazy="sourceItem.picUrl">
    			<!-- <div class="bg-company" v-lazy:background-image="imgIcon"></div> -->
    			<span>{{sourceItem.name}}</span>
          </router-link>
    		</li>
    	</ul>
    	</div>
    	<div>
    	<header>独家放送 <i>></i> </header>
    	<ul class="exclusiveness">
    		<li v-for="(exclusivenessItem,index) in exclusivenessList.result">
    			<img v-lazy="exclusivenessItem.picUrl" alt="" width="95%">
    			<!-- <div class="bg-company" v-lazy:background-image="imgIcon"></div>   -->
    			<span>{{exclusivenessItem.name}}</span>
    		</li>
    	</ul>
    	</div>
    	<div>
    	<header>推荐MV<i>></i> </header>
    	<ul class="recomMV">
    		<li v-for="(recomMVItem,index) in recomMVList.result">
    			<img v-lazy="recomMVItem.picUrl" alt="" width="95%">
    			<!-- <div class="bg-company" v-lazy:background-image="imgIcon"></div>   -->
    			<span class="songTitle">{{recomMVItem.name}}</span>
    			<span class='artistName'>{{recomMVItem.artistName}}</span>
    		</li>
    	</ul>
    	</div>
    	<div>
    	<header>推荐电台<i>></i> </header>
    	<ul class="recomRadio">
    		<li v-for="(recomRadioItem,index) in recomRadioList.result">
    			<img v-lazy="recomRadioItem.picUrl" alt="" width="95%">
    			<!-- <div class="bg-company" v-lazy:background-image="imgIcon"></div>   -->
    			<span>{{recomRadioItem.name}}</span>
    		</li>
    	</ul>
    	</div>
    	<div>
    	<header>推荐节目<i>></i> </header>
    	<ul class="recomPro">
    		<li v-for="(recomProItem,index) in recomProList.programs">
    			<img v-lazy="recomProItem.coverUrl" alt="" width="95%">
    			<!-- <div class="bg-company" v-lazy:background-image="imgIcon"></div>   -->
    			<span>{{recomProItem.name}}</span>
    		</li>
    	</ul>
    	</div>
    </div>

</template>

<script>
  export default{
    data: function() {
    		return {
      			sourceList:"",
      			exclusivenessList:"",
      			recomMVList:"",
      			recomRadioList:"",
      			recomProList:"",
    		}
		},
		created:function(){
			this.getRecoSource();
			this.getExclusiveness();
			this.getRecomMV();
			this.getRecomRadio();
			this.getRecomPro();
		},
		methods:{
			getRecoSource(){
				this.$http.get("/personalized").then(response => {
					if(response.data.code="200"){
	        	this.sourceList = response.data;
	        	// console.log(this.sourceList);
	        }
	      	}, response => {
	        	console.log("error");
	      		})
			},
			getExclusiveness(){
				this.$http.get("/personalized/privatecontent").then(response => {
					if(response.data.code="200"){
	        	this.exclusivenessList = response.data;
	        	// console.log(this.exclusivenessList);
	        }
	      	}, response => {
	        	console.log("error");
	      		})
			},
			getRecomMV(){
				this.$http.get("/personalized/mv").then(response => {
					if(response.data.code="200"){
	        			this.recomMVList = response.data;
	        			// console.log(this.recomMVList);
	        		}
	      	}, response => {
	        	console.log("error");
	      		})
			},
			getRecomRadio(){
				this.$http.get("/personalized/djprogram").then(response => {
					if(response.data.code="200"){
						this.recomRadioList = response.data;
	        			// console.log(this.recomRadioList);
					}
	      	}, response => {
	        	console.log("error");
	      		})
			},
			getRecomPro(){
				this.$http.get("/program/recommend").then(response => {
					if(response.data.code="200"){
						this.recomProList = response.data;
	        			// console.log(this.recomProList);
					}
	      	}, response => {
	        	console.log("error");
	      		})
			}
		}

    }
</script>

<style lang="scss">
@import "./static/css/index";
    .recom-source{
    	width:100%;
    	background-color: $bgc;
    	margin-bottom:80px;
    	header{
    		color:$fontColor;
    		height:24px;
    		line-height:24px;
    		padding-left:10px;
    		margin:8px 0;
			font-size:16px;
			font-family:"microsoft yahei";
			border-left:2px solid $mainColor;
			i{
				font-weight: 600;
        font-size:18px;
        font-family: 'Georgia'
			}
    	}
    	ul{
    		display:flex;
    		flex-wrap:wrap;
    		width:100%;
    		li{
    			margin:5px 0px;
				width:33%;
                a{
                    width:100%;
                }
				img{
					display:block;
					margin:0 auto;
				}
				span{
					padding:0 5px;
					line-height:18px;
					font-family:'microsoft yahei';
					font-size:12px;
					display:block;
					text-overflow: ellipsis;
					max-height: 36px;
					overflow: hidden;
				}
				span.songTitle{
					padding-left:8px;
				}
				span.artistName{
					font-size:10px;
					color:#aaa;
					padding-left:8px;
				}
    		}
    	}
    	.exclusiveness{
    		li{
    			width:50%;
    		}
    		li:nth-last-child(3){
    			width:100%;
    		}
    	}
    	.recomMV,.recentMV,.recomPro{
    		li{
    			width:50%;
    		}
    	}

      img[lazy=loading]{
        width: 95%;
      }
      img[lazy=loaded]{
        width: 95%;
      }
    }
</style>
