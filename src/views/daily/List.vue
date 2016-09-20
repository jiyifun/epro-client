<template>
	<div class="daily-list full-page">
		<ul v-if="list.length > 0" class="daily-list">
			<li class="daily-list__item" v-for="item in list">
				<div class="item-time">
					<p class="item-time__normal">{{item.create_time.slice(0, 4)}}</p>
					<p class="item-time__date">{{item.create_time.slice(5, 10)}}</p>
					<p class="item-time__normal">{{item.create_time.slice(11, 16)}}</p>
				</div>
				<div class="item-info">
					<img src="../../assets/image/21-2.png" alt="">
					<p>{{item.clinic_name}}</p>
					<!-- <span>{{item.project}}</span> -->
					<span>牙周养护</span>
				</div>
			</li>
		</ul>
		<div v-else class="empty">
			<img src="../../assets/icon_empty.png" alt="">
			<p>你还没有看牙历史哟</p>
		</div>
	</div>
</template>
<script>
import {updateHeadline} from '../../vuex/actions'
import {API_GET_DAILY_LIST} from '../../constants/api'
export default {
  data () {
    return {
      // list: []
      list: []
    }
  },
  vuex: {
    actions: {
      updateHeadline
    }
  },
  methods: {
    getDailyList () {
      var vm = this
      this.$http.get(API_GET_DAILY_LIST).then((resp) => {
        var data = JSON.parse(resp.body)
        if (data.errcode === 0) {
          vm.list = data.result
        } else {
          console.error(data.errmsg)
        }
      }, (err) => {
        console.error(err)
      })
    }
  },
  created () {
    this.updateHeadline('看牙日记')
    this.getDailyList()
  }
}
</script>
<style lang="scss" scope>
@import '../../styles/css/variable';
.daily-list {
	background-color: $gray-default;

  .empty {
  	position: absolute;
  	top: 50%;
  	left: 50%;
  	transform: translate(-50%, -50%);
		text-align: center;

		img {
			width: 200px;
			height: 187px;
		}
		p {
			margin-top: 20px;
			font-size: 32px;/*px*/
			color: $txt-light;
		}
  }
}
ul.daily-list {
	padding-top: 30px;

	li.daily-list__item {
		position: relative;
		margin-left: 30px;
		border-left: 2px solid $time-line;
		padding-bottom: 50px;
		height: 130px;

		&:before {
			content: '';
			display: block;
			position: absolute;
			margin: 60px 0 0 -7px;
			width: 14px;
			height: 14px;
			border-radius: 50%;
			background-color: $time-line-point;
		}

		.item-time {
			float: left;
			padding-top: 10px;
			width: 120px;
			text-align: center;
			
			.item-time__normal {
				font-size: 20px;/*px*/
				color: $txt-light;
			}
			.item-time__date {
				font-size: 28px;/*px*/
				color: $txt-light;
			}


		}

		.item-info {
			// margin-left: 120px;
			display: inline-block;
			height: 130px;
			width: calc(100% - 120px);
			background-color: #fff;

			img {
				float: left;
				padding: 5px;
				padding-right: 30px;
				width: 120px;
				height: 120px;
				border-radius: 10px;
			}
			p {
				padding-top: 10px;
				line-height: 50px;	
				font-size: 28px;/*px*/
				color: $txt-bold;
			}
			span {
				line-height: 50px;
				font-size: 24px;/*px*/
			}
		}
	}
}
</style>