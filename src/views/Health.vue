<template>
 <div class="health">
    <div class="health-wrap">
      <!-- 牙周组织数据 -->
      <div class="examination periodontium">
        <div class="examination-item" @click="gotoArticle('oral_color' ,health_data.oral_color)" >
          <div class="examination-item__label">牙周颜色</div>
          <div class="examination-item__value">{{health_data.oral_color}}</div>
        </div>
        <div class="examination-item" @click="gotoArticle('tooth_broken' ,health_data.is_tooth_broken)" :class="{'warning': is_warning(health_data.is_tooth_broken)}">
          <div class="examination-item__label">残根残冠</div>
          <div class="examination-item__value">{{is_has(health_data.is_tooth_broken)}}</div>
        </div>
        <div class="examination-item" @click="gotoArticle('wisdom_tooth' ,health_data.is_wisdom_tooth_abnormal)" :class="{'warning': is_warning(health_data.is_wisdom_tooth_abnormal)}">
          <div class="examination-item__label">智齿异常</div>
          <div class="examination-item__value">{{is_has(health_data.is_wisdom_tooth_abnormal)}}</div>
        </div>
        <div class="examination-item" @click="gotoArticle('oral_mucosa' ,health_data.is_oral_mucosa_abnormal)" :class="{'warning': is_warning(health_data.is_oral_mucosa_abnormal)}">
          <div class="examination-item__label">口腔黏膜</div>
          <div class="examination-item__value">{{is_normal(health_data.is_oral_mucosa_abnormal)}}</div>
        </div>
      </div>
      <!-- 用户数据选择 -->
      <div class="user-picker">
        <a class="menu">
          {{health_data.user_name}}<span v-if="health_data.user_alias"class="user-name">-{{health_data.user_alias}}</span>
          <i class="arrow-down"></i>
        </a>
      </div>
      <!-- 口腔健康指数环形进度条 -->
      <div class="health-rote">
        <div class="circle-bg">
          <div class="blue-ring"></div>
          <div class="green-ring"></div>
          <div class="white-marsk"></div>
        </div>
        <div class="health-circle">
          <circle :percent='~~(health_data.health_percent)' :stroke-width=4 :trail-width=4 stroke-color="#3FC7FA" trail-color="#e1e1e1">
            <div class="health-data">
              <strong class="health-percent">{{health_data.health_percent}}</strong><span>分</span>
              <p>口腔健康指数</p>
            </div>
          </circle>
        </div>
      </div>
      <!-- 就诊建议 -->
      <div class="proposal">
        <h3 class="proposal-title">
          建议
        </h3>
        <p class="proposal-content">
          {{health_data.proposal}}
        </p>
      </div>
      <!-- 牙齿检查数据 -->
      <div class="examination tooth">
        <div class="examination-item" @click="gotoArticle('tooth_color' ,health_data.tooth_color)">
          <div class="examination-item__label">牙齿颜色</div>
          <div class="examination-item__value">{{health_data.tooth_color}}</div>
        </div>
        <div class="examination-item" @click="gotoArticle('tooth_outlook' ,health_data.tooth_outlook)">
          <div class="examination-item__label">牙齿外形</div>
          <div class="examination-item__value">{{health_data.tooth_outlook}}</div>
        </div>
        <div class="examination-item" @click="gotoArticle('is_lost' ,health_data.is_lost)" :class="{'warning': is_warning(health_data.is_lost)}">
          <div class="examination-item__label">是否缺失</div>
          <div class="examination-item__value">{{is_has(health_data.is_lost)}}</div>
        </div>
        <div class="examination-item" @click="gotoArticle('has_caries' ,health_data.has_caries)" :class="{'warning': is_warning(health_data.has_caries)}">
          <div class="examination-item__label">有无龋齿</div>
          <div class="examination-item__value">{{is_has(health_data.has_caries)}}</div>
        </div>
      </div>
      <!-- 其他项目 -->
      <div class="other">
        <div class="other-header">
          <img src="../assets/tooth.png" alt="" class="tooth">
          <span class="last-check-time">暂无数据</span>
        </div>
        <div class="health-line">
          <div :style="{width: health_data.health_percent + '%'}" class="health-line__percent"></div>
        </div>
        <div class="other-content">
          <div class="other-item" @click="gotoArticle('tooth_count' ,health_data.tooth_count)">
            <em class="other-item__label">牙齿数目</em>
            <p class="other-item__value">{{health_data.tooth_count}}</p>
          </div>
          <div class="other-item" @click="gotoArticle('tooth_arrange' ,health_data.tooth_arrange)">
            <em class="other-item__label">牙齿排列</em>
            <p class="other-item__value">{{health_data.tooth_arrange}}</p>
          </div>
        </div>
      </div>
    </div>  
   <tabbar></tabbar> 
 </div>
</template>

<script type="text/babel">
/*global alert:true*/
  import {updateHeadline} from '../vuex/actions'
  import Circle from 'vux/src/components/circle'
  import Tabbar from '../components/Vfooter'
  import * as api from '../constants/api'
  import {VAR_HAS, VAR_HAS_NOT, VAR_ABNORMAL, VAR_NORMAL} from '../constants'
  export default {
    data () {
      return {
        health_data: {
          has_caries: null,
          health_percent: 0,
          is_lost: null,
          is_oral_mucosa_abnormal: null,
          is_tooth_broken: null,
          is_wisdom_tooth_abnormal: null,
          oral_color: null,
          proposal: null,
          tooth_arrange: null,
          tooth_color: null,
          tooth_count: null,
          tooth_outlook: null,
          user_alias: null,
          user_id: null,
          user_name: null
        }
      }
    },
    computed: {
    },
    components: {
      Circle,
      Tabbar
    },
    vuex: {
      actions: {
        updateHeadline
      }
    },
    methods: {
      gotoArticle (item, val) {
        var normalUrl = 'normal'
        var warningUrl = 'warning'
        var result = null
        var project = null
        switch (item) {
          case 'tooth_broken':
            val === '1' ? result = warningUrl : result = normalUrl
            project = 'loosenTooth'
            break
          case 'wisdom_tooth':
            val === '1' ? result = warningUrl : result = normalUrl
            project = 'wisdomTooth'
            break
          case 'oral_color':
            val === '正常' ? result = normalUrl : result = warningUrl
            project = 'cleanTooth'
            break
          case 'oral_mucosa':
            val === '正常' ? result = normalUrl : result = warningUrl
            project = 'oralMucosa'
            break
          case 'tooth_color':
            val === '正常' ? result = normalUrl : result = warningUrl
            project = 'whiteningTooth'
            break
          case 'tooth_outlook':
            val === '正常' ? result = normalUrl : result = warningUrl
            project = 'cleanTooth'
            break
          case 'is_lost':
            val === '1' ? result = warningUrl : result = normalUrl
            project = 'loosenTooth'
            break
          case 'has_caries':
            val === '1' ? result = warningUrl : result = normalUrl
            project = 'cariesTooth'
            break
          case 'tooth_count':
            ~~val > 27 && ~~val < 33 ? result = normalUrl : result = warningUrl
            project = 'toothCount'
            break
          case 'tooth_arrange':
            val === '正常' ? result = normalUrl : result = warningUrl
            project = 'arrangeTooth'
            break
          default:
            result = normalUrl
            project = 'cleanTooth'
        }
        this.$route.router.go({name: result, params: {project: project}})
      },
      is_warning (val) {
        return val === '1'
      },
      is_has (val) {
        return val === '1' ? VAR_HAS : VAR_HAS_NOT
      },
      is_normal (val) {
        return val === '1' ? VAR_ABNORMAL : VAR_NORMAL
      // },
      // oral_mucosa () {
      //   return this.is_normal(this.health_data.is_oral_mucosa_abnormal)
      // },
      // wisdom_tooth () {
      //   return this.health_data.is_wisdom_tooth_abnormal === '1' ?
      },
      getHealthData () {
        var vm = this
        this.$http.get(api.GET_HEALTH_DATA).then((response) => {
          // alert(response.body)
          var data = JSON.parse(response.body)
          // alert('获取数据成功 2')
          console.info(data)
          if (data.errcode === 0 && data.result) {
            vm.health_data = data.result
            // alert('获取数据成功')
          } else {
            alert('暂无数据')
          }
        }, (response) => {
            // error callback
          console.log(response.data)
        })
      }
    },
    ready () {
      // alert('ready')
      this.updateHeadline('我的口腔数据')
      this.getHealthData()
    }
  }
</script>

<style lang="scss" scope>
@import '../styles/css/variable';
@import '../styles/css/util/border';

.health-wrap {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 100px;
  padding: 40px 70px 0 70px;
  background-color: #fff;
  overflow: scroll;
}
/*数据胶囊*/
 .examination {
  width: 305px;
  position: relative;
  
  .examination-title {
      position: absolute;
      transform:rotate(-35deg);
      colot: $txt-default;
  }
  .examination-item {
    position: absolute;
    width: 54px;
    height: 240px;
    background-size: cover;
    background-color: $theme-blue;
    text-align: center;
    line-height: 1.2;
    border-radius: 27px;
    font-size: 20px;
    &.warning {
      background: -webkit-linear-gradient(90deg, rgba(255,0,0,1) 0, rgba(244,171,79,1) 100%), -webkit-repeating-linear-gradient(0deg, rgba(145,186,63,1) 0, rgba(145,186,63,1) 2%, rgba(145,186,63,1) 8%, rgba(145,186,63,1) 16%, rgba(145,186,63,1) 21%, rgba(145,186,63,1) 27%, rgba(145,186,63,1) 29%, rgba(145,186,63,1) 33%, rgba(145,186,63,1) 39%, rgba(145,186,63,1) 53%, rgba(145,186,63,1) 60%, rgba(145,186,63,1) 79%, rgba(145,186,63,1) 85%, rgba(124,188,10,1) 100%);
        background: -moz-linear-gradient(0deg, rgba(255,0,0,1) 0, rgba(244,171,79,1) 100%), -moz-repeating-linear-gradient(90deg, rgba(145,186,63,1) 0, rgba(145,186,63,1) 2%, rgba(145,186,63,1) 8%, rgba(145,186,63,1) 16%, rgba(145,186,63,1) 21%, rgba(145,186,63,1) 27%, rgba(145,186,63,1) 29%, rgba(145,186,63,1) 33%, rgba(145,186,63,1) 39%, rgba(145,186,63,1) 53%, rgba(145,186,63,1) 60%, rgba(145,186,63,1) 79%, rgba(145,186,63,1) 85%, rgba(124,188,10,1) 100%);
        background: linear-gradient(0deg, rgba(255,0,0,1) 0, rgba(244,171,79,1) 100%), repeating-linear-gradient(90deg, rgba(145,186,63,1) 0, rgba(145,186,63,1) 2%, rgba(145,186,63,1) 8%, rgba(145,186,63,1) 16%, rgba(145,186,63,1) 21%, rgba(145,186,63,1) 27%, rgba(145,186,63,1) 29%, rgba(145,186,63,1) 33%, rgba(145,186,63,1) 39%, rgba(145,186,63,1) 53%, rgba(145,186,63,1) 60%, rgba(145,186,63,1) 79%, rgba(145,186,63,1) 85%, rgba(124,188,10,1) 100%);
        background-position: 50% 50%;
      // background-image: url('../assets/warning-bg.png');
    }
    .examination-item__label {
      padding: 15px 10px 5px;
      color: #fff;
      height: 100px;
      border-bottom: 1px solid $gray-deep;
    }
    .examination-item__value {
      color: #fff;
      padding: 10px;
    }
  }
  // 牙周部分
  &.periodontium {
    .examination-item:nth-child(1) {
      top: 160px;
      left: 0px;
    }
    .examination-item:nth-child(2) {
      top: 90px;
      left: 85px;
    }
    .examination-item:nth-child(3) {
      top: 26px;
      left: 170px;
    }
    .examination-item:nth-child(4) {
      top: 0px;
      left: 255px;
    }
    .examination-title {
      top: 260px;
      left: 110px;
    }
  }
  // 牙齿部分
  &.tooth {
    .examination-item:nth-child(1) {
      top: 54px;
      left: 0px;
    }
    .examination-item:nth-child(2) {
      top: 22px;
      left: 85px;
    }
    .examination-item:nth-child(3) {
      top: -40px;
      left: 170px;
    }
    .examination-item:nth-child(4) {
      top: -110px;
      left: 255px;
    }
    .examination-title {
      left: 50px;
      top: -20px;
    }
  }
 }

/*选择用户数据*/
.user-picker {
  float: right;

  a {
    display: block;
    height: 50px;
    line-height: 50px;
    padding: 0 10px;
    background-color: $gray-default;
    border-radius: 6px;
    color: $txt-default;

    span {
      color: $txt-bold;
    }
    i {
      width: 12px;
      height: 12px;
      display: inline-block;
      background-repeat: no-repeat;
      background-image: url('../assets/arrow-down.png')
    }
  }
 }  
/*健康指数环*/
 .health-rote {
  position: relative;
  margin: 264px auto 0;
  width:290px;
  height:290px;
  border-radius: 50%;
  overflow: hidden;
  // background-color: $theme-blue;
 }

 .circle-bg {
  position: absolute;
  width:290px;
  height:290px;
  background-color: $gray-deep;
  border-radius: 50%;
  overflow: hidden;

  .blue-ring {
    top: 0;
    left: 0;
    right: 50%;
    bottom: 50%;
    position: absolute;
    background-color: $theme-blue;
    border-top-left-radius:100%;
    overflow: hidden;
  }
  .green-ring {
    top: 50%;
    left: 50%;
    right: 0;
    bottom: 0;
    position: absolute;
    background-color: $green;
    border-bottom-right-radius: 100%;
    overflow: hidden;
  }
  .white-marsk {
    position: absolute;
    top: 1%;
    left: 1%;
    width: 98%;
    height: 98%;
    background-color: #fff;
    border-radius: 50%;
  }
 }
 .health-circle {
  position: relative;
  margin: 35px auto; 
  width: 220px;
  height: 220px;

  .health-data {
    margin-top: -30px;

    .health-percent {
      font-size: 100px;
      font-weight: lighter;
      color: $txt-default;
    }
    span {
      font-size: 36px;
      color: $txt-default;
    }
    p {
      font-size: 24px;
    }
  }
  
 }
/*就诊建议*/
.proposal {
  position: relative;
  float: left;
  width: 198px;
  height: 136px;
  border-radius: 6px;
  background-color: $gray-default;
  

  .proposal-title {
    position: absolute;
    margin-top: -50px;
    padding: 5px 10px;
    background-color: $gray-default;
    font-size: 24px;
    border-radius: 6px;
  }
  .proposal-content {
    width: 100%;
    height: 100%;
    padding: 5px;
    color: $txt-bold;
    font-size: 30px;

  }
}

//牙齿检查
.tooth {
  left: 50%;
}
.periodontium {
  position: absolute;
  right: 50%;
}
/*其他项目*/
.other {
  margin-top: 230px;
  margin-bottom: 30px;
  width: 100%;
  height: 230px;

  .tooth {
    width: 58px;
    height: 82px;
  }

  .health-line {
    position: relative;
    height: 2px;
    width: 95%;
    margin: 0 auto;
    background-color: $gray-deep;

    .health-line__percent {
      position: absolute;
      height: 2px;
      background-color: $theme-blue;
    }
  }

  .other-content {
    margin-top: 10px;
    width: 100%;
    height: 70px;
    padding: 30px 0;
    border-radius: 5px;
    box-shadow: 0 5px 10px 3px $gray-deep;
    text-align: center;

    .other-item {
      @extend .ui-border-r;
      display: inline-block;
      width: 47%;
      height: 60px;
      border-right: 1px solid $gray-deep;/*px*/
      line-height: 1;
      .other-item__label {
        color: $txt-bold;
        font-size: 24px;/*px*/
      }
      .other-item__value {
        margin-top: 10px;
        color: $txt-default;
        font-size: 28px; /*px*/
      }
    }

    .other-item:last-child {
      border: none;
    }

  }


}
</style>
