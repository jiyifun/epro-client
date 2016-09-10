<template>
	<div class="warning">
		<div v-for="article in articles" class="article">
			<h2 @click="toggleShow($index)" class="article-title">{{{article.title}}} <i class="icon-arrow_toggle" :class="{'up': article.show}"></i></h2>
      <div class="article-body" v-if="article.show" >
        <p class="article-content">{{{article.content[0]}}}</p>
        <ul class="article-img-list">
          <li v-for="img in article.imgs" :style="'width: ' + ((100 / article.imgs.length) - 2) + '%;'" :class="img.url" class="article-img-item">
            <div v-if="img.alt" class="article-img__marsk">
              <p class="marsk">{{img.alt}}</p>
            </div>
          </li>
        </ul>
        <p class="article-content">{{{article.content[1]}}}</p>
      </div>
		</div>
	</div>
</template>
<script>
import * as articlesList from '../../constants/warning'
export default {
  data () {
    return {
      articles: null
    }
  },
  methods: {
    toggleShow (i) {
      this.articles[i].show = !this.articles[i].show
    }
  },
  created () {
    this.articles = articlesList[this.$route.params.project]
  }
}
</script>
<style lang="scss" scope>
@import '../../styles/css/variable';
.warning {

  .article {
    padding: 60px 60px 0;

    .article-title {
  		font-size: 36px;/*px*/
  		color: $article_title;

      .icon-arrow_toggle {
          // float: right;
          width: 12px;
          height: 12px;
          display: inline-block;
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
          background-image: url('../../assets/arrow-down.png');

          &.up {
            transform:rotate(180deg);
          }
      }

  		&:before {
  			content: ' ';
  			display: block;
  			position: absolute;
  			margin: 13px 0 0 -25px;
  			height: 25px;
  			width: 6px;
  			border-radius: 6px;
  			background-color: $theme-red;
  		}
    }
    .article-content {
    	font-size: 24px;/*px*/
      line-height: 55px;
      color: $txt-bold;

      em {
      	color: $theme-blue;
      	font-size: 30px;/*px*/
      }
    }
    .article-img-list {
    	text-align: center;

    	.article-img-item {
    		display: inline-block;
    		position: relative;
    		height: 216px;
    		margin: 0 5px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
    		.article-img__marsk {
    			position: absolute;
    			bottom: 0;
    			width: 100%;
    			text-align: center;

    			.marsk {
    				line-height: 44px;
    				width: 100%;
    				background-color: #000;
    				opacity: 0.4;
    				color: #fff;
    				font-size: 20px;/*px*/
    			}
    		}
    	}
    }
  }
}
</style>