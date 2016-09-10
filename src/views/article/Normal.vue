<template>
	<div class="normal">
		<div v-for="article in articles" class="article">
			<h2 class="article-title">{{article.title}}</h2>
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
</template>
<script>
import * as articlesList from '../../constants/article'
import {URL_ROOT} from '../../constants'
export default {
  data () {
    return {
      articles: null,
      url_root: URL_ROOT + '/static/img/article'
    }
  },
  created () {
    this.articles = articlesList[this.$route.params.project]
    // this.url_root = '/static/img'
  }
}
</script>
<style lang="scss" scope>
@import '../../styles/css/variable';
@import '../../styles/css/article';
.normal {

  .article {
    padding: 60px;

    .article-title {
  		font-size: 36px;/*px*/
  		color: $article_title;

  		&:before {
  			content: ' ';
  			display: block;
  			position: absolute;
  			margin: 13px 0 0 -25px;
  			height: 25px;
  			width: 6px;
  			border-radius: 6px;
  			background-color: $theme-blue;
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
    		height: 147px;
    		margin: 0 5px;
    		background-repeat: no-repeat;
    		background-size: contain;
    		background-position: center;

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