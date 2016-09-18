<template>
	<div class="full-page clinic">
		<div class="clinic-header">
				<swiper id="clinic-swiper" v-ref:swiper
				        direction="horizontal"
				        :performance-mode="false"
				        :pagination-visible="true"
				        :pagination-clickable="true">
				    <div>Page 1</div>
				    <div>Page 2</div>
				    <div>Page 3</div>
				</swiper>
				<div class="clinic-swiper__footer--bg"></div>
			<div class="clinic-swiper__footer">
				<div class="clinic-swiper__footer--container">
					<div class="clinic-info-item">
						<p class="clinic-info-item__number">4321</p>
						<p class="clinic-info-item__title">预约</p>
					</div>
					<div class="clinic-info-item">
						<p class="clinic-info-item__number">23</p>
						<p class="clinic-info-item__title">案例</p>
					</div>
					<div class="clinic-info-item">
						<p class="clinic-info-item__number">2</p>
						<p class="clinic-info-item__title">排名</p>
					</div>
				</div>
			</div>
		</div>
		<div class="clinic-container">
			<!-- <div class="clinic-container__comment"></div> -->
			<div class="clinic-container__info">
				<i class="icon icon-clinic_address"></i>
				<div class="clinic_address"><p>{{clinic.name}}<br/>{{clinic.address}}</p></div>
				<div class="clinic_contact">
					<i class="icon icon-clinic_contact"></i>
				</div>
			</div>
		</div>
		<div class="clinic-server">
			<h2 class="clinic-server__title">我的美购</h2>
			<ul class="clinic-server__list">
				<li v-for="item in clinic.projects" class="clinic-server__item">
					<h3 class="clinic-server__item--title">{{item.name}}</h3>
					<span class="clinic-server__item--amount">￥{{item.amount}}起</span>
					<span class="clinic-server__item--price">￥{{item.price}}起</span>
					<span class="clinic-server__item--appointment_count">已预约{{item.appointment_count}}</span>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
import Swiper from 'vue-swiper'
export default {
  components: {
    Swiper
  },
  data () {
    return {
      clinic: {
        name: '东莞固德会所',
        address: '东莞市莞城市政府富民路24号（盈丰科技大厦）固德口腔会所2、3楼',
        number: '12212121',
        appointment: '322',
        cases: '21',
        rank: '2',
        projects: [{
          name: '【洁牙】',
          amount: '2100',
          price: '5100',
          appointment_count: '31'
        }, {
          name: '【美白】',
          amount: '3100',
          price: '4600',
          appointment_count: '12'
        }, {
          name: '【洁牙】',
          amount: '2100',
          price: '5100',
          appointment_count: '31'
        }, {
          name: '【美白】',
          amount: '3100',
          price: '4600',
          appointment_count: '12'
        }, {
          name: '【洁牙】',
          amount: '2100',
          price: '5100',
          appointment_count: '31'
        }, {
          name: '【美白】',
          amount: '3100',
          price: '4600',
          appointment_count: '12'
        }]
      }
    }
  }
}
</script>
<style lang="scss" scope>
@import '../../styles/css/variable';
.swiper.horizontal .swiper-pagination {
	text-align: right !important;
	right: 50px;
}
.clinic {
	background-color: $gray-default;
}

.icon {
	display: block;
	position: absolute;
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;
}

.clinic-header {
	position: relative;
	height: 414px;
	width: 100%;
  
  #clinic-swiper {
  	height: 100%;
  	width: 100%;
  }
	.clinic-swiper__footer {
		position: absolute;
		bottom: 0;
		height: 88px;
		width: 100%;

    .clinic-swiper__footer--container {
    	position: relative;
    	// text-align: center;

    	.clinic-info-item {
    		display: inline-block;
    		padding-top: 20px;
    		width: 25%;
    		font-size: 26px;
    		line-height: 40px;
    		color: #fff;
    		text-align: center;

    		p {
    			line-height: 30px;
    		}
    	}
			.clinic-info-item:first-child:before {
				display: none;
			}
    	.clinic-info-item:before {
    		  position: absolute;
    		  margin-top: 14px;
    		  margin-left: -4px;
    			content: '';
    			display: block;
    			width: 2px;
    			height: 32px;
    			background-color: #fff;
    	}
    }
	}
	.clinic-swiper__footer--bg {
			position: absolute;
			bottom: 0;
			height: 88px;
			width: 100%;
			background-color: #000;
			opacity: 0.1;
		}
}
.clinic-container {
	position: relative;	



	.clinic-container__info {
		position: relative;
		margin-top: 4px;
		height: 212px;
		width: 100%;
		background-color: #fff;

		.icon-clinic_address {
			top: 50%;
			left: 30px;
			transform: translateY(-50%);
			width: 44px;
			height: 36px;
			background-image: url('../../assets/clinic/icon_map.png');
		}

		.clinic_address {
			display: table;
			margin-left: 100px;
			width: 380px;
			height: 212px;

			p {
				display: table-cell;
				vertical-align: middle;
			}
		}

	  .clinic_contact {
	  	// display: table-cell;
	  	// vertical-align: middle;
	  	position: absolute;
	  	right: 0;
	  	bottom: 0;
	  	margin: 80px 0;
	  	height: 50px;
	  	width: 210px;
	  	border-left: 4px solid $gray-deep;
	  }

	  .icon-clinic_contact {
	  	margin-left: 80px;
	  	width: 46px;
	  	height: 43px;
	  	background-image: url('../../assets/clinic/icon_contact.png');
	  }
	}
}
.clinic-server {
  margin-top: 20px;

  .clinic-server__title {
  	color: $theme-blue;
  	padding-left: 30px;
  	line-height: 80px;
  	font-size: 34px;
  	background-color: #fff;
  }

  .clinic-server__item {
  	margin-top: 4px;
  	padding: 30px 35px;
  	height: 90px;
  	background-color: #fff;
		
		.clinic-server__item--title {
			font-size: 30px;
			color: $txt-bold;
		}
		.clinic-server__item--price {
  		font-size: 30px;
  		color: $article_title;
  		text-decoration: line-through;
  	}
  	.clinic-server__item--amount {
  		font-size: 30px;
  		color: $txt-orange;
  	}
  	.clinic-server__item--appointment_count {
  		float: right;
  		font-size: 24px;
  		color: $article_title;
  	}
  }
}
</style>