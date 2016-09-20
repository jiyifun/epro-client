<template>
	<div class="full-page clinic">
		<div class="clinic-header">
				<swiper id="clinic-swiper" v-ref:swiper
				        direction="horizontal"
				        :performance-mode="false"
				        :pagination-visible="true"
				        :pagination-clickable="true">
				    <div class="clinic-banner"></div>
				    <div class="clinic-banner"></div>
				    <div class="clinic-banner"></div>
				    <div class="clinic-banner"></div>
				</swiper>
				<div class="clinic-swiper__footer--bg"></div>
			<div class="clinic-swiper__footer">
				<div class="clinic-swiper__footer--container">
					<div class="clinic-info-item">
						<p class="clinic-info-item__number">{{clinic.appointment}}</p>
						<p class="clinic-info-item__title">预约</p>
					</div>
					<div class="clinic-info-item">
						<p class="clinic-info-item__number">{{clinic.cases}}</p>
						<p class="clinic-info-item__title">案例</p>
					</div>
					<div class="clinic-info-item">
						<p class="clinic-info-item__number">{{clinic.rank}}</p>
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
				<a :href="'tel:' + clinic.number" class="clinic_contact">
					<i class="icon icon-clinic_contact"></i>
				</a>
			</div>
		</div>
		<div class="clinic-server">
			<h2 class="clinic-server__title">我的美购</h2>
			<ul class="clinic-server__list">
				<li @click="gotoProject(clinic.id)" v-for="item in clinic.projects" class="clinic-server__item">
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
import {updateHeadline} from '../../vuex/actions'
export default {
  components: {
    Swiper
  },
  vuex: {
    actions: {
      updateHeadline
    }
  },
  data () {
    return {
      clinic: {
        name: '固德口腔会所',
        address: '东莞市莞城市政府富民路24号（盈丰科技大厦）固德口腔会所2、3楼',
        number: '0769-39000111',
        appointment: '12',
        cases: '21',
        rank: '1',
        imgs: [1, 2, 3],
        projects: [{
          id: 1,
          name: '【牙周养护套餐】',
          amount: '228',
          price: '1260',
          appointment_count: '31'
        }]
      }
    }
  },
  methods: {
    gotoProject (id) {
      this.$route.router.go({name: 'project', params: {id: id}})
    }
  },
  created () {
    this.updateHeadline('固德口腔会所')
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

// .icon {
// 	display: block;
// 	position: absolute;
// 	background-position: center;
// 	background-size: contain;
// 	background-repeat: no-repeat;
// }

.clinic-header {
	position: relative;
	height: 414px;
	width: 100%;
  
  #clinic-swiper {
  	height: 100%;
  	width: 100%;

  	.clinic-banner {
  		background-repeat: no-repeat;
  		background-position: center;
  		background-size: contain;
  	}

  	.clinic-banner:nth-child(1) {
  		background-image: url('../../assets/image/banner1.jpg');
  	}
  	.clinic-banner:nth-child(2) {
  		background-image: url('../../assets/image/banner2.jpg');
  	}
  	.clinic-banner:nth-child(3) {
  		background-image: url('../../assets/image/banner3.jpg');
  	}
  	.clinic-banner:nth-child(4) {
  		background-image: url('../../assets/image/banner4.jpg');
  	}
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