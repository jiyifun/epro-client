<template>
	<div class="project page-wrap">
		<div class="page">
			<div class="banner">
				<div class="banner-footer">
					<p>牙周养护套餐</p>
					<div class="mark-bg"></div>
				</div>
			</div>
			<div class="container">
				<h2 class="project-title">原价1260元现价228元德国头等舱牙周养护套餐</h2>
				<p class="project-info">治疗次数：1次</p>
				<p class="project-info">套餐内容：4项</p>
				<ul>
					<li>1.龈上洁治，30分钟（清除牙结石、清楚顽固色素，预防牙齿脱落）；</li>
					<li>2. 深度护理，15分钟：（清洁牙体，祛除牙菌斑、螺旋杆菌 ，预防牙周病）；</li>
					<li>3. 牙龈SPA，15分钟：（牙龈按摩，促进血液循环、增强牙齿抗病、抗菌能力）；</li>
					<li>4. 牙齿美白，15分钟：（牙齿镀膜，美白，唇膜，让笑容更美丽）</li>
				</ul>
			</div>
		</div>
		<a href="tel:0769-39000111" class="appoint">立即预约</a>
	</div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scope>
@import '../../styles/css/variable';
.project {
	
	.page {
		bottom: 100px;

		.banner {
			position: relative;
			height: 436px;
			width: 100%;
			background-image: url('../../assets/image/banner.jpg');
			background-size: contain;
			background-repeat: no-repeat;
			background-position: center;

			.banner-footer {
				position: absolute;
				bottom: 0;
				left: 0;
				height: 60px;
				width: 300px;
				p {
					position: absolute;
					padding-left: 30px;
					line-height: 60px;
					font-size: 30px;
					color: $txt-blcak;
					z-index: 10;
				}
				.mark-bg {
					height: 60px;
				  width: 300px;
					background-color: #fff;
					opacity: 0.3;
					border-top-right-radius: 30px;
					border-bottom-right-radius: 30px;
				}


				
				
			}
		}

		.container {
			.project-title {
				padding: 15px 30px;
				text-align: left;
				line-height: 60px;
				font-size: 36px;/*px*/
				color: $txt-blcak;
			}

			.project-info {
				margin-bottom: 30px;
				width: 280px;
				line-height: 40px;
				font-size: 36px;
				border-top-right-radius: 20px;
				border-bottom-right-radius: 20px;
				background-color: $light-blue;
				color: $txt-bold;
				text-align: center;
			}
			ul {
				padding: 0 60px;
			}

			li {
				padding: 10px 0;
        font-size: 30px;/*px*/
        line-height: 50px;
				&:before {
					position: absolute;
					display: inline-block;
	        content: '';
	        height: 5px;
	        width: 5px;
	        border-radius: 50%;
	        background-color: $txt-default;
	        margin-top: 20px;
	        margin-left: -20px;
				}
			}
		}
	}
	.appoint {
		position: absolute;
		display: block;
		line-height: 100px;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: $theme-pink;
		color: #fff;
		font-size: 30px;/*px*/
		text-align: center;
	}
}
</style>