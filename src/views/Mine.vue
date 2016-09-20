<!-- 个人中心页 -->
<template>
<!--   <div id="main">
    <p class="not">个人中心</p>
    <form @submit.prevent="submit">
      <div class="weui_uploader_input_wrp">
        <input class="weui_uploader_input" name="file_data" id="file_data" type="file" accept="image/*" multiple />
      </div>
      <input class="weui_btn weui_btn_primary" type="submit" value="送出">
    </form>
    <tabbar></tabbar>
</div> -->
<div class="mine">
  <div class="mine-warp">
    <div class="mine-header">
      <div class="mine-avatar">
        <a @click="gotoSetting" class="mine-avatar-btn">
          <!-- ../assets/order/avatar.png -->
          <img v-if="user.avatar === null" :src="avatar_default" alt="" class="mine-avatar-photo">
          <img v-else :src="user.avatar" alt="" class="mine-avatar-photo">
        </a>
      </div>
      <div class="mine-description">
        <span class="mine-name">{{user.user_name}}</span>
      </div>
    </div>
    <!-- <div class="mine-order">
      <div class="mine-order-title">
        <div class="mine-order-title__left">
          <i class="mine-order-icon"></i>
          <em>我的订单</em>
        </div>
        <div class="mine-order-title__right">
          <span class="mine-order-checkall">查看全部订单</span>
          <i class="arrow-right"></i>
        </div>

      </div>
      <ul class="mine-order-types">
        <li class="mine-order-types__item">
          <a  class="order-types-link">
            <img src="../assets/order/icon_unpay.png" alt="" class="order-types-icon unpay">
            <span class="order-types-name">未付款</span>
          </a>
        </li>
        <li class="mine-order-types__item">
          <a  class="order-types-link">
            <img src="../assets/order/icon_unused.png" alt="" class="order-types-icon unused">
            <span class="order-types-name">未消费</span>
          </a>
        </li>
        <li class="mine-order-types__item">
          <a  class="order-types-link">
            <img src="../assets/order/icon_used.png" alt="" class="order-types-icon used">
            <span class="order-types-name">已消费</span>
          </a>
        </li>
        <li class="mine-order-types__item">
          <a  class="order-types-link">
            <img src="../assets/order/icon_pay-back.png" alt="" class="order-types-icon payback">
            <span class="order-types-name">退款单</span>
          </a>
        </li>
      </ul>
    </div>   -->
    <div class="mine-other">
      <ul class="mine-other-items">
        <!-- <li class="other-item">
          <a  class="other-item-link">
            <em class="other-item-title">我的健康指数</em>
            <ul v-show="user.star_count" class="star-list">
              <li :class="[user.star_count >= 1 ? 'star' : 'unstar']" class="star-item"><i class="star-icon"></i></li>
              <li :class="[user.star_count >= 2 ? 'star' : 'unstar']" class="star-item"><i class="star-icon"></i></li>
              <li :class="[user.star_count >= 3 ? 'star' : 'unstar']" class="star-item"><i class="star-icon"></i></li>
              <li :class="[user.star_count >= 4 ? 'star' : 'unstar']" class="star-item"><i class="star-icon"></i></li>
              <li :class="[user.star_count >= 5 ? 'star' : 'unstar']" class="star-item"><i class="star-icon"></i></li>
            </ul>
          </a>
        </li> -->
        <li @click="gotoDaily()" class="other-item"><a  class="other-item-link"><span class="other-item-title">我的看牙日记</span></a></li>
        <!-- <li class="other-item"><a  class="other-item-link"><span class="other-item-title">开始就诊</span></a></li> -->
      </ul>
    </div>
  </div>
  <tabbar></tabbar>
</div>
</template>
<script>
/*global alert:true*/
/*eslint no-undef: "error"*/
import {URL_ROOT_PRO, AVATAR_DEFAULT} from '../constants'
import {updateHeadline} from '../vuex/actions'
import * as api from '../constants/api'
import Tabbar from '../components/Vfooter'
export default {
  data () {
    return {
      user: {
        age: null,
        star_count: 0,
        user_name: null,
        avatar: null,
        is_registed: 0
      },
      url_root_pro: URL_ROOT_PRO,
      avatar_default: AVATAR_DEFAULT
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
    this.getUserData()
    this.updateHeadline('个人中心页')
  },
  methods: {
    getUserData () {
      var vm = this
      this.$http.get(api.GET_USER_DATA).then((response) => {
        var data = JSON.parse(response.body)
        if (data.errcode === 0 && data.result) {
          vm.user = data.result
        } else {
          alert('暂无数据')
        }
      }, (response) => {
          // error callback
        console.log(response.data)
      })
    },
    // 注册检查
    is_registed_check () {
      if (this.is_registed !== 1) {
        this.$route.router.go('/register/phone')
        return
      }
    },
    // 前往个人设置
    gotoSetting () {
      this.is_registed_check()
      // this.$route.router.go('/register/phone')
    },
    gotoDaily () {
      this.$route.router.go('/daily/list')
    }
  }
}
</script>
<style lang="scss">
@import '../styles/css/variable';
@import '../styles/css/util/border';

.mine-wrap {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 100px;
  padding: 40px 70px 0 70px;
  background-color: #fff;
  overflow: scroll;
}

.mine-header {
  position: relative;
  height: 264px;
  width: 100%;
  padding-top: 30px;
  background-color: $gray-bg;

  .mine-avatar {
    margin: 0 auto;
    width: 184px;
    height: 184px;
    border-radius: 50%;
    border: 1px solid #d3d3d3;/*px*/

    .mine-avatar-btn {
      display: block;
    }

    img.mine-avatar-photo {
      margin: 13px;
      width: 156px;
      height: 156px;
      border: 2px solid #fff;
      border-radius: 50%;
      overflow: hidden;
    }

  }
  .mine-description {
    line-height: 70px;
    text-align: center;
  }
}

.mine-order {
  background-color: #fff;

  .mine-order-title {
    position: relative;
    height: 80px;
    padding: 0 30px;
    line-height: 80px;
    border-bottom: 1px solid #d3d3d3;/*px*/

    .mine-order-title__left {
      // float: left;
      position: absolute;
      .mine-order-icon {
        position: absolute;
        display: inline-block;
        margin-top: 23px;
        width: 28px;
        height: 32px;
        background-size: cover;
        background-image: url('../assets/order/icon_mine-order.png');
      }
      em {
        padding-left: 35px;
        color: $txt-bold;
        font-size: 28px;
      }
    }
    .mine-order-title__right {
      float: right;

      .arrow-right {
        display: inline-block;
        width: 10px;
        height: 18px;
        background-size: cover;
        background-image: url('../assets/arrow-right.png');
      }
    }
    
  }

  .mine-order-types {
    text-align: center;
    height: 150px;

    li.mine-order-types__item {
      display: inline-block;
      padding: 30px 40px;

      a.order-types-link {
        display: block;
        width: 100px;

        img.order-types-icon {
          display: block;
          margin: 0 auto;
          width: 50px;
        }
      }
    }

  }
}
.mine-other {
  background-color: #e9e9e9;
  padding-top: 10px;

  .mine-other-items {
    background-color: #fff;
    padding: 0 30px;

    li.other-item {
      // padding: 0 40px;
      border-bottom: 1px solid #d3d3d3;
      line-height: 100px;

      .other-item-title {
        font-size: 32px;/*px*/
        color: $txt-bold;
      }
      .star-list {
        float: right;
        text-align: right;

        .star-item {
          display: inline-block;
          
          .star-icon {
            display: block;
            height: 19px;
            width: 20px;
            background-size: cover;
          }
          &.star .star-icon {
            background-image: url('../assets/order/icon_star.png');
          }
          &.unstar .star-icon {
            background-image: url('../assets/order/icon_unstar.png');
          }
        }
      }
    }
  }
}
</style>
