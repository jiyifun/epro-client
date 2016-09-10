<template>
	<div class="clinics">
		<div class="clinics-header">
			<div class="clinics-picker">
				<i class="icon icon-location"></i>
				<em class="clinics-picker__item location">东莞</em>	
			</div>
			<div class="clinics-picker">
				<em class="clinics-picker__item">全部诊所</em>
				<i class="icon icon-arrow_down"></i>
			</div>
			<div class="clinics-picker">
				<em class="clinics-picker__item">全部科室</em>
				<i class="icon icon-arrow_down"></i>
			</div>
			<div class="clinics-picker">
				<em class="clinics-picker__item">全部时间</em>
				<i class="icon icon-arrow_down"></i>
			</div>
		</div>
		<div class="clinics-wrap">
			
			<ul class="clinics-list">
				<li v-for="clinic in clinicsList" class="clinic-item">
					<div alt="" class="clinic-img"></div>
					<div class="clinic-info">
						<h3 class="clinic-name">{{clinic.name}}</h3>
						<ul class="clinic-projects">
							<li class="clinic-projects__item" v-for="project in clinic.projects">{{project}}</li>
						</ul>
						<div v-if="clinic.is_auth" class="clinic-auth">
							<i class=" icon-clinic_auth"></i>
							<span>认证</span>
						</div>
						<div class="clinic-distance">
							{{clinic.distance}}
						</div>
					</div>
				</li>
			</ul>
		</div>
		<tabbar></tabbar>
	</div>
</template>
<script>
import {} from '../constants'
import {} from '../constants/api'
import Tabbar from '../components/Vfooter'
import {updateHeadline} from '../vuex/actions'
export default {
  data () {
    return {
      clinicsList: [{
        name: '莞城体验店',
        img_url: '',
        distance: '5KM',
        projects: ['洁牙', '美白', '正畸'],
        is_auth: 1
      }, {
        name: '美齿口腔',
        img_url: '',
        distance: '>5KM',
        projects: ['洁牙', '正畸'],
        is_auth: 1
      }]
    }
  },
  components: {
    Tabbar
  },
  vuex: {
    actions: {
      updateHeadline
    }
  },
  created () {
    this.updateHeadline('找诊所')
  }
}
</script>
<style lang="scss">
@import '../styles/css/variable';
.icon {
  display: inline-block;
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
}
.icon-location {
	margin: 3px 0 0 35px;
	width: 32px;
	height: 32px;
	background-image: url('../assets/icon_location.png');
}
.icon-arrow_down {
	margin: 13px 0 0 10px;
	width: 20px;
	height: 20px;
	background-image: url('../assets/arrow-down.png');
}
.clinics-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 36px;
  padding: 25px 0;
  border-bottom: 2px solid $bordercolor;

  .clinics-picker {
  	display: inline-block;
  	width: 24%;
  	height: 36px;
  	// padding: 0 2.3%;
  	border-right: 1px solid $bordercolor;
  	// text-align: center;

  	.clinics-picker__item {
  	  color: $txt-default;
  	  padding-left: 20px;

  	  &.location {
  	  	padding-left: 80px;
  	  }
  	}
  }
  .clinics-picker:last-child {
  	border: none;
  }
}
.clinics-wrap {
  position: absolute;
  top: 86px;
  left: 0;
  right: 0;
  bottom: 100px;

  .clinics-list {

  	.clinic-item {
  		padding: 20px 30px;
  		border-bottom: 1px solid $bordercolor;
  		height: 180px;

  		.clinic-img {
  			float: left;
  			width: 220px;
  			height: 180px;

        //写死
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url('../assets/image/21-2.png');
  			// margin-top: 20px;
  		}
  		.clinic-info {
  			padding-left: 250px;

  			.clinic-name {
  				font-size: 34px;
  			}

  			.clinic-projects {
  				margin-top: 20px;
  				text-align: left;

  				.clinic-projects__item {
  					display: inline-block;
  					margin-right: 10px;
  					color: #fff;
  					padding: 2px 10px;
  					border-radius: 10px;
  					background-color: #21b95f;
  				}
  			}
  			.clinic-auth {
  				margin-top: 30px;
  				width: 80px;
  				height: 30px;
  				background-color: #1f1554;
  				line-height: 30px;
				
				.icon-clinic_auth {
					position: absolute;
          display: block;
          width: 20px;
          height: 20px;
					margin: 5px 0 0 5px;
          background-repeat: no-repeat;
          background-size: cover;
          background-image: url('../assets/icon_right.png');
				}
  				span {
  					color: #c1ba5d;
  					padding-left: 30px;
  				}
  			}

  			.clinic-distance {
  				position: absolute;
  				right: 30px;
  				margin-top: -30px;
  			}
  		}
  	}
  }
}
</style>