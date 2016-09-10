<template>
  <div class="register">
    <div class="logo-wrap">
      <div class="logo"></div>
    </div>
      <form class="register-form" @submit.prevent="submit">
        <div class="form-raw">
          <i class="register-form__icon phone"></i>
          <input class="register-form__input" type="number" placeholder="请输入手机号" name="mobile" id="mobile" v-model="phone">
        </div>
        <div class="form-raw">
          <i class="register-form__icon vcode"></i>
          <input class="register-form__input" type="number" placeholder="请输入验证码" name="vcode" id="vcode" v-model="captcha">
          <div class="vcode-wrap">
            <span class="vcode-snip" v-show="wait">{{time}}秒后<br/>重新获取</span>
            <input class="vcode-btn" v-else type="button" @click="getCaptcha(phone)" value='获取验证码'>
          </div>
        </div>
        <div class="form-btn-wrap">
          <input class="submit-btn" type="submit" value="注册">
        </div>
      </form>
  </div>
</template>
<script>
/*global FormData:true alert:true*/
import {API_GET_CAPTCHA, API_REGISTER_BY_PHONE} from '../../constants/api'
export default {
  data () {
    return {
      timer: null,
      wait: false,
      time: 60,
      phone: null,
      captcha: null
    }
  },
  methods: {
    validatePhone (phone) {
      if (!phone || phone.length !== 11) {
        return false
      }
      return true
    },
    tip () {
      this.time --
      if (this.time < 0) {
        clearInterval(this.timer)
        this.time = 60
        this.wait = false
      }
    },
    startWaiting () {
      this.wait = true
      this.timer = setInterval(this.tip, 1000)
    },
    getCaptcha (phone) {
      if (!this.validatePhone(phone)) {
        // todo
        alert('请输入正确手机号！')
        return
      }
      var vm = this
      var formdata = new FormData()
      formdata.append('mobile', phone)
      this.$http.post(API_GET_CAPTCHA, formdata).then((response) => {
        // success
        var data = JSON.parse(response.body)
        if (data.errcode === 1001) {
          alert(data.errmsg)
          return
        }
        console.info(data)
        vm.startWaiting()
      }, (response) => {
        // failure
        var data = JSON.parse(response)
        console.error(data)
      })
    },
    submit (event) {
      if (!this.validatePhone(this.phone)) {
        // todo
        alert('请输入正确手机号！')
        return
      }
      if (!this.captcha) {
        alert('请输入验证码！')
        return
      }
      var vm = this
      var formdata = new FormData(event.target)
      this.$http.post(API_REGISTER_BY_PHONE, formdata).then((response) => {
        // success
        var data = JSON.parse(response.body)
        if (data.errcode !== 0) {
          alert(data.errmsg)
          return
        }
        vm.$route.router.go('/health')
      }, (response) => {
        // failure
        var data = JSON.parse(response.body)
        console.info(data)
      })
    }
  }
}
</script>
<style lang="scss">
@import '../../styles/css/variable';
	.register {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: $wx-bg;
  }
  .logo-wrap {
    margin-top: 80px;
    .logo {
      margin: 0 auto;
      width: 140px;
      height: 155px;
      background-image: url('../../assets/logo.png');
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
  .register-form {
    margin-top: 150px;

    .form-raw {
      position: relative;
      margin: 0 auto 30px;
      width: 538px;
      height: 90px;
      background-color: #878a8a;
      border-radius: 10px;

      .vcode-wrap {
        float: right;
        width: 136px;
        height: 90px;
        background-color: #494c4c;
        text-align: center;

        .vcode-btn {
          background-color: #494c4c;
          width: 100%;
          height: 100%;
          color: #fff;
        }
        .vcode-snip {
          display: block;
          line-height: 30px;
          padding-top: 15px;
          width: 100%;
          color: #fff;
        }
      }
    }
    .register-form__input {
      margin-left: 110px;
      width: 250px;
      font-size: 34px;/*px*/
      background-color: #878a8a;
      border: none;
      color: #fff;
      line-height: 90px;

    }
    .register-form__icon {
      position: absolute;
      background-size: contain;
      background-repeat: no-repeat;
      &.phone {
        margin: 27px 43px;
        width: 26px;
        height: 40px;
        background-image: url('../../assets/icon_phone.png');
      }
      &.vcode {
        margin: 33px 43px;
        width: 30px;
        height: 31px;
        background-image: url('../../assets/icon_vcode.png');
      }
    }
    .form-btn-wrap {
      margin-top: 65px;
      .submit-btn {
        display: block;
        margin: 0 auto;
        width: 430px;
        height: 90px;
        border-radius: 90px;
        background-color: $theme-blue;
        color: #fff;
        font-size: 36px;/*px*/
      }
    }
  }
</style>