<template>
  <div class="register">
    <div class="logo-wrap">
      <img src="" alt="" class="logo">
    </div>
      <form @submit.prevent="submit">
        <div class="form-raw">
          <label for="phone">手机号</label>
          <input type="number" name="mobile" id="mobile" v-model="phone">
        </div>
        <div class="form-raw">
          <label for="captcha">验证码</label>
          <input type="number" name="vcode" id="vcode" v-model="captcha">
          <span v-show="wait">{{time}}秒后重新获取</span>
          <input v-else type="button" @click="getCaptcha(phone)" value='获取验证码'>
        </div>
        <div class="form-raw">
          <input type="submit" value="注册">
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
      time: 30,
      phone: null,
      captcha: null
    }
  },
  methods: {
    validatePhone (phone) {
      if (!phone && phone.length < 11) {
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
      formdata.append('phone', phone)
      this.$http.post(API_GET_CAPTCHA, formdata).then((response) => {
        // success
        var data = JSON.parse(response.body)
        console.info(data)
        vm.startWaiting()
      }, (response) => {
        // failure
        var data = JSON.parse(response.body)
        console.info(data)
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
      var formdata = new FormData(event.target)
      this.$http.post(API_REGISTER_BY_PHONE, formdata).then((response) => {
        // success
        var data = JSON.parse(response.body)
        console.info(data)
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
	.
</style>